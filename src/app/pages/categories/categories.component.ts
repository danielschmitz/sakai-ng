import { Component, inject, OnInit, signal } from '@angular/core';
import { Table } from 'primeng/table';
import { Category, CategoryService } from './category.service';
import { Column } from '../../shared/model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { concatMap, finalize, from } from 'rxjs';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  imports: [
    SharedModule,  
  ],
})
export class CategoriesComponent implements OnInit {
  service = inject(CategoryService);
  message = inject(MessageService);
  confirmationService = inject(ConfirmationService);
  categories = signal<Category[]>([]);
  selectedCategories: Category[] = [];
  category: Category = {
    name: ''
  };
  categoryDialog: boolean = false;
  submitted: boolean = false;
  formLoading: boolean = false;
  tableLoading: boolean = false;
  cols: Column[] = [
    { field: 'id', header: 'Id', customExportHeader: 'id' },
    { field: 'name', header: 'name' }
  ];

  ngOnInit(): void {
    this.fetchCategories();
  }

  private fetchCategories() {
    this.tableLoading = true;
    this.service.getAll().subscribe({
      next: (categories) => {
        this.tableLoading = false;
        this.categories.set(categories);
      },
      error: (error) => {
        this.message.add({ severity: 'error', summary: 'Error', detail: error.error.message });
        this.tableLoading = false;
      }
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
      this.formLoading = true;
      if (this.category.id) {
        this.service.update(this.category.id, this.category)
          .subscribe({
            next: () => {
              this.categoryDialog = false;
              this.submitted = false;
              this.formLoading = false;
              this.fetchCategories();
            },
            error: (error) => {
              this.message.add({ severity: 'error', summary: 'Error', detail: error.error.message });
              this.formLoading = false;
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
              this.formLoading = false;
              this.fetchCategories();
            },
            error: (error) => {
              this.message.add({ severity: 'error', summary: 'Error', detail: error.error.message });
              this.formLoading = false;
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

  deleteSelectedCategories() {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected categories?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.tableLoading = true;
          from(this.selectedCategories)
          .pipe(
            concatMap((c) => this.service.delete(c.id!)),
            finalize(() => {
              this.fetchCategories();
              this.selectedCategories = [];
              this.tableLoading = false;
              this.message.add({ severity: 'success', summary: 'Success', detail: 'Categories deleted successfully' });
            })
          )
          .subscribe({
            error: (error) => {
              this.message.add({ severity: 'error', summary: 'Error', detail: error.error.message });
            }
          });
        }
    });
}

}
