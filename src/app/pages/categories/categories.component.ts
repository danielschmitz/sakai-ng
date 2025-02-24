import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectModule } from 'primeng/select';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { Category, CategoryService } from './category.service';
import { Column } from '../../shared/model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-categories',
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    ConfirmDialogModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
  providers: [MessageService]
})
export class CategoriesComponent implements OnInit {
  service = inject(CategoryService);
  message = inject(MessageService);
  categories = signal<Category[]>([]);
  selectedCategories: Category[] = [];
  category: Category = {
    name: ''
  };
  categoryDialog: boolean = false;
  submitted: boolean = false;
  cols: Column[] = [
    { field: 'id', header: 'Id', customExportHeader: 'id' },
    { field: 'name', header: 'name' }
  ];


  ngOnInit(): void {
    this.fetchCategories();
  }

  private fetchCategories() {
    this.service.getAll().subscribe((categories) => {
      this.categories.set(categories);
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  newCategory() {
    this.category = { name: '' };
    this.submitted = false;
    this.categoryDialog = true;
  }

  saveCategory() {
    this.submitted = true;
    if (this.category.name.trim()) {
      if (this.category.id) {
        this.service.update(this.category.id, this.category)
          .subscribe({
            next: () => {
              this.categoryDialog = false;
              this.submitted = false;
              this.fetchCategories();
            },
            error: (err) => {
              console.error('Error updating category:', err);
            },
            complete: () => {
              console.log('Category update completed');
            }
          });
      } else {
        this.service.create(this.category)
          .subscribe({
            next: () => {
              this.categoryDialog = false;
              this.submitted = false;
              this.category = { name: '' };
              this.fetchCategories();
            },
            error: (error) => {
              this.message.add({ severity: 'error', summary: 'Error', detail: error.error.message });
            },
            complete: () => {
              console.log('Category creation completed');
            }
          });
      }

    }
  }

  deleteCategory(item: Category) {
    throw new Error('Method not implemented.');
  }

  editCategory(item: Category) {
    this.category = { id: item.id, name: item.name };
    this.submitted = false;
    this.categoryDialog = true;
  }

  closeDialog() {
    this.categoryDialog = false;
    this.submitted = false;
  }

}
