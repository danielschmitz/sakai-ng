import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Category, CategoryService } from './category.service';
import { Column } from '../../shared/model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { concatMap, finalize, from } from 'rxjs';
import { SharedModule } from '@shared/shared.module';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    imports: [SharedModule]
})
export class CategoriesComponent implements OnInit {
    service = inject(CategoryService);
    message = inject(MessageService);
    confirmationService = inject(ConfirmationService);
    router = inject(Router);
    categories = signal<Category[]>([]);
    selectedCategories: Category[] = [];
    loading: boolean = false;
    cols: Column[] = [
        { field: 'id', header: 'Id', customExportHeader: 'id' },
        { field: 'name', header: 'name' }
    ];

    ngOnInit(): void {
        this.fetchCategories();
    }

    private fetchCategories() {
        this.loading = true;
        this.service.getAll().subscribe({
            next: (categories) => {
                this.loading = false;
                this.categories.set(categories);
            },
            error: (error) => {
                this.message.add({ severity: 'error', summary: 'Error', detail: error.error.message });
                this.loading = false;
            }
        });
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    newCategory() {
        this.router.navigate(['/categories/create']);
    }

    deleteCategory(item: Category) {
        throw new Error('Method not implemented.');
    }

    editCategory(item: Category) {
        this.router.navigate(['/categories/edit', item.id]);
    }

    deleteSelectedCategories() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected categories?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.loading = true;
                from(this.selectedCategories)
                    .pipe(
                        concatMap((c) => this.service.delete(c.id!)),
                        finalize(() => {
                            this.fetchCategories();
                            this.selectedCategories = [];
                            this.loading = false;
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
