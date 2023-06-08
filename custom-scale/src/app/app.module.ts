import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
