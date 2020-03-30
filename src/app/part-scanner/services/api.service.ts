import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../../config';
import { RestClient } from '../common/rest.client';
import { SignupPayload } from 'src/app/signup/models/request/signup-payload';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: RestClient) { }


  login(obj): Observable <any> {
    console.log('api login')
    return this.http.post(config.LOGIN_URL, obj);
  }

  signUp(obj): Observable <any> {
    console.log('api signup')
    const reqPayload = new SignupPayload(obj);
    return this.http.post(config.REGISTER_URL, reqPayload);
  }

  uploadImage(obj): Observable <any> {
    console.log('api upload image')
    return this.http.post(config.UPLOAD_IMAGE, obj);
  }
}
