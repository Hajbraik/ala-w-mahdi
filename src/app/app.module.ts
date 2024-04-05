// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component'; // Import MenuComponent here
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppOffreComponent } from './app-offre/app-offre.component'; // Import LoginComponent here

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent, // Declare MenuComponent here
    LoginComponent, RegisterComponent, AppOffreComponent, // Declare LoginComponent here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
