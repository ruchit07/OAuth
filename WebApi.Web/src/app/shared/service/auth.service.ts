import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor() { }

    /**
     * Get access token from local storage
     */
    static getToken(): string {
        return localStorage.getItem('access_token');
    }

    /**
     * Set access token in local storage
     */
    static setToken(token: string): void {
        localStorage.setItem('access_token', token);
    }

    static removeToken(): void {
        localStorage.removeItem('access_token');
    }

    /**
     * Check if authentication token is valid or not
     */
    public isAuthenticated(): boolean {
        return AuthService.getToken() ? true : false;
    }
}