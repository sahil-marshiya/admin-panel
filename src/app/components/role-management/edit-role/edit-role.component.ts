import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss'],
})
export class EditRoleComponent implements OnInit {
  roleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private roleService: RoleService
  ) {
    this.roleForm = this.fb.group({
      name: [data.name, Validators.required],
      description: [data.description, Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.roleForm.valid) {
      this.roleService
        .updateRole(this.data.id, this.roleForm.value)
        .subscribe(() => {
          this.dialogRef.close(true);
        });
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
