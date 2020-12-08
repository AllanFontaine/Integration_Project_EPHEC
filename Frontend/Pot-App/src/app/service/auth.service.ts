import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  private url = 'https://api.pot-app.be/api';

  helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }

  login(data): Observable<any> {
    console.log(data);
    return this.http.post(this.url + '/token', data)
  }

  registerUser(user): Observable<any> {
    return this.http.post(this.url + '/register', user)
  }

  postProfil(user): Observable<any> {
    return this.http.post(this.url + "/profile/", user)
  }

  LoggedIn(): boolean {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token')
      return !this.helper.isTokenExpired(token)
    } else {
      return false
    }
  }

  getToken() {
    return localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
  }

  get_User(user_id): Observable<any> {
    return this.http.get(this.url + '/users/' + user_id + '/')
  }

  get_Profile(user_id): Observable<any> {
    return this.http.get(this.url + '/profile/' + user_id + '/')
  }
}
