import { Component, Output ,EventEmitter, inject} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { pedido } from '../Models/pedido';
import { ServiceCommunicationService } from '../service/service-communication.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {
  servicioInjectado =inject(ServiceCommunicationService);

   onSubmit(form:NgForm) {
    
      console.log("pedido enviado "+ form.value);
      this.servicioInjectado.insertarPedido(form.value);
      form.reset();      
  }
}
