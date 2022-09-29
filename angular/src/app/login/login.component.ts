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
  error = false

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginService.clearUser()
  }

  submit(){
    const data = {
      username: this.username,
      password: this.password
    }
    this.loginService.login(data).subscribe(user => {
      if(user.accessToken){
        this.loginService.setUser(user)
        this.router.navigate(["page"])
        return
      }
    }, () => {
      this.error = true
    })
  }
}
