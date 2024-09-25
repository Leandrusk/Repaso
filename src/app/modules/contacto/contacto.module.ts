import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { DescripcionDeContactoComponent } from './descripcion-de-contacto/descripcion-de-contacto.component';


@NgModule({
  declarations: [
    DescripcionDeContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule
  ]
})
export class ContactoModule { }
