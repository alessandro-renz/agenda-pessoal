import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private readonly BASE_URL = 'https://metawaydemo.vps-kinghost.net:8485'
  private token = this.loginService.user.accessToken

  constructor(
    private http: HttpClient,
    private loginService: LoginService
  ) { }

  get list(): Observable<any> {
    const id = this.loginService.user.id
    return this.http.get(`${this.BASE_URL}/api/contato/listar/${id}`, {headers: {username: "admin", password: "12345678"}})
  }

  save(data: {}): Observable<any>{
    return this.http.post(`${this.BASE_URL}/api/contato/salvar`, data, {headers: {Authorization: this.token}})
  }
}
