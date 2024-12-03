import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiKey= '6ef2ad5da1c5fff324720704f4868372';
  private apiUrl= 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  // Método para obtener el clima por ciudad
  getWeatherByCity(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&lang=es&units=metric`;
    return this.http.get(url);
  }
  
}
