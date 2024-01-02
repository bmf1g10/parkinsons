import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuidelineComponent } from './guideline/guideline.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'guideline', component: GuidelineComponent}, 
  { path: 'about', component: AboutComponent}, 
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainersRoutingModule { }
