import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  Aviso = 'Aviso de privacidad';
  cliente = 'ATENCION AL CLIENTE';
  contacto = 'Contactanos';
  Ubicacion = 'Ubicar tienda';
  Factura = 'Facturacion';
  Inicio = 'Inicio sesion/Registrarse';
}
