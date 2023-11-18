import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserAPIService } from '../service/user-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  public users: User[] = [];
  public errorMsg: any;
  constructor(private userService: UserAPIService, private router: Router) {
    
  }


  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (data) => {
      this.users = data;
      },
      (error) => { this.errorMsg = error;}
    );
    console.log(this.users);
  }

  deleteUser(user: User) {
    console.log("deleting");
    this.userService.deleteUser(user.email).subscribe((data) => { console.log(data), this.displayUsers() },
    (err) => console.log(err));
  }
 
  displayUsers(){
    this.userService.getAllUsers().subscribe(
      (data) => this.users = data,
      (err) => console.log(err))
  }
  editUser(user: User) {
    console.log("hello")
    this.router.navigate(['/dashboard/userManagement/edit/', user.id]);
  }
  addUser() {
    this.router.navigate(["/dashboard/userManagement/new"]);
  }
}
