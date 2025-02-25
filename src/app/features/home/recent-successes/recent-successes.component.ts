import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent-successes',
  standalone: true,
  imports: [],
  templateUrl: './recent-successes.component.html',
  styleUrl: './recent-successes.component.scss'
})
export class RecentSuccessesComponent {

  constructor(private router: Router) {}
  
  navigateToUserStats(): void {
    this.router.navigate(['/user-stats']);
  }

}
