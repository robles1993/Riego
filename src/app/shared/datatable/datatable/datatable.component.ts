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
  @Input() set numberPage(val: number) {
    this._numberPage = val;
  };
  @Input() set elementsVisibles(val: number) {
    this._elementsVisibles = val;
  };
  @Input() set totalPages(val: number) {
    for (let i = 1; i <= val; i++) {
      this.arrayTotalPages.push(i);
    }
  }
  @Output() changePageEmit: EventEmitter<any> = new EventEmitter();
  arrayTotalPages: any = [];
  ColumnMode = ColumnMode
  timeout: any;
  _elementsVisibles: number = 0;
  _numberPage: number = 0;
  expanded: any = {};
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

  changePage(page: number) {
    let pageChange = {
      number: page,
      format: true,
    }
    console.log('actualpage', this._numberPage + 1);
    console.log(' pagina a cambiar', pageChange.number);

    if(this._numberPage + 1  != pageChange.number){
      this.changePageEmit.emit(pageChange)
    }
  }

  firstPage() {
    let pageChange = {
      number: 0,
      format: true,
    }
    if(this._numberPage > 0){
      this.changePageEmit.emit(pageChange)
    }
  }

  lastPage() {
    let pageChange = {
      number: this.arrayTotalPages.slice(-1)[0],
      format: true,
    }
    if(this._numberPage < pageChange.number -1){
      this.changePageEmit.emit(pageChange)
    }
  }

  nextPage() {
    let pageChange = {
      number: this._numberPage + 1 === this.arrayTotalPages.slice(-1)[0] ? this._numberPage : this._numberPage + 1,
      format: false,
    }
    if(this._numberPage < pageChange.number){
      this.changePageEmit.emit(pageChange)
    }
    
  }

  backPage() {
    let pageChange = {
      number: this._numberPage - 1 === this.arrayTotalPages.slice(-1)[0] ? this._numberPage : this._numberPage - 1,
      format: false,
    }
    pageChange.number < 0 ?null:this.changePageEmit.emit(pageChange);
  }

  onDetailToggle(event: any) {

    console.log('Detail Toggled', event);
  }

}
