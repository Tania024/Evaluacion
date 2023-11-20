import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotaComponent } from './nota/nota.component';
import { NotaListComponent } from './nota/nota-list/nota-list.component';
import { NotaService } from './nota/nota.service';
import { NotaDetalleComponent } from './nota/nota-detalle/nota-detalle.component';
import { NotaFormularioComponent } from './nota/nota-formulario/nota-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    NotaComponent,
    NotaListComponent,
    NotaDetalleComponent,
    NotaFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
