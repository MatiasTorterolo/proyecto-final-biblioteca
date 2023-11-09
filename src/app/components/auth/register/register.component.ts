
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  public usuario: Usuario = new Usuario();

  public newUserId: number = 0;

  constructor(private apiService: APIService, private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit(): number {
    this.apiService.getNextId().subscribe(count => {
      this.newUserId = count;
    });
    return this.newUserId
  }

  
  

  public validatePassword: ValidatorFn = (formGroup: AbstractControl):  ValidationErrors | null => { 
    let password = formGroup.get('password')?.value;
    let confirmPassword = formGroup.get('confirmPassword')?.value;

    return password !== confirmPassword ? { notSame: true } : null
  }

  public loginForm: FormGroup = this.formBuilder.group({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(10)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(10)])
  }, {validators: this.validatePassword});

  
  public isInvalidField(field: string): boolean | null {
    return this.loginForm.controls[field].errors && this.loginForm.controls[field].touched;
  }

  public isInvalidPasswordField(field:string): boolean | null {
    return this.loginForm.errors?.["notSame"] === true || this.isInvalidField(field)
  }

  public getPasswordError(passwordField: string): string | null {
    const fieldError = this.getFieldError(passwordField);


    if(fieldError) {
      return fieldError
    }

    if(this.loginForm.errors?.["notSame"]) {
      console.log(this.newUserId);
      return 'Las contraseñas deben coincidir';
    }

    return null
  }

  public getFieldError(field: string): string | null {
    if(!this.loginForm.controls[field]) return null;

    const errors = this.loginForm.controls[field].errors || {};
    for (const errorKey of Object.keys(errors)) {
      switch (errorKey) {
        case 'required':
          return 'Este campo es requerido.';
        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres.`;
        default:
          return null;
      }
    }

    return null;
  }

  

  public async onSubmit() {


    if(this.loginForm.valid) {

      this.usuario = { id: this.newUserId, nombre: this.loginForm.get('nombre')?.value, apellido: this.loginForm.get('apellido')?.value, email: this.loginForm.get('email')?.value, password: this.loginForm.get('confirmPassword')?.value, tipoDeCuenta: "Usuario"};

    }

    
   try{

    let isRegister: boolean = await this.authService.register(this.usuario);

    if(isRegister){
      this.router.navigate(['/landing']); //este navigate hay que cambiarlo tmb
    }
    

   } catch (error){
    console.log(error);
   }
    
  }

  public navigateToLogin(){
    this.router.navigate(['/landing']); //esto hay que cambiarlo
  }
}


