import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ErrorMessage } from 'src/app/shared/service/error-message.service';
import { DashboardComponent } from './dashboard.component';
import { QuillEditorModule } from 'src/app/shared/component/quill-editor/quill-editor.module';

export const ROUTES: Routes = [
    { path: '', component: DashboardComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule, RouterModule, FormsModule, HttpClientModule, QuillEditorModule
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [
        ErrorMessage
    ],
})
export class DashboardModule { }
