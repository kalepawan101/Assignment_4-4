import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';

@Component({
  selector: 'app-programing-language',
  templateUrl: './programing-language.component.html',
  styleUrls: ['./programing-language.component.css']
})
export class ProgramingLanguageComponent implements OnInit {

  public programing = [];
  constructor(private _serviceData:ServiceDataService) { }

  ngOnInit() {
    this.programing = this._serviceData.GetPrgramingLanguage();
  }

}
