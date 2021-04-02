import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) {
    console.group("test", "Test");
  }

  ngOnInit(): void {
  }

  onSubmit(value) {
    this.userService.login(value).subscribe((resp:any) => {
      localStorage.setItem("access_token",resp.access_token);
      localStorage.setItem("role",resp.roles);
      localStorage.setItem("user_name",resp.userName);
    })
  }

}
