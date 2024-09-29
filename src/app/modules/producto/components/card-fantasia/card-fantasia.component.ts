import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';
@Component({
  selector: 'app-card-fantasia',
  templateUrl: './card-fantasia.component.html',
  styleUrls: ['./card-fantasia.component.css']
})
export class CardFantasiaComponent {
  coleccionProductos: Producto[] = [];

  coleccionFantasia: Producto[] = [];

  productoSeleccionado!: Producto;

  modalVisible: boolean = false;

  constructor(public servicioCrud: CrudService){}

  ngOnInit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;

      this.mostrarProductoFantasia();
    })

  }

  mostrarProductoFantasia(){
    this.coleccionProductos.forEach(producto => {

      if(producto.categoria === "fantasia"){
        this.coleccionFantasia.push(producto);
      }
    })
  }

  mostrarVer(info: Producto){
    this.modalVisible = true;

    this.productoSeleccionado = info;
  }
}
