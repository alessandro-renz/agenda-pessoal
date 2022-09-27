import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  constructor(
    private contatoService: ContatoService
  ) { }

  ngOnInit() {
    this.contatoService.list.subscribe(contatos => {
      console.log(contatos)
    })
  }

}
