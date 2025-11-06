import { Component, Input } from '@angular/core';
import { Comic } from '../../../models/comic';

@Component({
    selector: 'app-hijocomic',
    standalone: false,
    templateUrl: './hijocomic.html',
    styleUrl: './hijocomic.css',
})
export class Hijocomic {
    @Input() objeto!: Comic;
}
