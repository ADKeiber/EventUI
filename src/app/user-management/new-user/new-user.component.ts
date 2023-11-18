import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray, Validators } from '@angular/forms';
import { UserAPIService } from 'src/app/service/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  public userForm: any;
  employees: any;
  errorMsg: any;

  constructor(private fb: FormBuilder, private uService: UserAPIService, private router: Router) { }

  ngOnInit(): void {
     this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit(userForm: any){
    console.log(this.userForm.value);
    this.uService.createUser(this.userForm.value).subscribe(
      (data) => {
        this.employees = data;
        console.log(this.employees);
       
      },
      (error) => this.errorMsg = error
    );
    this.uService.getAllUsers().subscribe(
      (data) => this.employees = data,
      (error) => this.errorMsg = error
    );
    this.router.navigate(['/dashboard/userManagement']);
    this.userForm.reset();
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

}
