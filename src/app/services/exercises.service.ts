import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { Exercise } from '../models/exercises.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private server: ServerService) { }

  public getAll(): Observable<Exercise[]>
  {
    return this.server.get<Exercise[]>('benchmarks/all/').pipe(
      map(res => res.map((m: any) => new Exercise(m))),
      catchError(err =>
        {
          console.error(err);
          return [];
        })
    );
}

public getAllBySubCat(sub_category_id: any): Observable<Exercise[]>
{
  return this.server.get<Exercise[]>('benchmarks/cat/'+sub_category_id).pipe(
    map(res => res.map((m: any) => new Exercise(m))),
    catchError(err =>
      {
        console.error(err);
        return [];
      })
  );
}

public getOneById(id: any): Observable<Exercise | any> 
{
  return this.server.get<Exercise>('benchmarks/id/'+ id).pipe(
    map(res => res.length > 0 ? new Exercise(res[0]) : null),
    catchError(err => 
      {
        console.error(err);
        return [];
      })
  );
}



}



