import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { Apartado1Component } from './pages/apartado1/apartado1.component';
import { FiccionComponent } from './pages/ficcion/ficcion.component';
import { TerrorComponent } from './pages/terror/terror.component';
import { FantasiaComponent } from './pages/fantasia/fantasia.component';
import { ProductoComponent } from './pages/producto/producto.component';


@NgModule({
  declarations: [
    Apartado1Component,
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
