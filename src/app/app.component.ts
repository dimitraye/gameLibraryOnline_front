import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importer RouterModule pour les routes

@Component({
  selector: 'app-root',
  standalone: true,  // Déclarer que ce composant est autonome
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule]  // Si ce composant utilise des routes, inclure RouterModule
})
export class AppComponent {
  title = 'Mon Application';
}
