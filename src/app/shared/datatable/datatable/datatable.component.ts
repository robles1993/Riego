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
    this._numberPage = val + 1;
  };
  @Input() set elementsVisibles(val: number) {
    this._elementsVisibles = val;
  };
  @Input() set totalPages(val: number) {
    this.arrayTotalPages = [];
    for (let i = 1; i <= val; i++) {
      if(i===1){
        this.arrayTotalPages.push({active:true, page:i});
      }else{
        this.arrayTotalPages.push({active:false, page:i});
      }
    }
    this.arrayParcialPages = this.arrayTotalPages.slice(this.showPageInitial, this.showPageLast)
  }
  @Output() changePageEmit: EventEmitter<any> = new EventEmitter();
  @Output() genericSearchEmit: EventEmitter<any> = new EventEmitter();
  arrayTotalPages: any = [];
  arrayParcialPages: any = [];

  ColumnMode = ColumnMode
  timeout: any;
  _elementsVisibles: number = 0;
  _numberPage: number = 0;
  _genericSearch:string = null;
  expanded: any = {};
  pageChange:any;
  showPageInitial:number = 0;
  showPageLast:number = 6;

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

  activePageForChangePage(changePage:any){
    this.arrayTotalPages.forEach((element:any) => {
      if(element.page === changePage){
          this.arrayTotalPages[changePage - 1].active =true;
      }
    });
  }

  clearActivePage(){
    this.arrayTotalPages.forEach((element:any) => {
      element.active = false;
    });
  }



  setRangeShowArray(initial:any, last:number){
    this.showPageInitial = initial.condition==="sum"? this.showPageInitial +  initial.value: 
    initial.condition==="subtraction"?this.showPageInitial -  initial.value:initial.value;
    this.showPageLast =this.showPageInitial + last; 
    this.arrayParcialPages = this.arrayTotalPages.slice(this.showPageInitial, this.showPageLast)
  }

  changeBlockPages(changePage:number ){
    // debugger;
    let lastElement = this.arrayParcialPages[this.arrayParcialPages.length - 1];
    let firstElement = this.arrayParcialPages[0];
    if(changePage === lastElement.page && changePage != this.arrayTotalPages[this.arrayTotalPages.length - 1].page){
      this.setRangeShowArray({condition:"sum", value:5 },6);
    }
    if(changePage === firstElement.page && changePage != this.arrayTotalPages[0].page  ){
      this.setRangeShowArray({condition:"subtraction", value:5 },6);
    }
  }

  changePage(changePage: number) {
    if(changePage != this._numberPage){
      this.clearActivePage();
      this.changeBlockPages(changePage);
      this.changePageEmit.emit(changePage - 1);
      this.activePageForChangePage(changePage);
    }
  }

  firstPage() {
    if(this._numberPage -1 > 0){
      this.clearActivePage();
      this.changePageEmit.emit(0);
      this.setRangeShowArray({condition:"nothing", value:0 },6);
      this.arrayTotalPages[0].active =true;
    }
  }

  lastPage() {
    let lastLength =  this.arrayTotalPages.slice(-1)[0].page;
    if(this._numberPage < lastLength - 1){
      this.clearActivePage();
      this.changePageEmit.emit(lastLength -1 );
      this.showPageInitial =this.arrayTotalPages[this.arrayTotalPages.length - 1].page -5 ;
      this.showPageLast =this.arrayTotalPages[this.arrayTotalPages.length - 1].page; 
      this.arrayParcialPages = this.arrayTotalPages.slice(this.showPageInitial, this.showPageLast)
      this.arrayTotalPages.slice(-1)[0].active =true;
    }
  }

  checkLastPage(page:any){
    console.log(page);
    console.log(this.showPageLast);
    if(page === this.showPageLast){
      return true;
    }
    return false;
  }

  checkFirstPage(page:any){
    console.log(page);
    console.log(this.showPageInitial);
    if(page === this.showPageInitial){
      return true;
    }
    return false;
  }

  nextPage() {
    if(this._numberPage < this.arrayTotalPages.length){
      this.clearActivePage();
      if( this.checkLastPage(this._numberPage + 1)){
        this.showPageInitial = this._numberPage;
        this.showPageLast =this.showPageInitial + 6; 
        this.arrayParcialPages = this.arrayTotalPages.slice(this.showPageInitial, this.showPageLast)
      }
      this.changePageEmit.emit(this._numberPage);
      this.arrayTotalPages[this._numberPage].active =true;
    }
  }

  backPage() {
    let backPage = this._numberPage -1 ;
    if(backPage > 0){
      this.clearActivePage();
      if( this.checkFirstPage(backPage)){
        this.showPageInitial =  backPage>=5?backPage - 5:0;
        this.showPageLast =backPage>=5? backPage + 1: 6; 
        this.arrayParcialPages = this.arrayTotalPages.slice(this.showPageInitial, this.showPageLast)
      }
      this.changePageEmit.emit(backPage-1);
      this.arrayTotalPages[backPage - 1].active =true;
    }
  }

  
  search(key:any){
    this.genericSearchEmit.emit(key);
  }


  onDetailToggle(event: any) {
    console.log('Detail Toggled', event);
  }

}
