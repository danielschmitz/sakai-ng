import { Component, Input } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
    selector: 'app-loading',
    imports: [ProgressSpinnerModule],
    template: `
    <div class="loading-container">
      <ng-content></ng-content>
      @if (loading) {
        <div class="loading-overlay">
            <p-progress-spinner ariaLabel="loading" />
        </div>
      }
    </div>
  `,
    styles: [
        `
      .loading-container {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      .loading-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        backdrop-filter: blur(1px);
      }
    `,
    ],
})
export class LoadingComponent {
    @Input() loading: boolean = false;
}