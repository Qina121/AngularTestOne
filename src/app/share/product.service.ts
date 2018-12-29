import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private subject = new Subject<any>();
  hide: any;

  constructor() { }

  send(message: any) {
    this.subject.next(message);
  }

  get(): Observable<any> {
      return this.subject.asObservable();
  }

}
