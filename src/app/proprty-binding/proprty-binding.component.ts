import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './proprty-binding.component.html',
  styles: [
  ]
})
export class ProprtyBindingComponent implements OnInit {
  imageUrl: string = "https://angular.io/assets/images/logos/angular/angular.png";
  disableButton: boolean = true;
  constructor() {
    setTimeout(() => {
      this.imageUrl = "https://angular.io/assets/images/logos/angular/angular_solidBlack.png";
      this.disableButton = false;
    }, 5000);
  }

  ngOnInit(): void {
  }



}
