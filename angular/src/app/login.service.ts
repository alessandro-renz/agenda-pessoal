import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL_BASE = 'https://metawaydemo.vps-kinghost.net:8485';

  constructor(
    private http: HttpClient
  ) { }

  login(data: {username: string, password: string}): Observable<any>{
    return this.http.post(`${this.URL_BASE}/api/auth/login`, data)
  }
}
