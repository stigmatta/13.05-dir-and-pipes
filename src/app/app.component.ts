import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'directive';
  selectedButton: number = 1;
  texts: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.addProduct("Самым большим автомобилем по размеру, который существует в мире, является самосвал BelAZ 75710. BelAZ 75710 производится белорусским заводом BelAZ и используется в горнодобывающей промышленности для перевозки огромных грузов на дальние расстояния.");
    this.addProduct("На сегодняшний день самым большим пассажирским самолетом в мире является Airbus A380. Этот двухпалубный широкофюзеляжный самолет может перевозить до 853 пассажиров в одноклассной конфигурации. Он имеет максимальную взлетную массу около 575 тонн и может преодолевать расстояния до 15 700 километров. A380 изначально разрабатывался как ответ на растущий спрос на воздушные перевозки в мегаполисах мира и обеспечивает высокий уровень комфорта для пассажиров благодаря своим просторным кабинам и улучшенным условиям полета.");
    this.addProduct("Самым большим кораблем в мире является контейнеровоз HMM Algeciras. Его длина составляет 400 метров, ширина - 61 метр, а грузоподъемность - около 24000 TEU.")
  }

  addProduct(text: string): void {
    this.texts.push(text);
  }
}
  


