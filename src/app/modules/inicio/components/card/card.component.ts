import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  coleccionProductos: Producto[] = [];

  coleccionInicio: Producto[] = [];

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;

      this.mostrarProductoInicio();
    })

  }

  mostrarProductoInicio(){
    this.coleccionProductos.forEach(producto => {

      if(producto.categoria === "inicio"){
        this.coleccionInicio.push(producto);
      }
    })
  }

  mostrarVer(info: Producto){
    this.modalVisible = true;

    this.productoSeleccionado = info;
  }
}