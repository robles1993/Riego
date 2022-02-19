import { SlicePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  constructor() { }

  //Add dropdown
  addDropDown(rows: [], condition:Array<any>) {
    rows.find( (row:any)=>{ 
      row === condition}
    )
    rows.forEach((row: any) => {
      let arrayPush:any = [];
      condition.forEach((element, index) => {
        if(row[condition[index]]){
          arrayPush.push({
            value:row[condition[index]],
            name:condition[index][0].toUpperCase() + condition[index].slice(1),
          });
          delete row[condition[index]];
          row.expand = arrayPush;
        }
      });
    })
    return rows;
  }

  //Format Page

  formatPage(page:any){
    if(page.format){
      if(page.number  === 0 ){
        page.number = page.number;
      }else if(page.number >0){
        page.number = page.number - 1;
      }
    }
    else if(!page.format){
      if(page.number  === 0 || page.number < 0 ){
        page.number = 0;
      }
    }
    return page.number;
  }
}
