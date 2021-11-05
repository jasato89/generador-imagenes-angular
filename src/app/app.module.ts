import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragAreaComponent } from './components/drag-area/drag-area.component';
import {DragDropModule} from '@angular/cdk/drag-drop'


@NgModule({
  declarations: [
    AppComponent,
    DragAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
