// src/app/component/auth/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Pour pouvoir naviguer entre les pages

@Component({
  selector: 'app-login',
  standalone: true,             // Déclare le component comme standalone
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, RouterModule] // Importe CommonModule et RouterModule
})
export class LoginComponent {}
