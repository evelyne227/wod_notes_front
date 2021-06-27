import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { WodPerso } from './../models/perso.model';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersoService {

  constructor(private server: ServerService) { }

  public getAll(): Observable<WodPerso[]>
  {
    return this.server.get<WodPerso[]>('mes-wods/all/').pipe(
      map(res => res.map((m: any) => new WodPerso(m))),
      catchError(err =>
        {
          console.error(err);
          return [];
        })
    );
}
}
