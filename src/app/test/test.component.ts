import { Component } from '@angular/core';
import {personData} from './data';


@Component({
  selector: 'test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  persons = personData;
  frameworks = [
    'Angular',
    'React',
    'Vue',
    'Ember',
    'Backbone',
    'Express',
    'Django',
    'Rails',
    'Laravel',
    'Spring',
  ];

  cars = [
    {
      mark: 'Opel',
      model: 'Corsa',
    },
    {
      mark: 'Nissan',
      model: 'Juke',
    },
    {
      mark: 'Fiat',
      model: 'Tipo',
    },
    {
      mark: 'Skoda',
      model: 'Oktavia',
    },
  ];

  carsObj = {
    Opel: 'Corsa',
    Nissan: 'Juke',
    Fiat: 'Tipo',
    Skoda: 'Oktavia',
  };

}
