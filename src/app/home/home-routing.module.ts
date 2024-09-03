import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { UserListComponent } from '../user-list-component/user-list-component.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'user',
    component: UserListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
