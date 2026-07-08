import type {LoginCredentials} from "@/features/auth/types/Login";
import * as FetchBuilder from "./fetchBuilder";
import * as Endpoints from "./endpoints";

export function authUserLogin(lc: LoginCredentials) {
    const authUrl = Endpoints.ENDPOINTS.AUTH.LOGIN;
    const ri = FetchBuilder.buildLoginAuthWrapper(lc);
    const response = doFetch(authUrl, ri);
    return response;
}

async function doFetch(authUrl: string, ri: RequestInit) {
    const request = new Request(authUrl, ri);
    fetch(request).then(
        (value) => {
            console.log('This is value: ' + JSON.stringify(value));
            return value;
        },
        (error) => {
            console.log('Not working: ' + error);
        }
    );
}