// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppOffreComponent } from './app-offre/app-offre.component';
const routes: Routes = [
  { path: '', component:MenuComponent, children :[
    { path: 'login', component:LoginComponent},
    { path: 'register', component:RegisterComponent},
    { path: 'app-offre', component:AppOffreComponent}
  ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
