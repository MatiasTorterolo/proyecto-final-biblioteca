import {IUsuarios, ILibros} from "./Interface";

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
        this.tipoDeCuenta = usuario == undefined ? null : usuario.tipoDeCuenta;
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
    disponibilidad: boolean = true;


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