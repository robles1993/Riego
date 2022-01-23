import BaseModel from "./BaseModel.class";

export class JwtDTO extends BaseModel {
    token: string = null;
    type?:string = null;
    userName:string = null;
    authorities:string[]=[];
    constructor(object: any){
        super();
        super.initialize(object);
    }

}