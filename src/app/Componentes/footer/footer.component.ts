import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
fecha:Date = new Date();
fechaCompleta = this.fecha.getHours() > 12 ? `0${this.fecha.getHours() - 12}:${this.fecha.getMinutes()}:0${this.fecha.getSeconds()} p. m. ` : `  ${this.fecha.getHours()}:${this.fecha.getMinutes()}:${this.fecha.getSeconds()} a. m.`;


integrante1:string = "Fabian Osorio Botero";
integrante2:string = "Jeisson Olivares Pulido";



}
