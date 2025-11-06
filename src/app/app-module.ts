import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Listaproductos } from './components/listaproductos/listaproductos';
import { Menu } from './components/menu/menu';
import { appRoutingProvider, routing } from './app.routing';
import { Notfound } from './components/notfound/notfound';
import { Padrecoches } from './components/coches/padrecoches/padrecoches';
import { Hijocoches } from './components/coches/hijocoches/hijocoches';
import { Padredeportes } from './components/deportes/padredeportes/padredeportes';
import { Hijodeportes } from './components/deportes/hijodeportes/hijodeportes';
import { Hijocomic } from './components/comics/hijocomic/hijocomic';
import { Padrecomic } from './components/comics/padrecomic/padrecomic';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        App,
        Listaproductos,
        Menu,
        Notfound,
        Padrecoches,
        Hijocoches,
        Padredeportes,
        Hijodeportes,
        Hijocomic,
        Padrecomic,
    ],
    imports: [BrowserModule, routing, FormsModule],
    providers: [provideBrowserGlobalErrorListeners(), appRoutingProvider],
    bootstrap: [App],
})
export class AppModule {}
