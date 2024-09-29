import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <div class="footer-data">
    &#64;copyright rakesh&#64;gmail.com 2024 All rights reserved!
    </div>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
