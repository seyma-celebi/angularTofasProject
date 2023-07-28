import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core"
import { Observable } from "rxjs";
import { AccountService } from "../services/account.service";


@Injectable()


export class LoginGuard implements CanActivate {

    // guardlar birer servis gibi çalışır
    // servislerin kullanılabilmesi için @Injectable yapılarına ihtiyaç vardır

    constructor(private accountService: AccountService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        let logged = this.accountService.isLoggedIn();
        if (logged) {
            return true;
        }
        this.router.navigate(["login"]);
        return false;
    }

}