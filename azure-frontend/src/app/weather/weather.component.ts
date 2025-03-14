import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherForecast, WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  forecasts: WeatherForecast[] = [];
  loading = false;
  error: string | null = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.loading = true;
    this.weatherService.getWeatherForecast().subscribe({
      next: (data) => {
        this.forecasts = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Something went wrong:', err);
        this.error = 'The weather data could not be loaded.';
        this.loading = false;
      },
    });
  }
}
