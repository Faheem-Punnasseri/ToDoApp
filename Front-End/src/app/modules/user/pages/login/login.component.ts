import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: LoginService, private snackBar: MatSnackBar, private router: Router) {
  }

  submitForm(data: NgForm) {
    this.service.login(data).subscribe((res: {
      statusCode: number,
      message: string,
      token: string,
      userId: number,
      userName: string,
      pic: string
    }) => {
      if (res.statusCode == 200) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("userId", res.userId.toString());
        localStorage.setItem("userName", res.userName);
        localStorage.setItem("image", res.pic);
        this.router.navigate(['/task/dashboard'])
        this.showSnackBar(res.message, 'snackBarSuccess')
      } else {
        this.showSnackBar(res.message, 'snackBarDanger')
      }
    })
  }

  showSnackBar(message: string, style: string) {
    this.snackBar.open(message, 'X', {
      panelClass: style,
      duration: 2000
    },)
  }

}