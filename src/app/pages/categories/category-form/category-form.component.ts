import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Category, CategoryService } from '../category.service';
import { MessageService } from 'primeng/api';
import { SharedModule } from '@shared/shared.module';

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html',
    imports: [SharedModule],
    standalone: true
})
export class CategoryFormComponent implements OnInit {
    service = inject(CategoryService);
    message = inject(MessageService);
    
    @Input() categoryId: string | null = null;
    @Output() onSave = new EventEmitter<void>();
    @Output() onCancel = new EventEmitter<void>();
    
    category: Category = {
        name: ''
    };
    submitted: boolean = false;
    loading: boolean = false;

    ngOnInit(): void {
        if (this.categoryId) {
            this.loading = true;
            this.service.getById(this.categoryId).subscribe({
                next: (category) => {
                    this.category = category;
                    this.loading = false;
                },
                error: (error) => {
                    this.message.add({ severity: 'error', summary: 'Error', detail: error.error.message });
                    this.loading = false;
                }
            });
        }
    }

    saveCategory() {
        this.submitted = true;
        if (this.category.name.trim()) {
            this.loading = true;
            if (this.category.id) {
                this.service.update(this.category.id, this.category).subscribe({
                    next: () => {
                        this.message.add({ severity: 'success', summary: 'Success', detail: 'Category updated successfully' });
                        this.loading = false;
                        this.onSave.emit();
                    },
                    error: (error) => {
                        this.message.add({ severity: 'error', summary: 'Error', detail: error.error.message });
                        this.loading = false;
                    }
                });
            } else {
                this.service.create(this.category).subscribe({
                    next: () => {
                        this.message.add({ severity: 'success', summary: 'Success', detail: 'Category created successfully' });
                        this.loading = false;
                        this.onSave.emit();
                    },
                    error: (error) => {
                        this.message.add({ severity: 'error', summary: 'Error', detail: error.error.message });
                        this.loading = false;
                    }
                });
            }
        }
    }

    cancel() {
        this.onCancel.emit();
    }
}
