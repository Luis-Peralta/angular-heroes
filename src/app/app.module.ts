import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DetallesComponent } from './detalles/detalles.component';
import { PipesPipe } from './pages/pipes.pipe';

import { HttpClientModule } from '@angular/common/http';
import { OrdenarAparienciaPipe } from './pages/ordenar-apariencia.pipe';
import { OrdenarNombrePipe } from './pages/ordenar-nombre.pipe';
import { BuscarNombrePipe } from './pages/buscar-nombre.pipe';
import { BuscarAparienciaPipe } from './pages/buscar-apariencia.pipe';
import { FormsModule } from '@angular/forms';
import { QuirepnomPipe } from './pages/quirepnom.pipe';
import { QuirepapaPipe } from './pages/quirepapa.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetallesComponent,
    PipesPipe,
    OrdenarAparienciaPipe,
    OrdenarNombrePipe,
    BuscarNombrePipe,
    BuscarAparienciaPipe,
    QuirepnomPipe,
    QuirepapaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
