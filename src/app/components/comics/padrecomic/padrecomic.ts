import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Comic } from '../../../models/comic';
import { Comics } from '../../../services/comics'

@Component({
    selector: 'app-padrecomic',
    standalone: false,
    templateUrl: './padrecomic.html',
    styleUrl: './padrecomic.css',
    //DEBEMOS DECLARAR EL SERVICIO PARA PODER RECUPERARLO
    //DENTRO DE UN CONSTRUCTOR
})
export class Padrecomic implements OnInit {
    @ViewChild('cajaNombre') cajaNombre!: ElementRef;
    @ViewChild('cajaDescripcion') cajaDescripcion!: ElementRef;
    @ViewChild('cajaImagen') cajaImagen!: ElementRef;
    public comics!: Array<Comic>;
    public comicFavorito!: Comic;

    constructor(private _service: Comics) {}

    ngOnInit(): void {
        this.comics = this._service.getComics();
    }

    seleccionarFavorito(event: Comic): void {
        this.comicFavorito = event;
    }

    eliminarComic(index: number) {
        this.comics.splice(index, 1);
    }

    crearComic(): void {
        let nombre = this.cajaNombre.nativeElement.value;
        let descripcion = this.cajaDescripcion.nativeElement.value;
        let imagen = this.cajaImagen.nativeElement.value;
        let nuevoComic = new Comic(nombre, imagen, descripcion);
        this.comics.push(nuevoComic);
    }
}
