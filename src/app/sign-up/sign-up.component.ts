import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  templateUrl: './sign-up.component.html',
  styles: [
    `:host {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }`,
    `
    .example-additional-selection {
      opacity: 0.75;
      font-size: 0.75em;
    }
    `
  ]

})
export class SignUpComponent implements OnInit, AfterViewInit {
  hide = true;
  states: string[] = [];
  skills:string[]=[];
  @ViewChild("Skills") Skills:string[];

  constructor(private userService: UserService) {
    this.states = this.userService.getStates();
    this.skills = this.userService.getSkills();
  }
  // @ViewChild("signUp") SignUp;
  ngOnInit(): void {
    // console.log(this.SignUp);
  }
  ngAfterViewInit(): void {
    // console.log(this.SignUp);
  }


  // onSubmit(){
  //   // console.log(this.SignUp);
  //   console.log(this.SignUp.value);
  // }

  // onSubmit(form) {
  //   console.log(form);
  //   console.log(form.value);
  // }
  onSubmit(value) {
    console.log(value);
  }
  Cities: any[] = [];
  StateChanged(st) {
    this.Cities = this.userService.getCities(st.value);
  }

}
