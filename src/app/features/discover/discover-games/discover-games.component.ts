import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-discover-games',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './discover-games.component.html',
  styleUrl: './discover-games.component.scss'
})
export class DiscoverGamesComponent {

}
