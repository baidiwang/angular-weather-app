import {Component, Input, SimpleChanges} from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {
  @Input() query = "New York";
  data: any = null;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.getForeCast();
  }

  getForeCast() {
    this.weatherService.getForecastWeather(this.query).subscribe(res => {
      this.data = res;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
   if (changes['query'].previousValue !== changes['query'].currentValue) {
     this.getForeCast();
   }
  }
}
