import { CelularFormComponent } from './../celular/celular-form/celular-form.component';
import { CelularConsultaComponent } from './../celular/celular-consulta/celular-consulta.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/celular',
    pathMatch: 'full'
  },
  {
    path: 'celular',
    pathMatch: 'full',
    component: CelularConsultaComponent,
  },

  {
    path: 'celular/cadastro',
    pathMatch: 'full',
    component: CelularFormComponent,
  }


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
