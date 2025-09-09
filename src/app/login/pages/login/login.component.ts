import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = this.fb.group({
    dni: ['', [Validators.required, Validators.pattern(/^\d{7,8}$/)]],
    password: ['', Validators.required]
  });
  constructor(private fb: FormBuilder, private router: Router, private servicioAuth: AuthService) {
  }

  get dni() {
    return this.loginForm.controls['dni'];
  }
  get password() { return this.loginForm.controls['password']; }

  entrar() {
    const json = this.loginForm.value;
    console.log(json);
    
    this.servicioAuth.getUserByDni(json.dni! as string, json).subscribe(token => {
      
      if (token) {
        this.router.navigate(['/home']);
      }
      //if (user && user.password === password) {
      //  console.log(user);
      //  this.router.navigate(['/home']);
      //} else { alert('dnio o contraseña incorrecta'); }
    }, error => {
      alert(error);
    });
    };
}
