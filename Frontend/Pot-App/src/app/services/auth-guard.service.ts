import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.LoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login'])
      alert("Veuillez vous connecter pour avoir accès à cet onglet")
      return false;
    }

  }
}
