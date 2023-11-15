import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { IUsuarios } from 'src/app/core/Interface';
import { Noticia, Usuario } from 'src/app/core/Models';
import { APIService } from 'src/app/core/services/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNoticeComponent {

  public news: Noticia = new Noticia();

  constructor(private authService: AuthService,private apiService: APIService, private formBuilder: FormBuilder) {}



  public newsForm: FormGroup = this.formBuilder.group({
    titulo: new FormControl('', [Validators.required]),
    contenido: new FormControl('', [Validators.required])
  });  

  public async onSubmit() {

    if(this.newsForm.valid) {

      this.news = { titulo: this.newsForm.get('titulo')?.value, contenido: this.newsForm.get('contenido')?.value };

      try{

        let isUpdate: boolean = await this.authService.postNew(this.news);
    
        if(isUpdate){
          console.log('Noticia subida con exito'); //este navigate hay que cambiarlo tmb
          window.location.reload()
        }
        
    
       } catch (error){
        console.log(error);
      }
    }
  }

  /*
  public archivos: any = [];

  public previsualizacion: string = '';

  public news: Noticia = new Noticia();

  constructor(private sanitizer: DomSanitizer, private newsService: NewsService, private formBuilder: FormBuilder) {}
  ngOnInit(): void {
  
  }

  public capturarFile(event: any): any {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);
    })
    this.archivos.push(archivoCapturado);
    console.log(event.target.files);
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {

    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);

      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event, image,
          base: null
        });
      };
    } catch (error) {
      throw error;
    }
  });

  public newsForm: FormGroup = this.formBuilder.group({
    titulo: new FormControl('', [Validators.required]),
    contenido: new FormControl('', [Validators.required]),
    imagenUrl: new FormControl('', [Validators.required])
  });

  subirArchivo() {
    
  }

  public async onSubmit(){
    
    if(this.newsForm.valid) {
      this.news = { titulo: this.newsForm.get('titulo')?.value, contenido: this.newsForm.get('contenido')?.value, imagenUrl: this.previsualizacion}
    }
  }

  */
  



}
