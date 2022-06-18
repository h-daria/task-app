import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    AppMainPageComponent,
    RegistrationFormComponent,
    TasksPageComponent,
    TasksListComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
