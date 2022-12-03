import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/ResponseModel';
import { RegistrationCredential } from '../models/registration-model';
import { LoginResponse } from '../models/login-success.model';
import { LoginCredential } from '../models/login-credential.model';
import { User, UserProfile } from '../models/user.model';

const BASE_URL = 'https://chafanarosa--cbs--backend.herokuapp.com/api/auth/';
// const BASE_URL = 'http://localhost:3000/api/auth/'
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

  updateProfile(userInfo: UserProfile): Observable<UserProfile> {
    return this.http.patch<UserProfile>(BASE_URL + 'user', userInfo);
  }

  storeCredential(token: string, expiry: string, user: User) {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('expiry', expiry);
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  storeCredentialForUpdate(user: UserProfile) {

    if (sessionStorage.getItem('user')) {
      let currentProfile = JSON.parse(sessionStorage.getItem('user')!);
      let updatedUser: User = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
        _id: currentProfile._id
      }
      sessionStorage.setItem('user', JSON.stringify(updatedUser))
    }
  }

  retrieveCredential() {
    let token: string | null = sessionStorage.getItem('token');
    let expiry: string | null = sessionStorage.getItem('expiry')
    let user: User | null = null;

    if (sessionStorage.getItem('user')) {
      user = JSON.parse(sessionStorage.getItem('user')!)
    }

    if (token && expiry && user) {
      return {
        token, expiry, user
      }
    } else {
      return null;
    }
  }

  clearCredentials() {
    sessionStorage.clear();
  }
}
