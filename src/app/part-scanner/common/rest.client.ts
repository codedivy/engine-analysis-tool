import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AuthGuard } from 'src/app/shared';

@Injectable({
    providedIn: 'root'
})
export class RestClient {

    private headers: object;

    constructor(private http: HttpClient, private auth: AuthGuard) {
      this.headers = {};
    }

    private getHttpOptions() {
        return {
            headers: new HttpHeaders({
              ...{
                //   'Content-Type':  'application/json',
                'Authorization': localStorage.getItem('token')
              },
              ...this.headers
            })
        };
    }

    public setCustomHeaders(customHeaders) {
      this.headers = customHeaders;
    }

    get(url: string, payload: Object = null, token = null): Observable<any> {
        return Observable.create((observer: Observer<any>) => {
            if (isNullOrUndefined(payload)) {
                this.http.get(url, this.getHttpOptions()).subscribe(response => {
                    if ( this.auth.handleSession(response as any) ) {
                        this.auth.logOut();
                    } else {
                        observer.next(response);
                    }
                });
            } else {
                return this.http.post(url, payload, this.getHttpOptions()).subscribe(response => {
                    if ( this.auth.handleSession(response as any) ) {
                        this.auth.logOut();
                    } else {
                        observer.next(response);
                    }
                });
            }
        });
    }

    post(url: string, payload: Object = null, token = null): Observable<any> {
      return Observable.create((observer: Observer<any>) => {
        return this.http.post(url, payload, this.getHttpOptions()).subscribe(response => {
          if ( this.auth.handleSession(response as any) ) {
            this.auth.logOut();
          } else {
            observer.next(response);
          }
        });
      });
    }

    postWithoutToken(url: string, payload: object = {}) {
        return this.http.post(url, payload);
    }

}
