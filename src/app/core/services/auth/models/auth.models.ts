/*Se definen las interfaces de Usuarios y respuesta del API una vez que se identifican*/
export interface IUser {
    _id:string;
   email:string;
   password:string | null;
   createdAt?:string;
   updatedAt?:string;
   __v?:string;
}

export interface IUserSignInResponse {
   user:IUser;
   token:string;
}