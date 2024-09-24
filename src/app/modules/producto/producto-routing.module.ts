import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FantasiaComponent } from './pages/fantasia/fantasia.component';
import { FiccionComponent } from './pages/ficcion/ficcion.component';
import { TerrorComponent } from './pages/terror/terror.component';
import { ProductoComponent } from './pages/producto/producto.component';

const routes: Routes = [

  {path: 'fantasia', component:FantasiaComponent},
  {path: 'ficcion', component:FiccionComponent},
  {path: 'terror', component:TerrorComponent},
  {path:'general', component:ProductoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
