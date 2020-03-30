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
    console.log('api login');
    return this.http.postWithoutToken(config.LOGIN_URL, obj);
  }

  signUp(obj): Observable <any> {
    console.log('api signup');
    const reqPayload = new SignupPayload(obj);
    return this.http.postWithoutToken(config.REGISTER_URL, reqPayload);
  }

  uploadImage(obj): Observable <any> {
    console.log('api upload image');
    // this.httpWithCustomHeaders.setCustomHeaders({'Content-Type':  'multipart/form-data'});
    return this.http.post(config.UPLOAD_IMAGE, obj);
  }
}
