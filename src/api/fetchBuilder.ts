import type {LoginCredentials} from "@/features/auth/types/Login";
const POST_METHOD: string = 'POST';
//const GET_METHOD: string = 'GET';
export function buildLoginAuthWrapper(lc: LoginCredentials) {
    const loginWrapper: RequestInit = initFetchWrapper(POST_METHOD);
    loginWrapper.body = JSON.stringify(lc);
    return loginWrapper;
}

function initFetchWrapper(method: string) {
    const fetchWrapper: RequestInit = {
        method: method,
        credentials: "include",
        headers: {
            'Content-Type': 'applications/json'
        }
    };
    return fetchWrapper;
}
