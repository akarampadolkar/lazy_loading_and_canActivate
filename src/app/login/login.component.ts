import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg : string;
  constructor(private service:MyserviceService, private router : Router) { }

  ngOnInit() {
  }

  check(uname:string, pwd: string){    
    let output = this.service.checkusernamepassword(uname,pwd);    
    if(output == true){
      this.router.navigate(['/dashboard']);
    }else{
      this.msg = 'Invalid user';
    }
  }
}
