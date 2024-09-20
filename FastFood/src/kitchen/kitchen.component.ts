import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  {ServiceCommunicationService}from '../service/service-communication.service'
import { pedido } from '../Models/pedido';
@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
  
  servicioInjectado =inject(ServiceCommunicationService);
  pedidoEnCocion?: pedido 
   
    cocinar(p:pedido){

    this.pedidoEnCocion = p
    this.servicioInjectado.removerPedidoIngresado(p)
   }
   terminarPedido(){
    if(this.pedidoEnCocion!==undefined){
    this.servicioInjectado.cargarPedidoListo(this.pedidoEnCocion)
    this.pedidoEnCocion=undefined
    }
    else alert("falta pedido en coccion")

    
   }


}

