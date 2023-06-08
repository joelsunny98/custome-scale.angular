import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ScaleInputComponent } from './components/scale-input/scale-input.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ScaleInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
