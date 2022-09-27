import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/contato.service';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contatos!: []

  constructor(
    private contatoService: ContatoService
  ) { }

  ngOnInit() {
    this.contatoService.list.subscribe(contatos => {
      console.log(contatos)
    })
  }

}
