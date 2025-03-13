import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    ConfirmDialogModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    DragDropModule,
    FloatLabelModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputNumberModule,
    InputTextModule,
    PanelModule,
    RadioButtonModule,
    RatingModule,
    RippleModule,
    SelectModule,
    TableModule,
    TagModule,
    TextareaModule,
    ToastModule,
    ToolbarModule
  ],
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    ConfirmDialogModule,
    DialogModule,
    DividerModule,
    DropdownModule,
    DragDropModule,
    FloatLabelModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputNumberModule,
    InputTextModule,
    PanelModule,
    RadioButtonModule,
    RatingModule,
    RippleModule,
    SelectModule,
    TableModule,
    TagModule,
    TextareaModule,
    ToastModule,
    ToolbarModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class SharedModule { }
