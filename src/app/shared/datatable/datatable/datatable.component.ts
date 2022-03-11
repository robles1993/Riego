import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ColumnMode,SelectionType  } from '@swimlane/ngx-datatable';
import { methodsEnum } from 'src/app/enums/datatable.enum';
import { sendObj } from 'src/app/models/datataBleModels.class';
import { DatatableService } from 'src/app/services/datatable.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})


export class DatatableComponent implements OnInit {
  @ViewChild('myTable') table: any;
  @Input() set  rows (val:sendObj){
    let noRepeet:boolean = true;
    if(val.method === methodsEnum.STANDARD){
      val.list.forEach((element:any) => {
        this._rows.forEach((row:any) => { //meter map
            if(row.id === element.id){
              noRepeet = false;
            }
          });
          if(noRepeet)this._rows.push(element);
        });
    }
    if(val.method === methodsEnum.ONPAGE){ //tener en en cuenta para un futuro
      this._rows = val.list;
    }
  };
  @Input() columns: any = [];
  @Input() totalCount: number = 0;
  @Input() nameButtonNewData:String = ""
  @Input() set numberPage(val: number) {
    this._numberPage = val + 1;
  };
  @Input() selectionType:any = false;
  @Input() footer:string='footer-1';
  @Input() actions:any;
 
  @Output() changePageEmit: EventEmitter<any> = new EventEmitter();
  @Output() genericSearchEmit: EventEmitter<any> = new EventEmitter();
  @Output() editEmit: EventEmitter<any> = new EventEmitter();

  arrayTotalPages: any = [];
  _rows: any = [];
  ColumnMode = ColumnMode
  timeout: any;
  _numberPage: number = 0;
  _genericSearch:string = null;
  expanded: any = {};
  selected:any = [];
  SelectionType = SelectionType;
  emitObj:sendObj = new sendObj({});
  cache:any={};
  isLoading = 0;
  stopPropagation:boolean = false;
  constructor(
    private datatableService: DatatableService,
  ) {
  }

  ngOnInit(): void {

  }

  toggleExpandRow(row: any) {
    this.table.rowDetail.toggleExpandRow(row);

  }

  onDetailToggle(event: any) {
    this.stopPropagation = true;
    setTimeout(() =>{
      let editObj:any = {
        type:'close',
        row:event.row,
      }
      this.editEmit.emit(editObj);
    },1);
  }


  onPage(event: any) {
    // console.log('EVENT ON PAGE', event)
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
    this.isLoading++;
      if (this.cache[event.offset]) return;
      this.emitObj=new sendObj({
        numberPage:event.offset,
        method:methodsEnum.STANDARD,
      });
        this.changePageEmit.emit(this.emitObj);
        this.cache[event.offset ] = true;
    }, this.isLoading--, 100);

  }


  actionEmit(type:string,event:any) {
    if(type === "edit") {
      this.editEmit.emit(type);
       console.log(event.row);
    }else{
      this.stopPropagation = true;
      this.editEmit.emit(type);
      console.log('action emit',type);

    }
  }

  onSelect( selected:any) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected.selected);
  }
  
  search(key:any){
    this.genericSearchEmit.emit(key);
  }
  searchColumn(){

  }

  // onActivate(event:any) {
  // }

  // displayCheck(row:any) {
  //   return row.name !== '80';
  // }

  editByClicking(event: any) {
    let type:string = event.type;
    if(type==="checkbox" || this.stopPropagation){
      event.event.stopPropagation();
      this.stopPropagation = !this.stopPropagation
    }else{
      if(event.type==='click'){
        let editObj:any = {
          type:'edit',
          row:event.row,
        }
        if(event.type == 'click') {
          this.editEmit.emit(editObj)
        }
      }
    }
  }
}
