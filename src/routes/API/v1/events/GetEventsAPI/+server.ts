import consoleLog, {LEVEL} from "$lib/server/log";
import {verifyRequest} from "$lib/server/utility";
import {Database} from "$lib/server/database";

export const GET = async ({cookies}: any) => {
    consoleLog("GetEventsAPI REQUEST Received", LEVEL.OK);
    // Protect API from unauthorized access.
    if (!verifyRequest(cookies)) {
        return new Response("Unauthorized", {status: 401});
    }
    const allEventsInfo = await Database.getAllEvents();
    if (!allEventsInfo) {
        consoleLog("GetEventsAPI RESPONSE: status 404", LEVEL.ERROR);
        return new Response(null, {status: 404});
    }
    consoleLog("GetEventsAPI RESPONSE: status 200", LEVEL.OK);
    return new Response(JSON.stringify(allEventsInfo), {status: 200});
}