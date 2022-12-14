import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardRouteGuard } from 'src/app/guard-route.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [GuardRouteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
