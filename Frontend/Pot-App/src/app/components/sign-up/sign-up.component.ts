import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators, NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup(
      {
        username: new FormControl('', [Validators.required]),
        //first_name: new FormControl('', [Validators.required]),
        //last_name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
      }
    )
  }

  registerUser(form: NgForm) {
    const val = form.value;
    if (val.email && val.password && val.username) {
      console.log(val)
      this.authService.registerUser(val)
        .subscribe(
          res => {
            console.log(res)
            this.router.navigate(['/login'])
            alert('Merci beaucoup pour votre inscription! Vous pouvez maintenant vous connecter et commencer votre chemin vers un potager optimiser et sain!')
          },
          err => {
            console.log("dans l'erreur")
            console.log(err)
            if (!!err.error.username) {
              alert(err.error.username)
            } else if (!!err.error.password) {
              alert(err.error.password)
            }
          },
        );
    } else {
      console.log('la valeur de val n\'est pas conforme.');
      console.log(val);
    }
  }
}
