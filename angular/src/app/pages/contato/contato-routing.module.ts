import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardRouteGuard } from 'src/app/guard-route.guard';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { ContatoComponent } from './contato.component';

const routes: Routes = [
  {
    path: "",
    component: ContatoComponent,
    canActivate: [GuardRouteGuard]
  },
  {
    path: "add",
    component: AdicionarComponent,
    canActivate: [GuardRouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
