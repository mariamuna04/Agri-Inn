import consoleLog, {LEVEL} from "$lib/server/log";
import {verifyRequest} from "$lib/server/utility";
import {Database} from "$lib/server/database";

export const POST = async ({request, cookies}: any): Promise<Response> => {
    consoleLog("GetOneEventAPI REQUEST Received", LEVEL.OK);
    // Protect API from unauthorized access.
    if (!verifyRequest(cookies)) {
        return new Response("Unauthorized", {status: 401});
    }
    // Extract the event_id from request
    const event_id = await request.json();

    const event_info = await Database.getOneEvent(event_id);
    if (!event_info) {
        consoleLog("GetOneEventAPI RESPONSE: status 404", LEVEL.ERROR);
        return new Response(null, {status: 404})
    }

    consoleLog("GetOneEventAPI RESPONSE: status 200", LEVEL.OK);
    return new Response(JSON.stringify(event_info), {status: 200})

}