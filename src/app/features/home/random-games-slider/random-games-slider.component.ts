import { Component } from '@angular/core';
import { GameCardComponent } from "../../../shared/components/game-card/game-card.component";

@Component({
  selector: 'app-random-games-slider',
  standalone: true,
  imports: [GameCardComponent],
  templateUrl: './random-games-slider.component.html',
  styleUrl: './random-games-slider.component.scss'
})
export class RandomGamesSliderComponent {

}
