import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

import { FiccionComponent } from './pages/ficcion/ficcion.component';
import { TerrorComponent } from './pages/terror/terror.component';
import { FantasiaComponent } from './pages/fantasia/fantasia.component';
import { ProductoComponent } from './pages/producto/producto.component';


@NgModule({
  declarations: [

    FiccionComponent,
    TerrorComponent,
    FantasiaComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
