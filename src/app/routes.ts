import { CardDetailsComponent } from './components/card-details/card-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNewTaskComponent } from './components/create-new-task/create-new-task.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthGuard } from './auth.guard';

export const routes = [
    {
        path: '',
        component: AuthComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard/task/:id',
        component: CardDetailsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard/create-new',
        component: CreateNewTaskComponent,
        canActivate: [AuthGuard]
    }
];
