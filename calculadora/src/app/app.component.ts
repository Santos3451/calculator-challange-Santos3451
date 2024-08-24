import { Component } from '@angular/core';
import { CalculatorButtonsComponent } from './calculator-buttons/calculator-buttons.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CalculatorButtonsComponent, FormsModule]
})
export class AppComponent {
  title = 'calculadora';  // Añadir la propiedad title aquí

  value1: number = 0;
  value2: number = 0;
  result: number = 0;

  handleResult(result: number) {
    this.result = result;
  }
}
