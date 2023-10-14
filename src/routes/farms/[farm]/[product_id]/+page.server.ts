import {redirect} from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import {JWT_SECRET} from "$env/static/private";

export const load = async ({cookies, url}: any) => {
    // Get cookie value "sessionID"
    const token = cookies.get('sessionID');

    // If the cookie is not found, redirect to sign-in page
    // Because the user is not authenticated
    if (!token) throw redirect(307, "/sign-in");

    // If the cookie is found, verify the JWT
    let authenticated: any;
    try {
        authenticated = jwt.verify(token, JWT_SECRET);
    } catch (e) {
        console.log(e);
        throw redirect(307, "/sign-in");
    }

    const urlPath = url.pathname.split("/");
    const product_id = urlPath[urlPath.length - 1];
    const farm_id = urlPath[urlPath.length - 2];


    // If the JWT is valid, return the username
    return {
        full_name: authenticated.full_name,
        username: authenticated.username,
        email: authenticated.email,
        profile_picture: authenticated.profile_picture,
        user_role: authenticated.user_role,
        product_id: product_id,
        farm_id: farm_id
    }
}