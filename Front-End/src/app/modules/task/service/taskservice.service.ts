import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseTaskUrl } from 'environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskserviceService {

  constructor(private http: HttpClient) { }

  addTask(addedTaskdata: any): Observable<any> {
    http://127.0.0.1:8000/task/add
    return this.http.post(baseTaskUrl + 'add', addedTaskdata)
  }

  fetchTasks(userId: number, status: string): Observable<any> {
    const user = userId
    const params = new HttpParams().set('user', user)
    // https://baabtra.com/list/pending?user=1
    // https://baabtra.com/list/completed?user=1
    return this.http.get(baseTaskUrl + 'list/' + status, { params })
  }

  updateTask(taskId: number, formData: any): Observable<any> {
    // https://baabtra.com/task/update/1
    return this.http.put(baseTaskUrl + 'update/' + taskId, formData)
  }

  removeTask(id: number): Observable<any> {
    // https://baabtra.com/task/remove/1
    return this.http.delete(baseTaskUrl + 'remove/' + id)
  }

  searchTask(user: number, searchText: string): Observable<any> {
    const params = new HttpParams().set('user', user).set('query', searchText)
    return this.http.get(baseTaskUrl + 'search', { params })
  }

  editmodal(taskId: number, editedData: any): Observable<any> {
    return this.http.put(baseTaskUrl + 'update/' + taskId, editedData)
  }

}