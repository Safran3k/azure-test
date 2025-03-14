import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Hello from Angular frontend!';

  constructor(private router: Router) {}

  navigateToWeather(): void {
    this.router.navigate(['/weather']);
  }
}
