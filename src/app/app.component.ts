import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick()">
        Change name
      </button>
      <input 
        type="text" 
        [ngModel]="name"
        (ngModelChange)="handleChange($event)">
      <input 
        type="text" 
        [(ngModel)]="name">
      <div>{{ name }}</div>
    </div>
  `
})

export class AppComponent {
  name: string = 'Kenny';
  handleClick() {
    this.name = 'Meow';
  }
  handleChange(value: string) {
    this.name = value;
  }
}