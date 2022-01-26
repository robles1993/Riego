import BaseModel from "./BaseModel.class";

export class UserModel extends BaseModel{
    id:any = null;
    nombre: string = null;
    nombreUsuario:string = null;
    email:string = null;
    password:string = null;
    constructor(object: any){
        super();
        super.initialize(object);
    }
}
