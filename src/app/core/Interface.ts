export interface ILibros{
    
    id: number | null;
    nombre: string;
    autor: string;
    year: number;
    genero: string;
    imagenUrl: string;
    descripcion: string;
    disponibilidad: number | null;
}

export interface IUsuarios{
    
    id?: number | undefined;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    tipoDeCuenta: string;
}

export interface INoticias{
    
    titulo: string;
    contenido: string;
    imagenUrl: string;

}