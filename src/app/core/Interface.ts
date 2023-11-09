export interface ILibros{
    
    id: number | null;
    nombre: string;
    autor: string;
    year: number;
    genero: string;
    descripcion: string;
}

export interface IUsuarios{
    
    id?: number | undefined;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    tipoDeCuenta: string;
}