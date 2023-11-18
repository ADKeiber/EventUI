import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthguardService } from '../service/authguard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'EmployeeRouting';
  constructor (private authService:AuthguardService, 
    private router:Router) {
  }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logoutUser();
    this.router.navigate(['login']);
  }

}
