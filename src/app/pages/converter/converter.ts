import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-converter',
  imports: [FormsModule, DecimalPipe],
  templateUrl: './converter.html',
  styleUrl: './converter.css'
})

export class Converter {
  meters: number = 0;
  celsius: number = 0;
  feet: number = 0;
  fahrenheit: number = 0;
}
