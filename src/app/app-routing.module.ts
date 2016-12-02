import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './landingPage/home.component';
import { ResultsComponent } from './secondPage/second.page.component';
import { LoadingPageComponent} from './loadingPage/loading-page.component'

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  // { path: 'results', loadChildren: 'page2/page2.module' }
  {path: 'results', component: ResultsComponent},
  {path: 'loading', component: LoadingPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
