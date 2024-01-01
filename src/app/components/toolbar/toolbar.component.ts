import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private router:Router){  }

  public navigateToExample(){
    this.router.navigate(["/example"]);
  }
  public navigateToAbout(){
    this.router.navigate(["/about"]);
  }

  public navigateToHome(){
    this.router.navigate(["/"]);
  }

}
