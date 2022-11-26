import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { AsideComponent } from './Componentes/aside/aside.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { QuienessomosComponent } from './Componentes/quienessomos/quienessomos.component';
import { ServiciosComponent } from './Componentes/servicios/servicios.component';
import { TestimoniosComponent } from './Componentes/testimonios/testimonios.component';
import { ContactanosComponent } from './Componentes/contactanos/contactanos.component';



//Rutas
const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'QuienesSomos', component: QuienessomosComponent },
  { path: 'Testimonios', component: TestimoniosComponent },
  { path: 'Contactanos', component: ContactanosComponent },
  { path: 'Servicios', component: ServiciosComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    InicioComponent,
    QuienessomosComponent,
    ServiciosComponent,
    TestimoniosComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    YouTubePlayerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
