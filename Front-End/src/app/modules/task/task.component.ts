import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baseUrl } from 'environment';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
  imageLoaded = false;
  defaultImageUrl = '../../../../../assets/images/default_pic.png';
  imgPic: any = "";

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.imgPic = baseUrl + localStorage.getItem("image") || null;
  }

  handleImageError() {
    this.imgPic = this.defaultImageUrl;
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['user']);
  }

}