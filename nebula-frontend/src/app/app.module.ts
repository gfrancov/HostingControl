import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './includes/footer/footer.component';
import { NavComponent } from './includes/nav/nav.component';
import { AuthComponent } from './auth/auth.component';
import { IncludesComponent } from './includes/includes.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { ComprasComponent } from './dashboard/compras/compras.component';
import { LogoutComponent } from './auth/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    IncludesComponent,
    AuthComponent,
    FooterComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ComprasComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
