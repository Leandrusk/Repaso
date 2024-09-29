import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

//vistas
import { TerrorComponent } from './pages/terror/terror.component';
import { FiccionComponent } from './pages/ficcion/ficcion.component';
import { FantasiaComponent } from './pages/fantasia/fantasia.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CardComponent } from './components/card/card.component';
import { CardFantasiaComponent } from './components/card-fantasia/card-fantasia.component';
import { CardFiccionComponent } from './components/card-ficcion/card-ficcion.component';
import { CardTerrorComponent } from './components/card-terror/card-terror.component';


@NgModule({
  declarations: [
    CardComponent,
    ProductoComponent,
    TerrorComponent,
    FiccionComponent,
    FantasiaComponent,
    CardFantasiaComponent,
    CardFiccionComponent,
    CardTerrorComponent

  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
  ],
  exports:[
    CardComponent,
    ProductoComponent,
    TerrorComponent,
    FiccionComponent,
    FantasiaComponent,
    CardFantasiaComponent,
    CardFiccionComponent,
    CardTerrorComponent
    
  ]
})
export class ProductoModule {


 }
