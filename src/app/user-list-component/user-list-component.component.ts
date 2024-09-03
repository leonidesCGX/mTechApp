import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'; // Adjust path as needed
import { User } from '../models/user.model'; // Define this model

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.scss'],
})
export class UserListComponent implements OnInit {

  
  users: User[] = [];

  constructor(private userService: UserService) {}

  
  ngOnInit() {
    debugger
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
}

