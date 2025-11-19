import { Routes } from '@angular/router';
import { App } from './app';
import { Erro } from './erro/erro';
import { HomeApp } from './home/home';
import { FormModal } from './form-modal/form-modal';

export const routes: Routes = [
    { path: 'tasks', component: HomeApp, title: 'Gerenciador de tarefas' },
    { path: 'task/:id', component: HomeApp, title: 'Listar task' },
    { path: 'tasks/new', component: HomeApp, title: 'Nova tarefa' },
    { path: '**', component: Erro, title: 'URL inválida' }
];
