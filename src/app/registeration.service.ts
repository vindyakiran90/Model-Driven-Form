import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
  
  _url='http://localhost:3000/enroll';
  constructor(private _http: HttpClient) { }

    register(userData){
      this._http.post<any>(this._url, userData);
    }
}
