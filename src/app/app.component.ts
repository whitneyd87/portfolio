import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    
    <app-header></app-header>
    <app-main></app-main>
      
    <router-outlet></router-outlet>

  `,
  styles: []
})
export class AppComponent {
  title = 'WD design & development';
}
