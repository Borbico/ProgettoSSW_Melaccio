import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ArchivioService {

  key: string = 'key=cfb29652';
  indirizzoGet: string = 'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/get?' + this.key;
  indirizzoSet: string = 'https://eu-central-1.aws.data.mongodb-api.com/app/kvaas-giwjg/endpoint/set?' + this.key;

  constructor() { }
  public getArchivio(): Observable<Object> {
    
  }
}