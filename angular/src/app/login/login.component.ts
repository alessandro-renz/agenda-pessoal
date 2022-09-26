import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username!: string
  password!: string

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    const token = localStorage.getItem("token")
    if(token){
      this.router.navigate(["page"])
    }
  }

  submit(){
    const data = {
      username: this.username,
      password: this.password
    }
    this.loginService.login(data).subscribe(user => {
      if(user.accessToken){
        localStorage.removeItem('token')
        localStorage.setItem('token', user.accessToken)
        this.router.navigate(["page"])
      }
    })
  }
}
