import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Task } from '../data-api';

@Injectable({
  providedIn: 'root',
})
export class ApiRest {
  private _baseUrl = 'http://localhost:8080';

  private apiClient = inject(HttpClient);

  get endpoint() { return `${this._baseUrl}/api/taskmanager` };

  private headers() {
    return {
      'Content-type': 'application/json'
    }
  }

  public getAllTasks() {
    return this.apiClient.get<Task[]>(this.endpoint + "/all", {
      headers: this.headers()
    });
  }

  public createTask(task: Task) {
    return this.apiClient.post(
    this.endpoint, 
    task, 
    { headers: this.headers() });
  }


}
