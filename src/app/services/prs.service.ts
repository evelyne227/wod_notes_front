import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Prs } from './../models/prs.model';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrsService {

  constructor(private server: ServerService) { }

  public getAll(): Observable<Prs[]>
  {
    return this.server.get<Prs[]>('prs/all/').pipe(
      map(res => res.map((m: any) => new Prs(m))),
      catchError(err =>
        {
          console.error(err);
          return [];
        })
    );
  }

}
