import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthguardService } from '../service/authguard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidCredentialMsg: string | undefined;
  username:string | undefined;
  password:string | undefined;
  retUrl: string | null = "dashboard";
  
  constructor(private authService: AuthguardService, 
    private router: Router, 
    private activatedRoute:ActivatedRoute) {
  }


  ngOnInit(): void {
  }

  onFormSubmit(loginForm: any) {
    this.authService.login(loginForm.value.username, loginForm.value.password).subscribe(data => {
    console.log( 'return to '+ this.retUrl);
    if (this.retUrl!=null) {
        this.router.navigate( [this.retUrl]);
    } else {
        this.router.navigate( ['dashboard']);
    }
    });
  }

}
