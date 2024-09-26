import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { TerrorComponent } from './pages/terror/terror.component';
import { FiccionComponent } from './pages/ficcion/ficcion.component';
import { FantasiaComponent } from './pages/fantasia/fantasia.component';
import { ProductoComponent } from './pages/producto/producto.component';

import {MatProgressBarModule} from '@angular/material/progress-bar';
//componentes de material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import {MatTooltipModule} from '@angular/material/tooltip';

import {MatRippleModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
   
    ProductoComponent,
    TerrorComponent,
    FiccionComponent,
    FantasiaComponent

  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDividerModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatCheckboxModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatDividerModule
  ]
})
export class ProductoModule {


 }
