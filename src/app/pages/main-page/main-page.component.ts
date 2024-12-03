import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ApiServiceService } from '../../services/api-service.service';
import 'animate.css';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  cities = [
    {
      name: 'Madrid',
      image: 'https://images.pexels.com/photos/22922098/pexels-photo-22922098/free-photo-of-buildings-around-illuminated-street-in-madrid-at-night.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Barcelona',
      image: 'https://images.pexels.com/photos/1874675/pexels-photo-1874675.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Valencia',
      image: 'https://images.pexels.com/photos/19673917/pexels-photo-19673917/free-photo-of-modern-theatre-in-valence-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'New York',
      image: 'https://images.pexels.com/photos/1054417/pexels-photo-1054417.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Los Angeles',
      image: 'https://images.pexels.com/photos/2181230/pexels-photo-2181230.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Las Vegas',
      image: 'https://images.pexels.com/photos/23869105/pexels-photo-23869105/free-photo-of-illuminated-funfair-in-las-vegas-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Tokyo',
      image: 'https://images.pexels.com/photos/6635795/pexels-photo-6635795.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'San Francisco',
      image: 'https://images.pexels.com/photos/6600905/pexels-photo-6600905.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Alicante',
      image: 'https://images.pexels.com/photos/7887456/pexels-photo-7887456.jpeg?auto=compress&cs=tinysrgb&w=600',
    }
  ];

  weatherData: { [city: string]: { temp: number; description: string; humidity: number } } = {};

  constructor(private weatherService: ApiServiceService) {}

  ngOnInit() {
    this.cities.forEach((city) => {
      this.weatherService.getWeatherByCity(city.name).subscribe(
        (data) => {
          this.weatherData[city.name] = {
            temp: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
          };
        },
        (error) => {
          console.error(`Error al obtener el clima para ${city.name}:`, error);
          this.weatherData[city.name] = {
            temp: NaN,
            description: 'No disponible',
            humidity: NaN,
          };
        }
      );
    });
  }

  // Añadir el método toggleAnimation
  toggleAnimation(event: MouseEvent, isHovering: boolean): void {
    const cardElement = (event.currentTarget as HTMLElement);
    if (isHovering) {
      cardElement.classList.add('animate__animated', 'animate__bounce');
    } else {
      cardElement.classList.remove('animate__animated', 'animate__bounce');
    }
  }
}