import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Gentle Gator Golf Tutorials'
  },
  {
    path: '**',
    redirectTo: '',
  },
];
