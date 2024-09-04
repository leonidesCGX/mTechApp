import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'; // Adjust path as needed
import { User } from '../models/user.model'; // Define this model
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  isLoading: boolean = false;
  private usersSubscription: Subscription | null = null;

  constructor(private userService: UserService) {}
  
  ngOnInit() {
  
    this.usersSubscription = this.userService.users$.subscribe((_users: User[]) => this.users = _users);
    this.userService.getUsers().subscribe();
    // .subscribe(
    //   (data: User[]) => {
    //     this.users = data;
    //     this.isLoading = false;
    //   },
    //   (error) => {
    //     console.error('Error fetching users', error);
    //     this.isLoading = false;
    //   }
    // );
  }
  ngOnDestroy() {
    if(this.usersSubscription){
      this.usersSubscription.unsubscribe();
    }
  }
}

