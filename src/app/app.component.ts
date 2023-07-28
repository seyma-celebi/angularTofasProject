import { Component } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  //decorator
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  //export=public
  constructor(private accountService:AccountService){
  }

  title = 'shop';
  text = 'TOFAS';

  //burada fonksiyonlarımız olacak onları tanımlayacağız

  isLoggedIn(){
    return this.accountService.isLoggedIn();
  }

  logOut(){
    this.accountService.logOut();
  }

}
