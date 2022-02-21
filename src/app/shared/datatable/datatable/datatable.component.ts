import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { DatatableService } from 'src/app/services/datatable.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})

export class DatatableComponent implements OnInit {
  @ViewChild('myTable') table: any;
  @Input() rows: [] = [];
  @Input() columns: any = [];
  @Input() totalCount: number = 0;
  @Input() nameButtonNewData:String = ""
  @Input() set numberPage(val: number) {
    this._numberPage = val;
  };
  @Input() set elementsVisibles(val: number) {
    this._elementsVisibles = val;
  };
  @Input() set totalPages(val: number) {
    for (let i = 1; i <= val; i++) {
      if(i===1){
        this.arrayTotalPages.push({active:true, page:i});
      }else{
        this.arrayTotalPages.push({active:false, page:i});
      }
    }
  }
  @Output() changePageEmit: EventEmitter<any> = new EventEmitter();
  @Output() genericSearchEmit: EventEmitter<any> = new EventEmitter();

  arrayTotalPages: any = [];
  ColumnMode = ColumnMode
  timeout: any;
  _elementsVisibles: number = 0;
  _numberPage: number = 0;
  _genericSearch:string = null;
  expanded: any = {};
  pageChange:any;

  constructor(
    private datatableService: DatatableService,
  ) {
  }

  ngOnInit(): void {
  }

  toggleExpandRow(row: any) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onPage(event: any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }


  actions() {
    alert('eeeee');
  }

  clearActivePage(){
    this.arrayTotalPages.forEach((element:any, index:any) => {
      element.active = false;
    });
  }

  changePage(page: number) {
    this.clearActivePage();
    let notEnter:boolean = false;
    this.pageChange = {
      number: page,
      format: true,
    }
    if(this._numberPage + 1  != this.pageChange.number){
        this.changePageEmit.emit(this.pageChange);
        this.arrayTotalPages.forEach((element:any, index:any) => {
          if(element.page === this.pageChange.number){
              this.arrayTotalPages[this.pageChange.number].active =true;
              notEnter = true;
          }
        });
      }
      if(this.pageChange.number === 0 && !notEnter) this.arrayTotalPages[0].active =true;
  }

  firstPage() {
    this.clearActivePage();
    let pageChange = {
      number: 0,
      format: true,
    }
    if(this._numberPage > 0){
      this.changePageEmit.emit(pageChange);
      this.arrayTotalPages[0].active =true;
    }
  }

  lastPage() {
    this.clearActivePage();
    let pageChange = {
      number: this.arrayTotalPages.slice(-1)[0].page,
      format: true,
    }
    if(this._numberPage < pageChange.number -1){
      this.changePageEmit.emit(pageChange);
      this.arrayTotalPages.slice(-1)[0].active =true;
    }
  }

  nextPage() {
    this.clearActivePage();
    let pageChange = {
      number: this._numberPage + 1 === this.arrayTotalPages.slice(-1)[0].page ? this._numberPage : this._numberPage + 1,
      format: false,
    }
    if(this._numberPage < pageChange.number){
      this.changePageEmit.emit(pageChange)
    }
    this.arrayTotalPages[pageChange.number].active =true;
  }

  backPage() {
    this.clearActivePage();
    let pageChange = {
      number: this._numberPage - 1 === this.arrayTotalPages.slice(-1)[0].page ? this._numberPage : this._numberPage - 1,
      format: false,
    }
    pageChange.number < 0 ?null:this.changePageEmit.emit(pageChange);
    this.arrayTotalPages[pageChange.number].active =true;

  }

  
  search(key:any){
    console.log('KEY', key);

    this.genericSearchEmit.emit(key);
  }


  onDetailToggle(event: any) {

    console.log('Detail Toggled', event);
  }

}
