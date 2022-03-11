import { methodsEnum } from "../enums/datatable.enum";
import BaseModel from "./BaseModel.class";

export class sendObj extends BaseModel{
    method:methodsEnum = methodsEnum.STANDARD;
    numberPage:number=null;
    list?:[] =[];
    constructor(object: any){
        super();
        super.initialize(object);
    }
}

// export class DatatableModel extends BaseModel{

// }
