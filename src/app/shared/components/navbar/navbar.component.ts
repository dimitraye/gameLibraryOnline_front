import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

   isLoginOrRegisterPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const loginRegisterPages = ['/login', '/register', '/'];
      this.isLoginOrRegisterPage = loginRegisterPages.includes(this.router.url);
    });
  }
  navigateToHomeApp(): void {
    this.router.navigate(['/']);
  }
  navigateToHome(): void {
    this.router.navigate(['/user-home']);
  }

  navigateToProfile(): void {
    this.router.navigate(['/user-profile']);
  }
  navigateToUserStats(): void {
    this.router.navigate(['/user-stats']);
  }
  navigateToMyGames(): void {
    this.router.navigate(['/my-games']);
  }
  navigateToAddGames(): void {
    this.router.navigate(['/add-games-form']);
  }
  navigateToDiscover(): void {
    this.router.navigate(['/discover-games']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

}
