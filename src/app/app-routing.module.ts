import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidelineComponent } from './containers/guideline/guideline.component';
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';

const routes: Routes = [
  { path: 'guideline', component: GuidelineComponent}, 
  { path: 'about', component: AboutComponent}, 
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
