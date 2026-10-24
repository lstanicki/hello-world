import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly clicks = signal(0);

  protected increment(): void {
    this.clicks.update((n) => n + 1);
  }

  protected reset(): void {
    this.clicks.set(0);
  }
}
