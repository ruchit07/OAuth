import { Injectable } from '@angular/core';
import { RouteConfig } from 'src/app/shared/config/route.config';
import { AuthService } from 'src/app/shared/service/auth.service';
import { HttpClientService } from 'src/app/shared/service/http-client.service';
import { BaseService } from 'src/app/shared/service/base-service';
import { Api } from 'src/app/shared/class/api';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from './user';

@Injectable()
export class LoginService extends BaseService {

    constructor(
        private _httpClient: HttpClientService,
        private http: HttpClient,
        private _routeConfig: RouteConfig,
        private _auth: AuthService) {
        super(_httpClient, Api.Account)
    }

    login(user: IUser) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const httpOptions = { headers: headers };
        let body = new URLSearchParams();
        body.set('username', user.UserName);
        body.set('password', user.Password);
        body.set('grant_type', 'password');
        body.set('client_id', environment.OAuthClientId);
        body.set('client_secret', environment.OAuthClientSecret);

        return this.http.post<any>(`${environment.OAuthUrl}/token`, body.toString(), httpOptions);
    }

    setLoggedInUser(auth: any) {
        localStorage.setItem('authData', JSON.stringify(auth));
        localStorage.setItem('access_token', auth.access_token);
    }
}