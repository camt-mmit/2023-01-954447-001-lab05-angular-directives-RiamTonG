import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss'],
})
export class DynamicInputComponent {
  items = [{ value: 0 }, { value: 0 }];

  onChange(index: number, value: number): void {
    this.items[index].value = value;
    // this.items = [...this.items];
    console.debug(this.items);
  }

  add(): void {
    this.items.push({ value: 0 });
  }

  delete(index: number): void {
    this.items.splice(index, 1);
  }

  getResult(): number {
    this.items.map((item) => item.value).join(',');

    return this.items.reduce(
      (carry, currentValue) => carry + currentValue.value,
      0,
    );
  }
}
