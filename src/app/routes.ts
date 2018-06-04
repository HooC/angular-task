import { CardDetailsComponent } from './components/card-details/card-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateNewTaskComponent } from './components/create-new-task/create-new-task.component';

export const routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'task/:id',
        component: CardDetailsComponent
    },
    {
        path: 'create-new',
        component: CreateNewTaskComponent
    }
];
