import { Injectable } from '@angular/core';
import { pedido } from '../Models/pedido';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ServiceCommunicationService {

  constructor() { }
  pedidosListos : pedido[]=[]
  pedidosIngresados : pedido[] = []
 
 
  insertarPedido(p : pedido){
    
     p.number=this.pedidosIngresados.length
     p.date=new Date()
    this.pedidosIngresados.push(p);
    console.log(this.pedidosIngresados[this.pedidosIngresados.length-1])
  }

  cargarPedidoListo(p : pedido){
    this.pedidosListos.push(p)
    this.pedidosIngresados.splice(p.number,1)
    console.log(this.pedidosListos)

  }

  removerPedidoIngresado(p:pedido){
    const index = this.pedidosIngresados.indexOf(p);
    if(index!==-1){
    this.pedidosIngresados.splice(index,1)
    }
  }

  removerPedidoListo(p:pedido){

    const index = this.pedidosListos.indexOf(p);
    if(index!==-1){
    this.pedidosListos.splice(index,1)
    }
  }





}
