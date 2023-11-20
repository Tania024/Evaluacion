import { Component } from '@angular/core';
import { NotaService } from '../nota.service';
import { Nota } from 'src/app/menu/nota';

@Component({
  selector: 'app-nota-formulario',
  templateUrl: './nota-formulario.component.html',
  styleUrls: ['./nota-formulario.component.css']
})
export class NotaFormularioComponent {
  nuevaNota: Nota = { id: 0, contenido: '', fecha: '', etiquetas: [] };

  constructor(private notaService: NotaService) {}

  agregarNota(): void {
    this.notaService.agregarNota(this.nuevaNota);
    this.nuevaNota = { id: 0, contenido: '', fecha: '', etiquetas: [] };
  }
}
