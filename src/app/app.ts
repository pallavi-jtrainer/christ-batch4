import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  name = "Pallavi";

  counter = 0;
  isAvailable = true;

  employeeName = "Prithvi";
  salary = 50000;
  doj = new Date("2020-01-15");

  calculateBonus() {
    this.salary = this.salary + (this.salary * 0.05);
  }

  incrementCounter() {
    this.counter = this.counter + 1;
    if (this.counter >= 5)
      this.isAvailable = !this.isAvailable;
  }
  handleButtonClick() {
    alert("Button Clicked")
  }
}
