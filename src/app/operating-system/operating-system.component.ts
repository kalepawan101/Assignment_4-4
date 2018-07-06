import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';
@Component({
  selector: 'app-operating-system',
  templateUrl: './operating-system.component.html',
  styleUrls: ['./operating-system.component.css']
})
export class OperatingSystemComponent implements OnInit {

  public os = [];
  constructor(private _serviceData:ServiceDataService) { }

  ngOnInit() {
    this.os = this._serviceData.GetOperatingSystem();
  }

}
