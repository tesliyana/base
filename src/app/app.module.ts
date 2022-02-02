import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TerminalComponent } from './components/terminal/terminal/terminal.component';
import { WelcomeComponent } from './components/terminal/welcome/welcome.component';

@NgModule({
	declarations: [AppComponent, TerminalComponent, WelcomeComponent],
	imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule, MaterialModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
