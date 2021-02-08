import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectColorComponent } from './select-color/select-color.component';
import { SelectSizeComponent } from './select-size/select-size.component';
import { YourConfigurationComponent } from './your-configuration/your-configuration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SelectColorComponent,
    SelectSizeComponent,
    YourConfigurationComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
