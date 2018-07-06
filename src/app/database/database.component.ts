import { Component, OnInit } from '@angular/core';
import { ServiceDataService } from '../service-data.service';
@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  public databases = [];
  constructor(private _serviceData:ServiceDataService) { }

  ngOnInit() {
    this.databases = this._serviceData.GetDatabase();
  }

}
