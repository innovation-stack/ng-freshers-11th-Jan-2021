import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './01_components/components.module';
import { UiToolbarComponent } from './ui-toolbar/ui-toolbar.component';

@NgModule({
  declarations: [AppComponent, UiToolbarComponent],
  imports: [BrowserModule, AppRoutingModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
