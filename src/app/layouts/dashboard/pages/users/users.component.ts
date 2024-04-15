import { Component } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent { 
  displayedColumns: string[] = ['id', 'nombreYapellido', 'email', 'fechaDeingreso'];
 
users: IUser[] = [ 
 { id: 1, 
  nombreYapellido: 'Santiago Alonso',
  email: 'santi@test.com', 
  fechadeIngreso: new Date() 
 }, 
 { 
  id: 2, 
  nombreYapellido:'Alejo Alonso', 
  email: 'alejo@test.com', 
  fechadeIngreso: new Date()
 }
  

]; 
constructor(private matDialog: MatDialog){} 
openDialog(): void{ 
  this.matDialog.open(UserDialogComponent).afterClosed().subscribe({
    next: (result) => {  
      if(result){ 
        this.users = [...this.users, result];
      }
      
    },
  });
}


}
