import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {

    constructor() { }


    GetOperatingSystem()
    {
        return ['Linux','Windows','Mac','Android'];
    }
    
    GetPrgramingLanguage()
    {
        return ['C','C++','PHP','JAVA'];
    }

    GetDatabase()
    {
        return ['MsSQL','MySQL','Oracle','MongoDB'];
    }
}
