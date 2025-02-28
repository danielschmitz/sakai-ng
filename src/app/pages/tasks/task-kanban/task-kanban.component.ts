import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Task } from '../tasks.service';

@Component({
  selector: 'app-task-kanban',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './task-kanban.component.html',
  styleUrls: ['./task-kanban.component.scss']
})
export class TaskKanbanComponent {
  @Input() set visible(value: boolean) {
    this._visible = value;
  }
  get visible(): boolean {
    return this._visible;
  }
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() set tasks(value: Task[]) {
    this._tasks = value;
    this.updateTaskLists();
  }
  @Output() taskUpdated = new EventEmitter<Task>();
  @Output() editTask = new EventEmitter<Task>();

  private _visible = false;
  private _tasks: Task[] = [];

  todoTasks = signal<Task[]>([]);
  doneTasks = signal<Task[]>([]);

  private updateTaskLists() {
    this.todoTasks.set(this._tasks.filter(task => !task.done));
    this.doneTasks.set(this._tasks.filter(task => task.done));
  }

  onHide() {
    this.visibleChange.emit(false);
  }

  onTaskDoubleClick(task: Task) {
    this.editTask.emit(task);
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      // Update the task's done status based on which list it was dropped into
      const task = event.container.data[event.currentIndex];
      const updatedTask: Task = {
        ...task,
        done: event.container.id === 'done-list' ? 1 : 0
      };
      this.taskUpdated.emit(updatedTask);
    }
  }
}
