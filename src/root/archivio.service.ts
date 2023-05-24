import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';

@Injectable({
  providedIn: 'any'
})

export class ArchivioService {

  key: string = 'key=cfb29652';
  indirizzoGet: string = 'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?' + this.key;
  indirizzoSet: string = 'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/set?' + this.key;

  constructor() { }
  public getArchivio(): Observable<AjaxResponse<any>> {
    return ajax({
      method: 'GET',
      url: this.indirizzoGet,
      crossDomain: true
    });
  }
  public setArchivio(archivio: Array<object>): Observable<AjaxResponse<any>> {
    const strarchivio = JSON.stringify(archivio);
    return ajax({
      method: 'POST',
      url: this.indirizzoSet,
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json' 
      },
      body: strarchivio
    });
  }
}