export interface Usuario {
    //creacion de interfaz usuario
    uid: string | any; // atributos tipo any = reciben valores indefinidos
    nombre: string;
    apellido: string;
    email: string;
    rol: string;
    password: string;
}