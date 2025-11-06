
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Listaproductos } from './components/listaproductos/listaproductos';
import { Notfound } from './components/notfound/notfound';

const appRoutes: Routes = [
  { path: '', component: Listaproductos },
  { path: '**', component: Notfound },
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
