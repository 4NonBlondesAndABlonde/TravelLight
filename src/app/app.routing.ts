import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './firstPage/home.component';
import { ResultsComponent } from './secondPage/second.page.component'

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  // { path: 'results', loadChildren: 'page2/page2.module' }
  {path: 'results', component: ResultsComponent}
];

export const routing = RouterModule.forRoot(routes);
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes);