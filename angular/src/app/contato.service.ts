import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private readonly BASE_URL = 'https://metawaydemo.vps-kinghost.net:8485'

  constructor(
    private http: HttpClient
  ) { }

  get list() {
    return this.http.get(`${this.BASE_URL}`)
  }
}
