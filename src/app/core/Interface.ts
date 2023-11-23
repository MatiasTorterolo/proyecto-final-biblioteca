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
    reservas: ILibros[];
}

export interface INoticias{
    
    id?: number | undefined;
    titulo: string;
    contenido: string;
    imagenUrl: string;

}

export interface IConsultas{
    
    id?: number | undefined;
    titulo: string;
    contenido: string;
    email: string;

}
    
