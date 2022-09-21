import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ParamMap,
  NavigationEnd,
} from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../models/users.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  @ViewChildren('theLastList', { read: ElementRef })
  theLastList: QueryList<ElementRef>;
  users: User[] = [];
  currentPage: number = 1;
  observer: any;
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    this.fetchData();
    this.intersectionObserver();
  }
  fetchData() {
    this.usersService.getUsers(this.currentPage, 20).subscribe((data) => {
      data.list.forEach((element) => {
        this.users.push(element);
      });
      // this.users = data.list;
    });
  }
  ngAfterViewInit() {
    this.theLastList.changes.subscribe((d) => {
      console.log(d);
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
        this.fetchData();
      }
    }, options);
  }
}
