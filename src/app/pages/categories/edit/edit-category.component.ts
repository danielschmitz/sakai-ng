import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { SharedModule } from '@shared/shared.module';

@Component({
    selector: 'app-edit-category',
    template: `
        <div class="card">
            <div class="mb-4">
                <p-button icon="pi pi-arrow-left" label="Back to Categories" (click)="navigateToCategories()" outlined></p-button>
            </div>
            <app-category-form [categoryId]="categoryId" (onSave)="handleSave()" (onCancel)="navigateToCategories()"></app-category-form>
        </div>
    `,
    imports: [SharedModule, CategoryFormComponent],
    standalone: true
})
export class EditCategoryComponent implements OnInit {
    route = inject(ActivatedRoute);
    router = inject(Router);
    
    categoryId: string | null = null;

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.categoryId = params.get('id');
        });
    }

    navigateToCategories() {
        this.router.navigate(['/categories']);
    }

    handleSave() {
        this.navigateToCategories();
    }
}
