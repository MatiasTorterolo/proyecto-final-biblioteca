export interface ILibros{
    
    id: number | null;
    nombre: string;
    autor: string;
    año: number;
    genero: string;
    descripcion: string;
}

export interface IUsuarios{
    
    id: number | null;
    nombre: string;
    apellido: string;
    email: string;
    contraseña: string;
    tipoDeCuenta: string;
}