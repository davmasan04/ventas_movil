import { createCssSelector } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';

interface Pedido{
  icon: string;
  client: string;
  status: string;
  redirectTo: string;
}

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  pedidos: Pedido[] = [
    {
      icon: 'storefront-outline',
      client: 'Sr. David Sanchez',
      status: 'ellipse-outline',
      redirectTo: '/inicio',
    },
    {
      icon: 'storefront-outline',
      client: 'Sra. María Lourdes',
      status: 'ellipse-outline',
      redirectTo: '/inicio'
    },
    {
      icon: 'storefront-outline',
      client: 'Sr. Ballejo Arauz',
      status: 'ellipse-outline',
      redirectTo: '/inicio'
    },
    {
      icon: 'storefront-outline',
      client: 'Sra. Gloria Bonifaz Pazmiño',
      status: 'ellipse-outline',
      redirectTo: '/inicio'
    },
  ];

  constructor() { }
  ngOnInit() {
  }

}
