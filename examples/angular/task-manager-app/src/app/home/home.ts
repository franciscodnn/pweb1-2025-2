import { Component, signal, inject } from '@angular/core';

import { DataApi, Task } from '../core/services/data-api';

import { TaskCard } from '../task-card/task-card';

import { FormModal } from '../form-modal/form-modal';

import { UpperCasePipe } from '@angular/common';

import { LevelMaskPipe } from '../core/pipes/levelMask/level-mask-pipe';

import { ApiRestSupabase } from '../core/services/api-rest-supabase/api-rest-supabase';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'home',
  imports: [TaskCard, FormModal, UpperCasePipe, LevelMaskPipe],
  templateUrl: './home.html',  
})
export class HomeApp {
  protected readonly tasks = inject(DataApi).seed;
  modal = signal(false);

  arrayValues = signal(['Valor1', 'valor2', 'valor3']);

  constructor(
    private apiRestSupabase: ApiRestSupabase,
    private router: Router,
    private route: ActivatedRoute) {
    
      this.route.params.subscribe(
        params => {
          console.log(`ID: ${params['id']}`);
        }
      );
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
    // this.modal.set(true);
    // this.router.navigate(['/tasks/new?showmodal=true']);

    this.router.navigate(['/tasks/new'], 
      { 
        queryParams : { showmodal : 'true'}
      });
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
