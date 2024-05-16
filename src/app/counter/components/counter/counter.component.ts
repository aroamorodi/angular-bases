import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }} </p>
    <button type="button" (click)="increaseBy(1)">+1</button>
    <button type="button" (click)="reset()">Reset</button>
    <button type="button" (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  reset(): void {
    this.counter = 10;
  }
}
