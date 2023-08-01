import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './user';
import { Router } from '@angular/router';
// import { SweetalertService } from '../services/sweetalert.service';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:User=new User();
  constructor(private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
  }


  login(form: NgForm) {
    this.accountService.login(this.model);

  }

  // alert(){
  //   // this.sweetalertService.success("Giriş işlemi başarılı");
  //   this.router.navigate(["products"]);

  // }

}


