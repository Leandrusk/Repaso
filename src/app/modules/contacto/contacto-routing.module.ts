import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescripcionDeContactoComponent } from './descripcion-de-contacto/descripcion-de-contacto.component';

const routes: Routes = [
  { path: 'descripcion_de_contacto', component:DescripcionDeContactoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
