import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material/material.module';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule    
  ]
})
export class ContainersModule { }
