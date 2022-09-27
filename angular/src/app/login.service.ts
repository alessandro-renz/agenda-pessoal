import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL_BASE = 'https://metawaydemo.vps-kinghost.net:8485';
  userLogin!: User

  constructor(
    private http: HttpClient
  ) { }

  login(data: {username: string, password: string}): Observable<any>{
    return this.http.post(`${this.URL_BASE}/api/auth/login`, data)
  }

  setUser(user: User){
    localStorage.removeItem('user')
    localStorage.setItem('user', JSON.stringify(user))
  }

  get user(): User {
    const user = localStorage.getItem('user')
    this.userLogin = JSON.parse(String(user))
    return this.userLogin
  }

  clearUser(){
    localStorage.removeItem('user')
  }
}
