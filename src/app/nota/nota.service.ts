import { Injectable } from '@angular/core';
import { Nota } from '../menu/nota';

@Injectable({
  providedIn: 'root'
})
export class NotaService {
  private notas: Nota[] = [];

  agregarNota(nuevaNota: Nota): void {
    // Lógica para añadir una nueva nota
    this.notas.push({ ...nuevaNota, id: this.notas.length + 1 });
  }

  obtenerNotas(): Nota[] {
    // Devuelve la lista de notas
    return this.notas;
  }

  actualizarNota(notaActualizada: Nota): void {
    // Lógica para actualizar una nota
    const index = this.notas.findIndex((nota) => nota.id === notaActualizada.id);
    if (index !== -1) {
      this.notas[index] = notaActualizada;
    }
  }
}
