import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { CardComponent } from './card/card.component';
import { CardFantasiaComponent } from './card-fantasia/card-fantasia.component';
import { CardFiccionComponent } from './card-ficcion/card-ficcion.component';
import { CardTerrorComponent } from './card-terror/card-terror.component';


@NgModule({
  declarations: [
    CardComponent,
    CardFantasiaComponent,
    CardFiccionComponent,
    CardTerrorComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
