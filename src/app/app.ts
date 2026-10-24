import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Hero } from './home/hero/hero';
import { Features } from './home/features/features';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Hero, Features],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
