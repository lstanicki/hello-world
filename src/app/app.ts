import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <h1>Hello, {{ name() }}!</h1>
      <button (click)="clicks.set(clicks() + 1)">Kliknięto {{ clicks() }} razy</button>
    </main>
  `,
  styles: `
    main { display: grid; place-items: center; gap: 1rem; min-height: 100vh; }
    h1 { font-size: 3rem; margin: 0; }
    button { font: inherit; padding: .5rem 1rem; cursor: pointer; }
  `,
})
export class App {
  protected readonly name = signal('World');
  protected readonly clicks = signal(0);
}
