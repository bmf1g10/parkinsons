import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material/material.module';
import { AboutComponent } from './about/about.component';
import { GuidelineComponent } from './guideline/guideline.component';
import { ContainersRoutingModule } from './containers.routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    GuidelineComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ContainersRoutingModule    
  ]
})
export class ContainersModule { }
