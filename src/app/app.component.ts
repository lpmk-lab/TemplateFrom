import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TemplateFrom';
 @ViewChild('registFrom') from:NgForm
  Onsubimt( ){
    console.log(this.from);

  }
}
