import { Component, signal, inject } from '@angular/core';

import { DataApi, Task } from './core/services/data-api';

import { TaskCard } from './task-card/task-card';


@Component({
  selector: 'app-root',
  imports: [TaskCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly tasks = inject(DataApi).load();
  
  onCardClicked(message: string) {
    console.log('Card clicked with message: ' + message);
  }
}
