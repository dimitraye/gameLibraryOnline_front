import { Component } from '@angular/core';
import { RandomGamesSliderComponent } from "../random-games-slider/random-games-slider.component";
import { UserGamesSliderComponent } from "../user-games-slider/user-games-slider.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { RecentSuccessesComponent } from "../recent-successes/recent-successes.component";
import { UserStatsComponent } from "../user-stats/user-stats.component";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
  standalone : true,
  imports: [RandomGamesSliderComponent, UserGamesSliderComponent, NavbarComponent, RecentSuccessesComponent, UserStatsComponent]
})
export class UserHomeComponent { }
