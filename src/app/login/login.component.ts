import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() {
    console.group("test","Test");
   }

  ngOnInit(): void {
  }

  onSubmit(value){
    console.group("test","Test");
  }

}
