import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { map, filter } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class TasksService {
  private url = 'http://localhost:2403/tasks';

  constructor(private http: HttpClient) { }

  public getAllTasks() {
    return this.http.get(this.url);
  }

  public getElement(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  public createNewTask(data) {
    return this.http.post(this.url, data);
  }

  public deleteTask(id: string) {
    const urlParams = new HttpParams().set('id', id.toString());
    return this.http.delete(this.url, { params: urlParams});
  }

  public updateTask (id, data) {
    return this.http.put(this.url + '/' + id, data);
  }
}
