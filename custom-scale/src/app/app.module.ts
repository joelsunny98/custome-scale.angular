import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ScaleInputComponent } from './components/scale-input/scale-input.component';
import { MajorTicksArrayPipe } from './pipes/major-ticks-array.pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScaleInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
