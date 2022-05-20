import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { CheckLoginGuard } from './check-login.guard';
import { ComprasComponent } from './dashboard/compras/compras.component';
import { HomeComponent } from './dashboard/home/home.component';

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [CheckLoginGuard]},
  {path: 'compras', component: ComprasComponent, canActivate: [CheckLoginGuard]},
  {path: 'logout', component: LogoutComponent, canActivate: [CheckLoginGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
