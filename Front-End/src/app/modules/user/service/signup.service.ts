import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUserUrl } from 'environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SignupService {

  constructor(private http: HttpClient) { }

  addTask(formData: any): Observable<any> {
    return this.http.post(baseUserUrl + 'signup', formData)
  }

  checkEmail(email: string): Observable<any> {
    const params = new HttpParams().set('email', email)
    return this.http.get(baseUserUrl + 'email/check', { params })
  }

}
