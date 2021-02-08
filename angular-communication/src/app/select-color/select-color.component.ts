import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.scss']
})
export class SelectColorComponent {

  @Output()
  public selectedColor: EventEmitter<string> = new EventEmitter<string>();

  public colors = ['white', 'black', 'yellow', 'red'];

  constructor() {
  }

  public onSelectColor(event: Event): void {
    this.selectedColor.emit((event.target as HTMLInputElement).value);
  }

}
