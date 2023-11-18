import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { UserAPIService } from 'src/app/service/user-api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userId: any;
  user: any;
  users: any;
  errorMsg: any;

  constructor(private actRoute: ActivatedRoute, private uService: UserAPIService, private fb: FormBuilder, private router: Router) { }

  public editUserForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.pattern('^[0-9]+$')]],
  });

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      
      console.log(id)
      this.userId = id;
      console.log(this.userId);
      this.user = this.uService.getUserById(this.userId).subscribe(
        (data) => {this.user = data; console.log(data);
          this.editUserForm = this.fb.group({
            firstName: [this.user.firstName, [Validators.required, Validators.minLength(3)]],
            lastName: [this.user.lastName, [Validators.required, Validators.minLength(3)]],
            email: [this.user.email, [Validators.required, Validators.email]],
            password: [this.user.password, [Validators.required, Validators.minLength(2)] ]
          });
        },
        (error) => {this.errorMsg = error; console.log(error); }
      );
    });
  }

  get firstName() {
    return this.editUserForm.get("firstName");
  }

  get lastName() {
    return this.editUserForm.get("lastName");
  }

  get email() {
    return this.editUserForm.get("email");
  }

  get password() {
    return this.editUserForm.get("password");
  }

  update(employeeId: any, editemployeeForm: any){
    console.log(this.userId);
    console.log(this.editUserForm);
    console.log(this.editUserForm.value);
    console.log(this.editUserForm.value.id);
    this.uService.updateUser(this.userId, this.editUserForm.value).subscribe(
      (data) => {
        this.user = data;
        console.log(data);
       
      },
      (error) => {this.errorMsg = error; console.log(error); }
    );
    this.uService.getAllUsers().subscribe(
      (data) => this.users = data,
      (error) => this.errorMsg = error
    );
    this.router.navigate(['/dashboard/userManagement']);
  }
}
