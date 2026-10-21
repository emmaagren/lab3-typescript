import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule],
  templateUrl: './converter.html',
  styleUrl: './converter.css'
})

export class Converter {
  meters: number = 0;
  celsius: number = 0;
  feet: number = 0;
  fahrenheit: number = 0;
}
