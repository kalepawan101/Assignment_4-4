import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabaseComponent } from './database/database.component';
import { componentFactoryName } from '@angular/compiler';
import { OperatingSystemComponent } from './operating-system/operating-system.component';
import { ProgramingLanguageComponent } from './programing-language/programing-language.component';
import { AppComponent } from './app.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [

  {path : 'database', component:DatabaseComponent},
  {path : 'programing-language' ,component:ProgramingLanguageComponent},
  {path : '' ,component:ProgramingLanguageComponent},
  {path: 'operating-system', component:OperatingSystemComponent},
  {path : '**', component:InvalidComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
