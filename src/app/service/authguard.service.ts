import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserAPIService } from './user-api.service';
import { User } from '../model/User';
import { Role } from '../model/Role';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  private isloggedIn: boolean;
  private userName:string | undefined;
  private password: String | undefined;
  private isAdmin: boolean;
  constructor(private uService: UserAPIService) {
    this.isloggedIn = false;
    this.isAdmin = false;
  }

  login(username: string, password: string) {
    this.uService.getUserByEmail(password).subscribe(data => { 
      console.log("GOT USER!");
      console.log(data == null);
      if (data.email === username && data.password === password) {
        this.isloggedIn = true;
        var roles = data.roles;
        let admin: boolean = false;
        roles.forEach(function (value){
          if (value.name === "Admin") {
            admin = true;
          }
        })
        this.isAdmin = admin;
      } else {
        this.isloggedIn = false;
      }
    });
      this.userName = username;
      this.password = password;

    
      return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
      return this.isloggedIn;
  }

  isAdminUser():boolean {
    return this.isAdmin;
  }

  logoutUser(): void{
    this.isloggedIn = false;
  }

}
