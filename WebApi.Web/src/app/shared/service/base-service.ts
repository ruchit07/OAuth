import { Injectable, Inject } from '@angular/core';
import { HttpClientService } from 'src/app/shared/service/http-client.service';

@Injectable()
export class BaseService {

    constructor(
        private httpClient: HttpClientService,
        @Inject(String) private url: string) { }

    getById(id: number) {
        return this.httpClient.authGet(`${this.url}/${id}`);
    }

    getByUId(uid: string) {
        return this.httpClient.authGet(`${this.url}/uid/${uid}`);
    }

    getAll() {
        return this.httpClient.authGet(`${this.url}`);
    }

    getFiltered(queryString: string) {
        return this.httpClient.authGet(`${this.url}/filtered?${queryString}`);
    }

    add(data: any) {
        return this.httpClient.authPost(`${this.url}`, data);
    }

    update(data: any, id: number) {
        return this.httpClient.authPut(`${this.url}/${id}`, data);
    }

    delete(id: number) {
        return this.httpClient.authDelete(`${this.url}/${id}`);
    }
}