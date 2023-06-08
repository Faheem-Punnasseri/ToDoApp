import { Component } from '@angular/core';
import { TaskserviceService } from '../../service/taskservice.service';

@Component({
  selector: 'app-task-history',
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.css']
})
export class TaskHistoryComponent {
  showtasks: any[] = [];
  searchText: string = '';
  userId: any;

  constructor(private service: TaskserviceService) { }

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId")
    this.service.fetchTasks(this.userId, 'completed').subscribe((res: { statusCode: number, tasks: any[], msg: string }) => {
      if (res.tasks.length > 0) {
        this.showtasks = res.tasks;
      }
    }
    )
  }

  showSpinner = false;

  searchItems() {
    setTimeout(() => {
      this.showSpinner = true;
    }, 1000);
    setTimeout(() => {
      this.service.searchTask(this.userId, this.searchText).subscribe((res: { statusCode: number, searchResult: any[], msg: string }) => {
        this.showtasks = res.searchResult
      })
      this.showSpinner = false
    }, 2000);
  }
}
