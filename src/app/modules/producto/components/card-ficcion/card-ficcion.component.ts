import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-card-ficcion',
  templateUrl: './card-ficcion.component.html',
  styleUrls: ['./card-ficcion.component.css']
})
export class CardFiccionComponent {
  coleccionProductos: Producto[] = [];

  coleccionFiccion: Producto[] = [];

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;

      this.mostrarProductoFiccion();
    })

  }

  mostrarProductoFiccion(){
    this.coleccionProductos.forEach(producto => {

      if(producto.categoria === "ficcion"){
        this.coleccionFiccion.push(producto);
      }
    })
  }

  mostrarVer(info: Producto){
    this.modalVisible = true;

    this.productoSeleccionado = info;
  }
}
