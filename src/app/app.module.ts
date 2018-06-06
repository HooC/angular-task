import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component';
import { routes } from './routes';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CreateNewTaskComponent } from './components/create-new-task/create-new-task.component';
import { TasksService } from './services/tasks.service';
import { AuthComponent } from './components/auth/auth.component';
import { UsersService } from './services/users.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    CardDashboardComponent,
    CardDetailsComponent,
    CreateNewTaskComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    TasksService,
    UsersService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
