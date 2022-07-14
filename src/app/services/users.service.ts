import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users, FullUser } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(page: number, size: number): Observable<Users> {
    // const params = new HttpParams();
    return this.http.get<Users>(`${environment.api}user/${page}/${size}`);
  }

  getSingleUser(id: number): Observable<FullUser> {
    // const params = new HttpParams();
    return this.http.get<FullUser>(`${environment.api}user/${id}`);
  }

  getFriends(id: number, page: number): Observable<Users> {
    // const params = new HttpParams();
    return this.http.get<Users>(
      `${environment.api}user/${id}/friends/${page}/20`
      )
  }
}

// com/user/1 - ერთი მომხმარებელი
// /user/{userId}
//მომხმარებლების წამოღება
// /user/1/20
// /user/{page}/{size}
//მომხმარებლის მეგობრების წამოღება
// /user/{userId}/friends/{page}/{size}
// com/user/20/friends/1/20
