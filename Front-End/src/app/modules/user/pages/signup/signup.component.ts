import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from '../../service/signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  constructor(private service: SignupService, private snackbar: MatSnackBar, private router: Router) {
  }

  userPic: any;

  signup(formData: any) {
    const uploadedData = new FormData()

    uploadedData.append('name', formData['name'])
    uploadedData.append('email', formData['email'])
    uploadedData.append('mobile', formData['mobile'])
    uploadedData.append('password', formData['password'])

    if (this.userPic != undefined) {
      uploadedData.append('image', this.userPic)
    }

    this.service.addTask(uploadedData).subscribe((res: { statusCode: number, message: string }) => {
      if (res.statusCode == 201) {
        this.showSnackBar(res.message, 'snackBarSuccess');
        this.router.navigate(['user/dashboard/login']);
      }
      else {
        this.showSnackBar(res.message, 'snackBarDanger')
      }
    })
  }

  onImageChanged(event: any) {
    this.userPic = event.target.files[0]
  }

  showSnackBar(message: string, style: string) {
    this.snackbar.open(message, 'X', {
      panelClass: style,
      duration: 2000
    },)
  }
}
