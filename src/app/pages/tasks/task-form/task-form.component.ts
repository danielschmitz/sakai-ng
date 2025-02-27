import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { Task } from '../tasks.service';
import { CategoryService } from '../../categories/category.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
  @Input() visible: boolean = false;
  @Input() task: Task = {
    name: '',
    description: '',
    done: 0,
    categoryId: 0
  };
  @Input() submitted: boolean = false;
  @Input() loading: boolean = false;

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<Task>();
  @Output() cancel = new EventEmitter<void>();

  categoryService = inject(CategoryService);
  categories = signal<any[]>([]);

  ngOnInit() {
    this.loadCategories();
  }

  private loadCategories() {
    this.categoryService.getAll().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      }
    });
  }

  onHide() {
    this.visibleChange.emit(false);
    this.cancel.emit();
  }

  onSave() {
    this.save.emit(this.task);
  }
}
