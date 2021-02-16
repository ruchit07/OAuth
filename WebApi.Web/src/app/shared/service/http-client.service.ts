import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouteConfig } from '../config/route.config';

export interface IRequestOptions {
    body?: any;
    headers?: HttpHeaders | { [header: string]: string | Array<string> };
    observe?: any;
    params?: HttpParams | { [param: string]: string | Array<string> };
    reportProgress?: boolean;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
}

@Injectable()
export class HttpClientService {

    constructor(private http: HttpClient,
        private routeConfig: RouteConfig) { }

    /**
     * Make http GET request without authentication token
     * @param url
     */
    get(url: string) {
        return this.http.get<any>(this.routeConfig.Url(url));
    }

    /**
     * Make http GET request with authentication token
     * @param url
     */
    authGet(url: string) {
        return this.http.get<any>(this.routeConfig.Url(url));
    }

    /**
     * Make http POST request without authentication token
     * @param url
     * @param data
     */
    post(url: string, data: any) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const httpOptions = { headers: headers };
        //let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);

        return this.http.post<any>(this.routeConfig.Url(url), body, httpOptions);
    }

    /**
     * Make http POST with authentication token
     * @param url
     * @param data
     */
    authPost(url: string, data: any) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };
        let body = JSON.stringify(data);

        return this.http.post<any>(this.routeConfig.Url(url), body, options);
    }


    /**
     * Make http PUT with authentication token
     * @param url
     * @param data
     */
    authPut(url: string, data: any) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };
        let body = JSON.stringify(data);

        return this.http.put<any>(this.routeConfig.Url(url), body, options);
    }

    /**
     * Make http PUT with authentication token
     * @param url
     * @param data
     */
    authDelete(url: string) {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const options = { headers: headers };

        return this.http.delete<any>(this.routeConfig.Url(url), options);
    }

    /**
     * Download file
     * @param url
     * @param data
     */
    authDownloadFile(url: string, data: any): Observable<any> {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: 'blob'
        };
        let body = JSON.stringify(data);

        return this.http
            .post<any>(this.routeConfig.Url(url), body, {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
                responseType: 'json'
            });
    }

    /**
     * Make POST for the image upload with authentication token
     * @param url
     * @param file
     */
    authImageUpload(url: string, file: any) {
        let input = new FormData();
        input.append('file', file);
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
        const httpOptions = { headers: headers };
        return this.http
            .post<any>(this.routeConfig.Url(url), input, httpOptions);
    }

    /**
     * Make POST for multiple image upload with authentication token
     * @param url
     * @param file
     * @param model
     */
    authMultipleImageUpload(url: string, file: any, model?: any) {
        let input = new FormData();
        input.append('file', file);
        input.append('model', JSON.stringify(model));
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
        const httpOptions = { headers: headers };
        return this.http
            .post<any>(this.routeConfig.Url(url), input, httpOptions);
    }

    /**
     * POST multiple file with authentication token
     * @param url
     * @param files
     * @param model
     */
    authMultipleFileUpload(url: string, files: any[], model?: any) {
        let input = new FormData();

        if (files && files.length > 0) {
            for (let file of files) {
                input.append(file.name, file);
            }
        }

        input.append('model', JSON.stringify(model));
        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem('id_token'));
        const httpOptions = { headers: headers };
        return this.http
            .post<any>(this.routeConfig.Url(url), input, httpOptions);
    }
}
