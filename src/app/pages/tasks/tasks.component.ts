import { Component, inject, signal } from '@angular/core';
import { Task, TasksService } from './tasks.service';
import { SharedModule } from '@shared/shared.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Column } from '../../shared/model';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskKanbanComponent } from './task-kanban/task-kanban.component';
import { concatMap, finalize, from } from 'rxjs';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [SharedModule, TaskFormComponent, TaskKanbanComponent],
  templateUrl: './tasks.component.html'
})
export class TasksComponent {
  service = inject(TasksService);
  message = inject(MessageService);
  confirmationService = inject(ConfirmationService);

  tasks = signal<Task[]>([]);
  selectedTasks: Task[] = [];
  task: Task = {
    name: '',
    description: '',
    done: 0,
    categoryId: 0
  };

  taskDialog: boolean = false;
  kanbanDialog: boolean = false;
  submitted: boolean = false;
  formLoading: boolean = false;
  tableLoading: boolean = false;

  cols: Column[] = [
    { field: 'name', header: 'Name' },
    { field: 'description', header: 'Description' },
    { field: 'done', header: 'Done' },
    { field: 'category', header: 'Category' }
  ];

  ngOnInit(): void {
    this.fetchTasks();
  }

  private fetchTasks() {
    this.tableLoading = true;
    this.service.getAllTasks().subscribe({
      next: (tasks) => {
        this.tableLoading = false;
        this.tasks.set(tasks);
      },
      error: (error) => {
        this.message.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        this.tableLoading = false;
      }
    });
  }

  getDoneEmoji(done: number): string {
    return done ? '✅' : '❌';
  }

  newTask() {
    this.task = {
      name: '',
      description: '',
      done: 0,
      categoryId: 0
    };
    this.submitted = false;
    this.taskDialog = true;
  }

  showKanban() {
    this.kanbanDialog = true;
  }

  onTaskUpdated(task: Task) {
    this.service.update(task.id!, task).subscribe({
      next: () => {
        this.fetchTasks();
        this.message.add({ severity: 'success', summary: 'Successful', detail: 'Task Updated', life: 3000 });
      },
      error: (error) => {
        this.message.add({ severity: 'error', summary: 'Error', detail: error.error.message });
      }
    });
  }

  deleteSelectedTasks() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected tasks?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        from(this.selectedTasks).pipe(
          concatMap((task) => this.service.delete(task.id!)),
          finalize(() => {
            this.selectedTasks = [];
            this.fetchTasks();
            this.message.add({ severity: 'success', summary: 'Successful', detail: 'Tasks Deleted', life: 3000 });
          })
        ).subscribe();
      }
    });
  }

  editTask(task: Task) {
    this.task = { ...task };
    this.taskDialog = true;
  }

  deleteTask(task: Task) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + task.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.service.delete(task.id!).subscribe({
          next: () => {
            this.fetchTasks();
            this.message.add({ severity: 'success', summary: 'Successful', detail: 'Task Deleted', life: 3000 });
          }
        });
      }
    });
  }

  hideDialog() {
    this.taskDialog = false;
    this.submitted = false;
  }

  saveTask(task: Task) {
    this.submitted = true;
    this.formLoading = true;

    if (task.name?.trim() && task.description?.trim() && task.categoryId) {
      if (task.id) {
        this.service.update(task.id, task).subscribe({
          next: () => {
            this.fetchTasks();
            this.message.add({ severity: 'success', summary: 'Successful', detail: 'Task Updated', life: 3000 });
            this.taskDialog = false;
            this.task = {
              name: '',
              description: '',
              done: 0,
              categoryId: 0
            };
          },
          error: (error) => {
            this.message.add({ severity: 'error', summary: 'Error', detail: error.error.message });
          },
          complete: () => {
            this.formLoading = false;
          }
        });
      } else {
        this.service.create(task).subscribe({
          next: () => {
            this.fetchTasks();
            this.message.add({ severity: 'success', summary: 'Successful', detail: 'Task Created', life: 3000 });
            this.taskDialog = false;
            this.task = {
              name: '',
              description: '',
              done: 0,
              categoryId: 0
            };
          },
          error: (error) => {
            this.message.add({ severity: 'error', summary: 'Error', detail: error.error.message });
          },
          complete: () => {
            this.formLoading = false;
          }
        });
      }
    }
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
