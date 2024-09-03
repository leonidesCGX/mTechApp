import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list-component.component'; // Adjust path as needed
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [UserListComponent] // Export it so it can be used in other modules
})
export class UserModule {}
