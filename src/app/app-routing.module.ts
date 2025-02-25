import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/auth/login/login.component';
import { RegisterComponent } from './shared/components/auth/register/register.component';
import { UserHomeComponent } from './features/home/user-home/user-home.component';
import { UserStatsComponent } from './features/home/user-stats/user-stats.component';
import { UserProfileComponent } from './features/profile/user-profile/user-profile.component';
import { UserGamesComponent } from './features/my-games/user-games/user-games.component';
import { AddGamesFormComponent } from './features/add-game/add-games-form/add-games-form.component';
import { DiscoverGamesComponent } from './features/discover/discover-games/discover-games.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'user-stats', component: UserStatsComponent },
  { path: 'my-games', component: UserGamesComponent },
  { path: 'add-games-form', component: AddGamesFormComponent },
  { path: 'discover-games', component: DiscoverGamesComponent },
  { path: 'user-home', component: UserHomeComponent }, // ✅ Route vers UserHomeComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
