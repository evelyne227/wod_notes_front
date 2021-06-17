import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/users.model';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public usersList!: User[];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => 
      {
        this.usersList = users;
      })
  }

}
