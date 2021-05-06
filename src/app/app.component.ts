import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  paymentDate: Date;
  paymentAmount: number;
  height: number;

  onNameChange(name: string) {
    this.name = name;
  }

  onDateChange(date: Date) {
    this.paymentDate = date;
  }

  onPaymentChange(amount: string) {
    this.paymentAmount = parseFloat(amount);
  }

  onHeightChange(height: string) {
    this.height = parseFloat(height);
  }
}
