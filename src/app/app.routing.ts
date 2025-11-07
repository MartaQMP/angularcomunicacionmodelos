
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Listaproductos } from './components/listaproductos/listaproductos';
import { Notfound } from './components/notfound/notfound';
import { Padredeportes } from './components/deportes/padredeportes/padredeportes';
import { Padrecomic } from './components/comics/padrecomic/padrecomic';
import { Padrecoches } from './components/coches/padrecoches/padrecoches';

const appRoutes: Routes = [
  { path: '', component: Listaproductos },
  { path: 'deportes', component: Padredeportes },
  { path: 'comics', component: Padrecomic },
  { path: 'coches', component: Padrecoches },
  { path: '**', component: Notfound },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
