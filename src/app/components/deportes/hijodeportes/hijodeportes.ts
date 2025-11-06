import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-hijodeportes',
    standalone: false,
    templateUrl: './hijodeportes.html',
    styleUrl: './hijodeportes.css',
})
export class Hijodeportes {
    @Input() sport!: string;
    @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();

    //NECESITAMOS UN METODO PARA Q CADA HIJO REALICE CLICK Y
    //A SU VEZ, LLAMEMOS AL PADRE
    seleccionarFavoritoHijo(): void {
        //DENTRO DE emit ENVIAREMOS LOS PARAMETROS QUE NECESITAMOS
        this.seleccionarFavoritoPadre.emit(this.sport);
    }
}
