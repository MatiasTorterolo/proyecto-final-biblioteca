import {IUsuarios, ILibros} from "./Interface";

export class Usuario implements IUsuarios{
        id: number | null = null;
        nombre: string = '';
        apellido: string = '';
        email: string = '';
        contraseña: string = '';
        tipoDeCuenta: string = '';

    constructor (usuario ? : any){

        this.id = usuario == undefined ? null : usuario.id;
        this.nombre = usuario == undefined ? null : usuario.nombre;
        this.apellido = usuario == undefined ? null : usuario.apellido;
        this.email = usuario == undefined ? null : usuario.email;
        this.contraseña = usuario == undefined ? null : usuario.contraseña;
        this.tipoDeCuenta = usuario == undefined ? null : usuario.tipoDeCuenta;
    } 
}

export class Libro implements ILibros{
   
    id: number | null = null;
    nombre: string = '';
    autor: string = '';
    año: number = 0;
    genero: string = '';
    descripcion: string = '';

    constructor (libro ? : any){

        this.id = libro == undefined ? null : libro.id;
        this.nombre = libro == undefined ? null : libro.nombre;
        this.autor = libro == undefined ? null : libro.autor;
        this.año = libro == undefined ? null : libro.año;
        this.genero = libro == undefined ? null : libro.genero;
        this.descripcion = libro == undefined ? null : libro.descripcion;
    } 
}