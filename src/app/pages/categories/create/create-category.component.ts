import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryFormComponent } from '../category-form/category-form.component';
import { SharedModule } from '@shared/shared.module';

@Component({
    selector: 'app-create-category',
    template: `
        <div class="card">
            <div class="mb-4">
                <p-button icon="pi pi-arrow-left" label="Back to Categories" (click)="navigateToCategories()" outlined></p-button>
            </div>
            <app-category-form (onSave)="handleSave()" (onCancel)="navigateToCategories()"></app-category-form>
        </div>
    `,
    imports: [CategoryFormComponent, SharedModule],
    standalone: true
})
export class CreateCategoryComponent {
    constructor(private router: Router) {}

    navigateToCategories() {
        this.router.navigate(['/categories']);
    }

    handleSave() {
        this.navigateToCategories();
    }
}
