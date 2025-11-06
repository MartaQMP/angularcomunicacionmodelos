import { Component } from '@angular/core';
import { Coche } from '../../../models/coche';

@Component({
    selector: 'app-padrecoches',
    standalone: false,
    templateUrl: './padrecoches.html',
    styleUrls: ['./padrecoches.css'],
})
export class Padrecoches {
    public coches: Array<Coche>;

    constructor() {
        this.coches = [
            new Coche('Ford', 'Mustang', 240, 20, false),
            new Coche('Audi', 'A8', 240, 26, false),
            new Coche('Porsche', '911', 240, 40, false),
            new Coche('Ferrari', 'Italia', 360, 35, false),
            new Coche('Aston Martin', 'Valkirie', 440, 53, false),
            new Coche('Peugeot', '208', 190, 16, false),
        ];
    }
}
