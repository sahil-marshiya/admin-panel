import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { RoleService } from '../../../services/role.service';
import { AddRoleComponent } from '../add-role/add-role.component';
import { EditRoleComponent } from '../edit-role/edit-role.component';

interface Role {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
})
export class RoleListComponent implements OnInit {
  roles = new MatTableDataSource<Role>();
  displayedColumns: string[] = ['name', 'description', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private roleService: RoleService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fetchRoles();
  }

  fetchRoles(): void {
    this.roleService.getRoles().subscribe(
      (data: Role[]) => {
        this.roles.data = data;
        this.roles.paginator = this.paginator;
        this.roles.sort = this.sort;
      },
      (error) => {
        console.error('Error fetching roles', error);
      }
    );
  }

  openAddRoleDialog(): void {
    const dialogRef = this.dialog.open(AddRoleComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchRoles();
        this.snackBar.open('Role added successfully', 'Close', {
          duration: 3000,
        });
      }
    });
  }

  openEditRoleDialog(role: Role): void {
    const dialogRef = this.dialog.open(EditRoleComponent, {
      width: '400px',
      data: role,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchRoles();
        this.snackBar.open('Role updated successfully', 'Close', {
          duration: 3000,
        });
      }
    });
  }

  deleteRole(id: string): void {
    this.roleService.deleteRole(id).subscribe(() => {
      this.fetchRoles();
      this.snackBar.open('Role deleted successfully', 'Close', {
        duration: 3000,
      });
    });
  }
}
