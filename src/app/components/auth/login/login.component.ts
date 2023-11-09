import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/Models';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  public usuario: Usuario | null = null;

  private email: string = '';

  private emailPattern: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  loginForm: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  /*
  public async checkAuth(){

    const check = this.authService.checkAuth(this.usuario!.email, this.usuario!.password);

    if(await check){
      this.router.navigate(['/home']);
    }
    else{
      alert("No existe el usuario");
    }
  }

  public navigateToRegister(){
    this.router.navigate(['/register']);
  }
  */

  isValidFiled(field: string): boolean | null {
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched;

  }

  getFieldError(field: string): string | null {

    if(!this.loginForm.controls[field]) return null;

    const errors = this.loginForm.controls[field].errors || {};

    for (const errorKey of Object.keys(errors)) {
      switch (errorKey) {
        case 'required':
          return "Este campo es requerido.";
        case 'minlenght':
          return `Minimo ${errors['minlength'].requiredLength} caracteres.`;
      }
    }

    return null;
  }


  public async onSubmit() {
    
    if(this.loginForm.valid) {
      console.log('Formulario válido. Usuario: ', this.loginForm.value.email);
    } else {
      console.log('Formulario no válido');
    }

    try{

      let isLogin: boolean = await this.authService.login(this.loginForm.value.email, this.loginForm.value.password);

      if(isLogin) {
        this.router.navigate(['/landing']); //aca hay que ver bien despues a donde redireccionamos cuando ingresa el usuario

      } else {
        this.email = this.loginForm.value.email;

        this.loginForm.reset({ email: this.email });
      }

    } catch (error) {
      console.log(error);
    }
  }
}
