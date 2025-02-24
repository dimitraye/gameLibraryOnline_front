import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/auth/login/login.component';
import { RegisterComponent } from './shared/components/auth/register/register.component';
import { AppComponent } from './app.component';  // Assure-toi que AppComponent est importé

// Définir et exporter les routes
export const routes: Routes = [
  //{ path: '', component: AppComponent },  // Affiche le composant principal (AppComponent) au début
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Importer le module de routage
  exports: [RouterModule]  // Exporte le module pour l'utiliser dans d'autres parties de l'application
})
export class AppRoutingModule { }
