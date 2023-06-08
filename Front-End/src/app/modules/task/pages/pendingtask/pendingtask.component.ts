import { Component } from '@angular/core';
import { TaskserviceService } from '../../service/taskservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pendingtask',
  templateUrl: './pendingtask.component.html',
  styleUrls: ['./pendingtask.component.css']
})
export class PendingtaskComponent {

  constructor(private service: TaskserviceService, private snackBar: MatSnackBar) { }

  taskList: any[] = []; //Many data's will be fetched VIA api call, so this is used to store
  userId: any;
  indexofModalData: number = 0;
  date = "";
  task = "";
  description = "";
  priority = "";
  taskPriority = 'all';
  isSelected = false;
  filteredList: any[] = [];

  ngOnInit(): void {
    this.userId = localStorage.getItem("userId")
    this.loadPendingTasks();
  }

  loadPendingTasks() {
    this.service.fetchTasks(this.userId, 'pending').subscribe((res: { statusCode: number, tasks: any[], msg: string }) => {
      if (res.tasks.length > 0) {
        this.taskList = res.tasks
        this.filteredList = this.taskList
      }
    })
  }

  deleteTask(id: number, index: number) {
    this.service.removeTask(id).subscribe((res: { statusCode: number, msg: string }) => {
      this.taskList.splice(index, 1)
      this.showSnackBar(res.msg, 'snackBarDanger')
    })
  }

  updateRow(selectedItem: any, index: number) {
    const uploadedData = new FormData()
    let currentDate = new Date().toLocaleDateString()
    uploadedData.append('completion_date', currentDate)
    uploadedData.append('description', selectedItem['description'])
    uploadedData.append('task', selectedItem['task'])
    uploadedData.append('status', 'completed')
    uploadedData.append('user', this.userId)

    this.service.updateTask(selectedItem.id, uploadedData).subscribe((res: { statusCode: number, msg: string }) => {
      this.taskList.splice(index, 1)
    })
  }

  showSnackBar(message: string, style: string) {
    this.snackBar.open(message, 'X', {
      panelClass: style,
      duration: 2000
    },)
  }

  tableId: number = 0;

  showDetails(displayItem: any, index: any, tbIndex: any) {
    this.date = displayItem['date'];
    this.task = displayItem['task'];
    this.description = displayItem['description'];
    this.priority = displayItem['priority'];
    this.indexofModalData = index;
    this.tableId = tbIndex;
  }

  filterTask() {
    if (this.taskPriority != 'all') {
      if (this.isSelected == false) {
        this.filteredList = this.taskList.filter((item: any) => {
          return item.priority.includes(this.taskPriority);
        });
        this.isSelected = true
      }
      else {
        this.filteredList = this.taskList;
        this.filteredList = this.taskList.filter((item: any) => {
          return item.priority.includes(this.taskPriority);
        });
      }
    }
    else {
      this.filteredList = this.taskList;
    }
  }

  editTask(formDatauPDATE: any) {
    const editFormData = new FormData()
    editFormData.append('completion_date', formDatauPDATE['date'])
    editFormData.append('description', formDatauPDATE['description'])
    editFormData.append('task', formDatauPDATE['task'])
    editFormData.append('priority', formDatauPDATE['priority'])
    editFormData.append('user', this.userId)

    this.service.editmodal(this.indexofModalData, editFormData).subscribe((res: {
      statusCode: number,
      msg: string
    }) => {

      if (res.statusCode == 202) {
        this.showSnackBar(res.msg, 'snackBarSuccess');
        this.filteredList[this.tableId].description = formDatauPDATE['description'];
        this.filteredList[this.tableId].priority = formDatauPDATE['priority'];
        this.filteredList[this.tableId].task = formDatauPDATE['task'];
      } else {
        this.showSnackBar(res.msg, 'snackBarDanger')
      }
    })
  }

}
