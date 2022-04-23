import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { methodsEnum } from 'src/app/enums/datatable.enum';
import { sendObj } from 'src/app/models/datataBleModels.class';
import { DatatableService } from 'src/app/services/datatable.service';
import { MainService } from 'src/app/services/main.service';
import { MessagesService } from 'src/app/services/messages.service';
import { loadedMessages, loadMessages } from 'src/app/state/actions/messages.actions';
import {SelectionType  } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list: [] = [];
  columns: any = [];
  totalCount:number;
  totalPages:number;
  numberPage:number;
  elementsVisibles:number;
  emitObj:sendObj = new sendObj({});
  SelectionType = SelectionType;
  openEdit:boolean = false;
  actions:any= [
    {type:'edit', icon:'fas fa-edit'},
    {type:'delete', icon:'fas fa-trash'},

  ];
  constructor(
    private mainService: MainService,
    private store: Store<any>,
    private messageService: MessagesService,
    private datatableService: DatatableService
  ) { }

  ngOnInit(): void {
    this.datatableInfo();
  }

  datatableInfo() {
    this.mainService.test().subscribe({
      next: (response) => {
        this.emitObj= new sendObj({
          numberPage:response.numberOfElements,
          method:methodsEnum.STANDARD,
          list:this.formatList(response.content),
        });
        // this.list = this.formatList(response.content);
        this.totalCount = response.totalElements;
        this.totalPages = response.totalPages;
        this.elementsVisibles  = response.numberOfElements
        this.numberPage = response.number;
        this.columns = [{ name: 'Nombre', height: 300 }, { name: 'Precio', height: 300 }];
        // this.messageService.setMessages('SUCCESS', 'CORRECTO');
      },
      error: error => {
      }
    });
  }

  formatList(rows: []) {
    //Add dropdown
    return rows = this.datatableService.addDropDown(rows,['coordenadas']);
  }

  paginationCall(obj:sendObj){
    this.mainService.test(obj.numberPage).subscribe({
      next: (response) => {
        this.emitObj= new sendObj({
          numberPage:response.numberOfElements,
          method:obj.method,
          list:this.formatList(response.content),
        });
        // this.list = this.formatList(response.content);
        this.elementsVisibles  = response.numberOfElements;
        this.numberPage = response.number;
        this.columns = [{ name: 'Nombre', height: 300 }, { name: 'Precio', height: 300 }, { name: 'Coordenadas', height: 300 },{ name: 'Familia', height: 300 } , { name: 'Tipo', height: 300 }];
      },
      error: error => {
      }
    });
  }

  changePage(obj:sendObj){
    switch (obj.method) {
      case methodsEnum.STANDARD :
        this.paginationCall(obj)
        break;
      case methodsEnum.ONPAGE :
        this.paginationCall(obj)
        break;
      default:
        break;
    }
  }
  idRow:any;
  listenEmit(event:any){
    switch (event.type) {
      case 'edit':
        this.openEdit = event.row.id==this.idRow?this.openEdit=!this.openEdit:true;
        this.idRow = event.row.id;
        break;
      case 'create':
        this.openEdit = event.row.id==this.idRow?false:true;
        this.idRow = event.row.id;
        break;
      case 'delete':
        this.openEdit = false;
        this.idRow = event.row.id;
        break;
      case 'close':
        this.openEdit = false;
        this.idRow = null;
        break;
      default:
        break;
    }
  }

  genericSearch(key:string){
    if(key){
      this.mainService.genericSearch(key).subscribe({
        next: (response) => {
          this.list = this.formatList(response.content);
          this.totalCount = response.totalElements;
          this.totalPages = response.totalPages;
          this.elementsVisibles  = response.numberOfElements
          this.numberPage = response.number;
          },
          error: error => {
          }
      })
    }else{
      this.datatableInfo();
    }
    
  }
}
