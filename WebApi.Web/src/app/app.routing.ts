import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/service/auth-guard.service';
import { DashboardLayoutComponent } from './shared/layout/dashboard-layout/dashboard-layout.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    //No layout routes : start
    { path: 'login', loadChildren: () => import('src/app/page/login/login.module').then(m => m.LoginModule) },
    //No layout routes : End

    //Dashboard layout : Start
    {
        path: '',
        component: DashboardLayoutComponent,
        children: [
            {
                path: '',
                canActivate: [AuthGuard],
                loadChildren: () => import('src/app/page/dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            {
                path: 'dashboard',
                loadChildren: () => import('src/app/page/dashboard/dashboard.module').then(m => m.DashboardModule),
                canActivate: [AuthGuard],
                data: {}
            },
        ]
    },

    //Dashboard layout : End

    //Otherwise redirect to Login
    { path: '**', loadChildren: () => import('src/app/page/login/login.module').then(m => m.LoginModule) },
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: false });