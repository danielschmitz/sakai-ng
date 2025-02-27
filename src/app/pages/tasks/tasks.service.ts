import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Category } from '../categories/category.service';
import { Observable } from 'rxjs';

export interface Task {
  id?: string;
  name: string;
  description: string;
  done: number;
  category?: string;
  categoryId: number;
}

@Injectable({
  providedIn: 'root',
})
export class TasksService extends ApiService<Task> {
  constructor() {
    super('tasks'); 
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiBaseUrl}/all`);
  }
}
