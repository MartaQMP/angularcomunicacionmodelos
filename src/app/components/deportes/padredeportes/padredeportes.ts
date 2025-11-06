import { Component } from '@angular/core';

@Component({
    selector: 'app-padredeportes',
    standalone: false,
    templateUrl: './padredeportes.html',
    styleUrl: './padredeportes.css',
})
export class Padredeportes {
    public deportes: Array<string>;
    public favorito: string;

    constructor() {
        this.deportes = ['Futbol', 'Baloncesto', 'Formula1'];
        this.favorito = '';
    }

    //NECESITAMOS UN METODO Q RECIBIRA EVENT Q VA A SER CUALQUIER TIPADO (any)
    seleccionarFavorito(event: any): void {
        this.favorito = event;
    }
}
