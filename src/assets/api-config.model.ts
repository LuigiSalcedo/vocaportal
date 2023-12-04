
export class Host {
   public static host: string = 'https://vocaportal-server.onrender.com';
}

export interface Oferta{
   id: number;
   nombre: string;
   programa: {
     id: number;
     nombre: string;
     descripcion: string;
   };
   universidad: {
     id: number;
     nombre: string;
     ciudad: {
       id: number;
       nombre: string;
       pais: {
         id: number;
         nombre: string;
       };
     };
     url: string;
   };
 }