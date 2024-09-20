import { Component, inject } from '@angular/core';
import { pedido } from '../Models/pedido';
import { ServiceCommunicationService } from '../service/service-communication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent {

  
  servicioInjectado =inject(ServiceCommunicationService);
  

  entregar(p:pedido){
    this.servicioInjectado.removerPedidoListo(p)
  }

}
