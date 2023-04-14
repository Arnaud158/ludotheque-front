import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
      <header>
        <strong>404</strong>
      </header>
  `,
  styles: [`
    header{
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-size: cover;
      font-size: 30rem; }

  `]
})
export class PageNotFoundComponent {

}
