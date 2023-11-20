import { Component } from '@angular/core';
import { Nota } from 'src/app/menu/nota';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-nota-detalle',
  templateUrl: './nota-detalle.component.html',
  styleUrls: ['./nota-detalle.component.css']
})
export class NotaDetalleComponent {
  nota: Nota[] = [];

  constructor(private notaService: NotaService) {
    this.nota = this.notaService.obtenerNotas();
  }
}
