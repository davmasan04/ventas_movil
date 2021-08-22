import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiserviceService } from '../../servicios/apiservice.service';

//structure

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  resultado: any;
  
  constructor ( private servicio: ApiserviceService ){
    this.servicio.obtenerDatos(1).subscribe(
      (respuesta) => {
        this.resultado = JSON.stringify(respuesta);
      }
    )
  }
  
  login( fLogin: NgForm ){
    console.log( this.resultado )
  }

}
