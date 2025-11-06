import { Component, Input } from '@angular/core';
import { Coche } from '../../../models/coche';

@Component({
    selector: 'app-hijocoches',
    standalone: false,
    templateUrl: './hijocoches.html',
    styleUrls: ['./hijocoches.css'],
})
export class Hijocoches {
    @Input() cochecito!: Coche;
    public mensaje: string;

    constructor() {
        this.mensaje = '';
    }

    comprobarEstado(): boolean {
        if (this.cochecito.estado === false) {
            this.mensaje = 'El coche esta apagado';
            this.cochecito.velocidad = 0;
            return false;
        } else {
            this.mensaje = 'Arrancando';
            return true;
        }
    }

    cambiarEstadoCoche(): void {
        this.cochecito.estado = !this.cochecito.estado;
        this.comprobarEstado();
    }

    acelerarCoche(): void {
        if (this.comprobarEstado() == false) {
            alert('El coche esta apagado. Arrancalo');
        } else {
            this.cochecito.velocidad += this.cochecito.aceleracion;
        }
    }
}
