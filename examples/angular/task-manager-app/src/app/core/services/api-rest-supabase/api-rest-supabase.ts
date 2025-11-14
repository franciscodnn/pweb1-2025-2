import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Task } from '../data-api';

@Injectable({
  providedIn: 'root',
})
export class ApiRestSupabase {
  private _baseUrl = 'https://twzzctfrpfgaeekyzimk.supabase.co';
  private _apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3enpjdGZycGZnYWVla3l6aW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNzQwNzYsImV4cCI6MjA3ODY1MDA3Nn0.CQvEjwaqDLGJFq1Jrng3Lfr2nLPAdQtq8YeorRszyfQ';

  private apiClient = inject(HttpClient);

  get endpoint() { return `${this._baseUrl}/rest/v1/tasks` };

  private headers() {
    return {
      apikey: this._apiKey,
      Authorization: `Bearer ${this._apiKey }`,
      'Content-type': 'application/json'
    }
  }

  public getAllTasks() {
    return this.apiClient.get<Task[]>(this.endpoint, {
      headers: this.headers()
    });
  }

  public createTask(task: Task) {
    return this.apiClient.post(this.endpoint, task, { headers: this.headers() });
  }


}
