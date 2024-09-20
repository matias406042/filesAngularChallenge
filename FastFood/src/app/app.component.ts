import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POSComponent } from "../pos/pos.component";
import { KitchenComponent } from "../kitchen/kitchen.component";
import { DeliveryComponent } from "../delivery/delivery.component";
import { pedido } from '../Models/pedido';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, POSComponent, KitchenComponent, DeliveryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  pedidosIngresados :pedido[] =[]
  pedidosConcinar: pedido[] =[]


  recibirPedido(p : pedido)
  {
    this.pedidosIngresados.push(p)
  }


}
