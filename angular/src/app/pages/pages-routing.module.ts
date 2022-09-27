import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  	{
		path: "",
		loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
	},
	{
		path: "contatos",
		loadChildren: () => import("./contato/contato.module").then(m => m.ContatoModule)
	},
];

@NgModule({
imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
