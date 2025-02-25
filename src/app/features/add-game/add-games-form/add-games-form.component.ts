import { Component } from '@angular/core';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-add-games-form',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './add-games-form.component.html',
  styleUrl: './add-games-form.component.scss'
})
export class AddGamesFormComponent {

}
