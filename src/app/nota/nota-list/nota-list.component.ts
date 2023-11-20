import { Component } from '@angular/core';
import { Nota } from 'src/app/menu/nota';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-nota-list',
  templateUrl: './nota-list.component.html',
  styleUrls: ['./nota-list.component.css']
})
export class NotaListComponent {
  nota: Nota[] = [];

  constructor(private notaService: NotaService) {
    this.nota = this.notaService.obtenerNotas();
  }
}
