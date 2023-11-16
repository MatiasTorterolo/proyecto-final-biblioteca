import {IUsuarios, ILibros, INoticias, IConsultas} from "./Interface";

export class Usuario implements IUsuarios{
        id?: number | undefined;
        nombre: string = '';
        apellido: string = '';
        email: string = '';
        password: string = '';
        tipoDeCuenta: string = '';

    constructor (usuario ? : any){

        this.id = usuario == undefined ? null : usuario.id;
        this.nombre = usuario == undefined ? null : usuario.nombre;
        this.nombre = usuario == undefined ? null : usuario.nombre;
        this.apellido = usuario == undefined ? null : usuario.apellido;
        this.email = usuario == undefined ? null : usuario.email;
        this.password = usuario == undefined ? null : usuario.password;
        this.tipoDeCuenta = usuario == undefined ? null : usuario["tipo de cuenta"];
    } 
}

export class Libro implements ILibros{
   
    id: number | null = null;
    nombre: string = '';
    autor: string = '';
    year: number = 0;
    genero: string = '';
    imagenUrl: string = '';
    descripcion: string = '';
    disponibilidad: number | null = null;


    constructor (libro ? : any){

        this.id = libro == undefined ? null : libro.id;
        this.nombre = libro == undefined ? null : libro.nombre;
        this.autor = libro == undefined ? null : libro.autor;
        this.year = libro == undefined ? null : libro.year;
        this.genero = libro == undefined ? null : libro.genero;
        this.imagenUrl = libro == undefined ? null : libro.imagenUrl;
        this.descripcion = libro == undefined ? null : libro.descripcion;
        this.disponibilidad = libro == undefined ? null : libro.disponibilidad;
    } 
}

export class Noticia implements INoticias {
    
    id?: number | undefined;
    titulo: string = '';
    contenido: string = '';
    imagenUrl: string = '';

    constructor (noticia ? : any){
        this.id = noticia == undefined ? null : noticia.id;
        this.titulo = noticia == undefined ? null : noticia.titulo;
        this.contenido = noticia == undefined ? null : noticia.contenido;
        this.imagenUrl = noticia == undefined ? null : noticia.imagenUrl;
    }
}

export class Consulta implements IConsultas {
    
    id?: number | undefined;
    titulo: string = '';
    contenido: string = '';
    email: string = '';

    constructor (consulta ? : any){
        this.id = consulta == undefined ? null : consulta.id;
        this.titulo = consulta == undefined ? null : consulta.titulo;
        this.contenido = consulta == undefined ? null : consulta.contenido;
        this.email = consulta == undefined ? null : consulta.email;
    }
}

