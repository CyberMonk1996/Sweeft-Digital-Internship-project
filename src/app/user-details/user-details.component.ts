import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
  OnChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { FullUser, User } from '../models/users.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChildren('theLastList', { read: ElementRef })
  theLastList: QueryList<ElementRef>;

  id: number;
  user: FullUser;
  friends: User[] = [];
  currentPage: number = 1;
  observer: any;
  previousFriends: User[] = [];
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.fetchUser(this.id);
    this.fetchFriends();
    this.intersectionObserver();
  }
  ngAfterViewInit() {
    this.theLastList.changes.subscribe((d) => {
      if (d.last) this.observer.observe(d.last.nativeElement);
    });
  }
  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.currentPage++;
        this.fetchFriends();
      }
    }, options);
  }
  fetchUser(id: number) {
    this.usersService.getSingleUser(id).subscribe((data) => {
      this.user = data;
    });
  }
  fetchFriends() {
    this.usersService
      .getFriends(this.id, this.currentPage)
      .subscribe((data) => {
        data.list.forEach((friend) => {
          this.friends.push(friend);
        });
      });
  }
  displayFriend(index: number) {
    this.fetchUser(index);
    this.previousFriends.push(this.user);
  }
  moveToFriend(index: number) {
    this.fetchUser(index);
    const indexOfFriend = this.previousFriends.findIndex((friend) => {
      return (friend.id = index);
    });
    this.previousFriends.splice(indexOfFriend -1, 1);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnChanges(): void {
    console.log(this.user);
  }
}
