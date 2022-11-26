import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/ResponseModel';
import { RegistrationCredential } from '../models/registration-model';
import { LoginResponse } from '../models/login-success.model';
import { LoginCredential } from '../models/login-credential.model';

const BASE_URL = 'https://chafanarosa-cbs-backend.herokuapp.com/api/auth/';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signUp(regBody: RegistrationCredential): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(BASE_URL + 'signup', regBody, HEADER);
  }

  logIn(loginCred: LoginCredential): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(BASE_URL + 'signin', loginCred, HEADER);
  }

}
