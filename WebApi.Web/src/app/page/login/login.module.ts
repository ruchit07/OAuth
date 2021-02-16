import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { ErrorMessage } from 'src/app/shared/service/error-message.service';
import { SharedModule } from 'src/app/shared/component/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule, RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule, SharedModule, MatTableModule, MatDialogModule, MatButtonModule, MatPaginatorModule, MatSnackBarModule, MatSortModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatTooltipModule, MatTabsModule, MatCardModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        LoginService, ErrorMessage
    ],
})
export class LoginModule { }
