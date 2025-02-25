import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";  // Importer RouterModule pour les routes

@Component({
  selector: 'app-root',
  standalone: true,  // Déclarer que ce composant est autonome
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, FooterComponent, NavbarComponent] // Si ce composant utilise des routes, inclure RouterModule
 // Si ce composant utilise des routes, inclure RouterModule
  // Si ce composant utilise des routes, inclure RouterModule
})
export class AppComponent {
  title = 'Mon Application';

  constructor(private router: Router){
    
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }
}
