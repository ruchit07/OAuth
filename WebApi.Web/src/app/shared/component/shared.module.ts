import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseService } from '../service/base-service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, MatTableModule, MatDialogModule, MatButtonModule, MatPaginatorModule, MatSnackBarModule, MatSortModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatTooltipModule, MatTabsModule, MatMenuModule,
  ],
  declarations: [

  ],
  exports: [

  ],
  entryComponents: [

  ],
  providers: [BaseService]
})
export class SharedModule { }
