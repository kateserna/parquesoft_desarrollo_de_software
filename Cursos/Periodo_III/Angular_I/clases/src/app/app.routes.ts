import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { WorldComponent } from './world/world.component';
import { PalindromoComponent } from './palindromo/palindromo.component';

export const routes: Routes = [
    {
        path: '',
        component: HelloComponent
    },
    /*{
        path: '',
        loadComponent: () => import('./hello/hello.component').then(m => m.HelloComponent)
    }*/
    {
        path: 'world',
        component: WorldComponent
    },
    {
        path: 'palindromo',
        component: PalindromoComponent
    },
    {
        path: 'material-test',
        loadComponent: () => import('./material-test/material-test.component').then(m => m.MaterialTestComponent)
    }
];
