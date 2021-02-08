import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-your-configuration',
  templateUrl: './your-configuration.component.html',
  styleUrls: ['./your-configuration.component.scss']
})
export class YourConfigurationComponent {

  @Input()
  public selectedColor: string;

  @Input()
  public selectedSize: number;

  constructor() {
  }

}
