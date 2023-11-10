import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'country-api';

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
