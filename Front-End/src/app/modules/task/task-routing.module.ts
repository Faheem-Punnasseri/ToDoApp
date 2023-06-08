import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { TaskHistoryComponent } from './pages/task-history/task-history.component';
import { CompletedTaskComponent } from './pages/completed-task/completed-task.component';
import { TaskComponent } from './task.component';
import { PendingtaskComponent } from './pages/pendingtask/pendingtask.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
  {
    path: 'dashboard', component: TaskComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomePageComponent },
      { path: 'addTask', component: AddTaskComponent },
      { path: 'taskHistory', component: TaskHistoryComponent },
      { path: 'pendingTask', component: PendingtaskComponent },
      { path: 'completedTask', component: CompletedTaskComponent },
      { path: '**', redirectTo: '/task/dashboard/home' },

    ]
  },
  { path: '**', redirectTo: '/task/dashboard/home' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
