import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
      <header>
        <strong>404</strong>
      </header>
  `,
  styles: [`
    header {text-align:center; font-size:30rem; height:100vh;}
    `]
})
export class PageNotFoundComponent {

}
