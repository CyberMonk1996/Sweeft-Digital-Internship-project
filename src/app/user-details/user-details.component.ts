import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { FullUser, User } from '../models/users.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit, /*OnDestroy*/ OnChanges {
  id: number;
  user: FullUser;
  page: number = 1;
  friends: User[] = [];
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.usersService.getSingleUser(this.id).subscribe((data) => {
      this.user = data;
    });
    this.usersService.getFriends(this.id, this.page).subscribe((data) => {
      this.friends = data.list;
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  onClick() {
    console.log(this.friends);
  }
  ngOnChanges(): void {
    console.log(this.user);
  }
}
