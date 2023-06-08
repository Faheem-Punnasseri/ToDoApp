import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { TaskHistoryComponent } from './pages/task-history/task-history.component';
import { CompletedTaskComponent } from './pages/completed-task/completed-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { PendingtaskComponent } from './pages/pendingtask/pendingtask.component';


@NgModule({
  declarations: [
    TaskComponent,
    AddTaskComponent,
    TaskHistoryComponent,
    CompletedTaskComponent,
    PendingtaskComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ]
})

export class TaskModule { }
