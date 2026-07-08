import type {LoginCredentials} from "@/features/auth/types/Login";

export async function authLoginUser(loginCreds: LoginCredentials) {
    //Build rest service here
    console.log(loginCreds);
    return 0;
}