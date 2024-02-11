import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../shared/material/material.module';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    ToolbarComponent, 
    SpinnerComponent],
  exports:[
    ToolbarComponent, 
    SpinnerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
