export interface LoginCredentials {
    username?: string;
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface LoginRequest {
    name: string;
}