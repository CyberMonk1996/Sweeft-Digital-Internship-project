import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserListComponent } from "./user-list/user-list.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

//Each route in this array is a JavaScript object that
// contains two properties. The first property, path,
// defines the URL path for the route. The second property,
// component, defines the component Angular should use for
// the corresponding path.
const routes: Routes = [
  { path: '', redirectTo: 'users-list', pathMatch: 'full' },
  { path: 'users-list', title: 'UsersList', component: UserListComponent },
  {
    path: 'user-details/:id',
    title: 'User Details',
    component: UserDetailsComponent,
  },
  { path: '**', component: NotFoundComponent },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//kai kaco