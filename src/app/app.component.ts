import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  paymentDate: Date;

  onNameChange(name: string) {
    this.name = name;
  }

  onDateChange(date: Date) {
    this.paymentDate = date;
  }
}
