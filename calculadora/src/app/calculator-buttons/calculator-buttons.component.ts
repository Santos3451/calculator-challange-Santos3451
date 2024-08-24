import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-buttons',
  templateUrl: './calculator-buttons.component.html',
  styleUrls: ['./calculator-buttons.component.css'],
  standalone: true
})
export class CalculatorButtonsComponent {
  @Input() value1: number = 0;
  @Input() value2: number = 0;
  @Output() result = new EventEmitter<number>();

  performOperation(operation: string) {
    let result: number;
    switch (operation) {
      case 'add':
        result = this.value1 + this.value2;
        break;
      case 'subtract':
        result = this.value1 - this.value2;
        break;
      case 'multiply':
        result = this.value1 * this.value2;
        break;
      case 'divide':
        result = this.value1 / this.value2;
        break;
      case 'power':
        result = Math.pow(this.value1, this.value2);
        break;
      case 'sqrt':
        result = Math.sqrt(this.value1);
        break;
      default:
        result = 0;
    }
    this.result.emit(result);
  }
}
