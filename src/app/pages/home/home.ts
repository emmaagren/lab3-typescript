import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfoCard } from '../../components/info-card/info-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, InfoCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
