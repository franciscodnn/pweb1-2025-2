import { Component, signal, inject } from '@angular/core';

import { DataApi, Task } from './core/services/data-api';

import { TaskCard } from './task-card/task-card';

import { FormModal } from './form-modal/form-modal';

import { UpperCasePipe } from '@angular/common';

import { LevelMaskPipe } from './core/pipes/levelMask/level-mask-pipe';

import { ApiRestSupabase } from './core/services/api-rest-supabase/api-rest-supabase';


@Component({
  selector: 'app-root',
  imports: [TaskCard, FormModal, UpperCasePipe, LevelMaskPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly tasks = inject(DataApi).seed;
  modal = signal(false);

  arrayValues = signal(['Valor1', 'valor2', 'valor3']);

  constructor(private apiRestSupabase: ApiRestSupabase) {
    
  }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.apiRestSupabase.getAllTasks().subscribe({
      next: tasks => {
        console.log(tasks);
        this.tasks.set(tasks);
      },
      error: error => console.log(error)
    });
  }

  openModal() {
    this.modal.set(true);
  }

  closeModal() {
    this.modal.set(false);
  }
  
  onCardClicked(message: string) {
    console.log('Card clicked with message: ' + message);
  }

  public reloadUsers() {
    console.log('relad users');
    
    this.loadUsers();
  }
}
