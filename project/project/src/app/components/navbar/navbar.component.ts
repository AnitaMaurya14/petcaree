import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <div class="logo">
          <span class="logo-text">🐾 PetCare</span>
        </div>
        <ul class="nav-links">
          <li>
            <a routerLink="/dashboard" routerLinkActive="active">Home</a>
          </li>
          <li>
            <a routerLink="/shop" routerLinkActive="active">Shop</a>
          </li>
          <li>
            <a routerLink="/vaccines" routerLinkActive="active">Vaccines</a>
          </li>
          <li>
            <a routerLink="/vets" routerLinkActive="active">Vets</a>
          </li>
          <li>
            <a routerLink="/profile" routerLinkActive="active">Profile</a>
          </li>
          <li>
            <a class="logout-btn" (click)="logout()">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color: #3E2723;
      padding: 1rem 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .navbar-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-text {
      font-size: 1.8rem;
      font-weight: 700;
      color: #F5F5DC;
      font-family: 'Georgia', serif;
      letter-spacing: 1px;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2.5rem;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      color: #F5F5DC;
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 500;
      transition: all 0.3s ease;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      position: relative;
    }

    .nav-links a:hover {
      color: #FFD700;
      background-color: rgba(245, 245, 220, 0.1);
    }

    .nav-links a.active {
      color: #FFD700;
      background-color: rgba(245, 245, 220, 0.15);
    }

    .logout-btn {
      cursor: pointer;
      background: #F5F5DC;
      color: #3E2723;
      font-weight: 600;
      padding: 0.5rem 1.2rem !important;
    }

    .logout-btn:hover {
      background: #FFD700 !important;
      color: #3E2723 !important;
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      .navbar-container {
        flex-direction: column;
        gap: 1rem;
      }

      .nav-links {
        gap: 1.5rem;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  `]
})
export class NavbarComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/auth']);
  }
}
