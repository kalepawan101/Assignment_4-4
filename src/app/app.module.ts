import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatingSystemComponent } from './operating-system/operating-system.component';
import { ProgramingLanguageComponent } from './programing-language/programing-language.component';
import { DatabaseComponent } from './database/database.component';
import { ServiceDataService } from './service-data.service';
import { InvalidComponent } from './invalid/invalid.component';
@NgModule({
  declarations: [
    AppComponent,
    OperatingSystemComponent,
    ProgramingLanguageComponent,
    DatabaseComponent,
    InvalidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
