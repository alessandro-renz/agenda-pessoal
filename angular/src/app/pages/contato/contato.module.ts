import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IConfig, NgxMaskModule } from 'ngx-mask';

import { SharedModule } from 'src/app/shared/shared.module';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    ContatoComponent,
    AdicionarComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot(),
  ]
})
export class ContatoModule { }
