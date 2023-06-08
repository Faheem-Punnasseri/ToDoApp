import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskserviceService } from '../../service/taskservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  userId: any;
  ngOnInit(): void {
    this.userId = localStorage.getItem("userId") || null;
  }

  constructor(private service: TaskserviceService, private snackbar: MatSnackBar) { }

  taskForm = new FormGroup({
    task: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required])
  })

  get task() {
    return this.taskForm.get('task');
  }

  get desc() {
    return this.taskForm.get('desc')
  }

  get priority() {
    return this.taskForm.get('priority')
  }

  resetForm() {
    this.taskForm.reset();
  }

  submitTaskForm() {
    const taskUploadedData = new FormData()
    const taskValue = this.taskForm.get('task')?.value;
    const descValue = this.desc?.value
    const priority = this.priority?.value
    taskUploadedData.append("task", taskValue || '')
    taskUploadedData.append("description", descValue ?? '')
    taskUploadedData.append("priority", priority ?? '')
    taskUploadedData.append("user", this.userId)

    this.service.addTask(taskUploadedData).subscribe((res: { statusCode: number, msg: string }) => {
      if (res.statusCode == 201) {
        this.showSnackBar(res.msg, 'snackBarSuccess');
        this.resetForm();
      }
      else {
        this.showSnackBar(res.msg, 'snackBarDanger')
      }
    })
  }

  showSnackBar(message: string, style: string) {
    this.snackbar.open(message, 'X', {
      panelClass: style,
      duration: 2000
    },)
  }

}