import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RulerComponent } from './ruler/ruler.component';
import { FormsModule } from '@angular/forms';
import { ScaleInputComponent } from './scale-input/scale-input.component';

@NgModule({
  declarations: [
    AppComponent,
    RulerComponent,
    ScaleInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
