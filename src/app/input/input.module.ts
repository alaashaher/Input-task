import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: [InputComponent]
})
export class InputModule { }