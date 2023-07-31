import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicInputComponent } from '../dynamic-input/dynamic-input.component';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule, DynamicInputComponent],
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.scss'],
})
export class DynamicSectionComponent {
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
}
