// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [BrowserModule],
  bootstrap: [ParentComponent],
})
export class AppModule {}
