import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-descripcion-de-contacto',
  templateUrl: './descripcion-de-contacto.component.html',
  styleUrls: ['./descripcion-de-contacto.component.css']
})
export class DescripcionDeContactoComponent {

  mensaje(){
    Swal.fire({
      title: "��Gracias!",
      text: "Tu mensaje ha sido enviado correctamente.",
      icon: "success"
    });
  
  }

}
