import { Route } from '@angular/router';
import { BrMainComponent } from './br-main/br-main.component';

export const uiBrRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: BrMainComponent },
  {
    path: 'c',
    loadChildren: () => import('@deps/ui-cr/*').then((m) => m.UiCrModule),
  },
];
