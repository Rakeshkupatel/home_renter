import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RouterModule } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterModule, FooterComponent],
  template: `

     <main>
        <header class='brand-name'>
        <a [routerLink]="['']">
           <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </a>
        </header>
        <header class='brand-name-login'>
        <a [routerLink]="['login']">
           <img class="brand-logo-login" src="/assets/account.png"  alt="logo" aria-hidden="true">
        </a>
        </header>
    </main>
    
  <section class="content">
      <router-outlet></router-outlet>
  </section>
  <section class="footer">
     <app-footer></app-footer>
  </section>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'home-renter';
}
