import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/contato.service';
import { Pessoa } from 'src/app/models/pessoa';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  contatos!: Pessoa[]

  constructor(
    private contatoService: ContatoService
  ) { }

  ngOnInit() {
    this.contatoService.list.subscribe(contatos => {
      this.contatos = contatos
    })
  }

}
