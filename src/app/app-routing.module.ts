import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path: '', component: AppMainPageComponent },
  {path: 'sign-up', component: RegistrationFormComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'users-tasks-page', component: TasksPageComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
