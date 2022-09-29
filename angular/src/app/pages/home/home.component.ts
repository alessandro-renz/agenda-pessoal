import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ContatoService } from 'src/app/contato.service';
import { Pessoa } from 'src/app/models/pessoa';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pessoas!: Pessoa[]
  ngUnsubscribe = new Subject()

  constructor(
    private contatoService: ContatoService
  ) { }

  ngOnInit() {
    this.contatoService.list
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(pessoas => {
      this.pessoas = pessoas
    })

  }
}
