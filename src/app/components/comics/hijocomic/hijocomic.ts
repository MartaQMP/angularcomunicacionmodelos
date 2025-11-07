import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../../models/comic';

@Component({
    selector: 'app-hijocomic',
    standalone: false,
    templateUrl: './hijocomic.html',
    styleUrl: './hijocomic.css',
})
export class Hijocomic {
    @Input() objetocomic!: Comic;
    @Input() index!: number;
    @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter<any>();
    @Output() eliminarComic: EventEmitter<any> = new EventEmitter<any>();

    elegirFavorito(): void {
        this.seleccionarFavorito.emit(this.objetocomic);
    }

    borrarComic():void{
        this.eliminarComic.emit(this.index)
    }
}
