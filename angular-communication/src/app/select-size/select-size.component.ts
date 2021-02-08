import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select-size',
  templateUrl: './select-size.component.html',
  styleUrls: ['./select-size.component.scss']
})
export class SelectSizeComponent {

  @Output()
  public selectedSize: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  public onSelectSize(event: Event): void {
    this.selectedSize.emit(Number((event.target as HTMLInputElement).value));
  }

}
