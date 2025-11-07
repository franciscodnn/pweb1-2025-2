import { Injectable, signal } from '@angular/core';

export interface Task {
  id: string;
  title: string;
  due: string;
  level: 'low' | 'medium' | 'high';
  desc: string;
  status: 'todo' | 'doing' | 'done';
}

@Injectable({
  providedIn: 'root'
})
export class DataApi {
  seed = signal<Task[] | undefined>(undefined);

  constructor() {
    this.seed.set(this.load());
  }

  load() {
    return this.seedTasks();
  }

  insert(title: string, due: string, level: string, desc: string) {
    const newTask: Task = {
      id: this.uid(),
      title: title,
      due: due,
      level: level as 'low' | 'medium' | 'high',
      desc: desc,
      status: 'todo'
    }

    this.seed()?.push(newTask);
    /*
    this.seed.update(
       currentValue => [...currentValue, newTask]
    )
    */
  }

  private seedTasks() {
    const tasks: Task[] = [
      { id: this.uid(), title: 'Ler capítulo 3 de Algoritmos', due: this.addDaysISO(2), level: 'high', desc: 'Priorizar exercícios 3.1-3.5', status: 'todo' },
      { id: this.uid(), title: 'Resolver lista de TS', due: this.addDaysISO(5), level: 'medium', desc: 'Atenção a generics', status: 'doing' },
      { id: this.uid(), title: 'Revisão rápida: HTML/CSS', due: this.addDaysISO(10), level: 'low', desc: '30 minutos', status: 'done' }
    ];
    
    return tasks;
  }

  private uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7) }

  private addDaysISO(n: number): string {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return d.toISOString().slice(0, 10);
  }

}
