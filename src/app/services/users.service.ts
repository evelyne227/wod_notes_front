import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { User } from '../models/users.model';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private server: ServerService) { }
  
  public getAll(): Observable<User[]>
  {
    return this.server.get<User[]>('users/all/').pipe(
      map(res => res.map((m: any) => new User(m))),
      catchError(err =>
        {
          console.error(err);
          return [];
        })
    );
}

}