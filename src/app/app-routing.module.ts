import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './containers/example/example.component';
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';

const routes: Routes = [
  { path: 'example', component: ExampleComponent}, 
  { path: 'about', component: AboutComponent}, 
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
