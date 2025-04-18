import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./core/components/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'pipes',
        loadComponent: () => import('./core/components/ejemplos-pipes/ejemplos-pipes.component').then(m => m.EjemplosPipesComponent)
    },
    {
        path: 'observers',
        loadComponent: () => import('./shared/components/observables/observables.component').then(m => m.ObservablesComponent)
    },
    {
        path: 'personajes',
        loadComponent: () => import('./core/components/personajes/personajes.component').then(m => m.PersonajesComponent)
    }
    



];
