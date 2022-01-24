import BaseModel from "./BaseModel.class";

// export class JwtDTO extends BaseModel {
//     token: string = null;
//     constructor(object: any){
//         super();
//         super.initialize(object);
//     }

// }

export class JwtDTO {
    token: string;
    constructor(token: string) {
        this.token = token;
    }
}