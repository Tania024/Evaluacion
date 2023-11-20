import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotaListComponent } from './nota/nota-list/nota-list.component';
import { NotaDetalleComponent } from './nota/nota-detalle/nota-detalle.component';

const routes: Routes = [
  { path: '', component: NotaListComponent },
  { path: 'nota/:id', component: NotaDetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
