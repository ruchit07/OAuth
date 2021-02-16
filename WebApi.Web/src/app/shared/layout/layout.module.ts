import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
    imports: [
        RouterModule, CommonModule, FormsModule, MatToolbarModule, MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatInputModule,
        MatMenuModule,
        MatListModule
    ],
    declarations: [HeaderComponent, SidebarComponent, DashboardLayoutComponent],
    exports: [HeaderComponent, SidebarComponent],
    providers: []
})
export class LayoutModule { }
