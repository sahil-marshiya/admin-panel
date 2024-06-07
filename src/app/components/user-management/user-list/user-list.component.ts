import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { UserService } from '../../../services/user.service';
import { AddUserComponent } from '../add-user/add-user.component';
import { EditUserComponent } from '../edit-user/edit-user.component';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users = new MatTableDataSource<User>();
  displayedColumns: string[] = ['name', 'email', 'role', 'status', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users.data = data;
        this.users.paginator = this.paginator;
        this.users.sort = this.sort;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchUsers();
        this.snackBar.open('User added successfully', 'Close', {
          duration: 3000,
        });
      }
    });
  }

  openEditUserDialog(user: User): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      width: '400px',
      data: user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchUsers();
        this.snackBar.open('User updated successfully', 'Close', {
          duration: 3000,
        });
      }
    });
  }

  deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.fetchUsers();
      this.snackBar.open('User deleted successfully', 'Close', {
        duration: 3000,
      });
    });
  }
}
