import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { FormsModule } from '@angular/forms';
import { ListAllStudents } from './list-all-students/list-all-students';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App,
    ListAllStudents
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),

  ],
  bootstrap: [App]
})
export class AppModule { }
