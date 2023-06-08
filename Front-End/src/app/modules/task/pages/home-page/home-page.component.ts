import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../../service/taskservice.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  userId: any;
  pendingTaskNumber: number = 0;
  completedTaskNumber: number = 0;
  totalTask: number = 0;
  userName: any = "";

  constructor(private service: TaskserviceService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem("userName") || null;
    this.userId = localStorage.getItem("userId") || null;
    this.loadValue();
  }

  loadValue() {
    this.service.fetchTasks(this.userId, 'pending').subscribe((res: any) => {
      if (res.tasks.length > 0) {
        this.pendingTaskNumber = res.tasks.length;
        this.calculateSum();
      }
    });

    this.service.fetchTasks(this.userId, 'completed').subscribe((res: any) => {
      if (res.tasks.length > 0) {
        this.completedTaskNumber = res.tasks.length;
        this.calculateSum();
      }
    });
  }

  calculateSum() {
    if (this.pendingTaskNumber !== null && this.completedTaskNumber !== null) {
      this.totalTask = this.pendingTaskNumber + this.completedTaskNumber;
    }
  }
}
