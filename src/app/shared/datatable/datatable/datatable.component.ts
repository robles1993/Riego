import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
})

export class DatatableComponent implements OnInit {
  @ViewChild('myTable') table: any;
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC2', expand:{ city:'Ibi', state:'Alicant2e'} },
    { name: 'Dany', gender: 'Male', company: 'KFC34', expand:{ city:'Ibi', state:'Alicweante'} },
    { name: 'Dany', gender: 'Mawle', company: 'KFC' },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },
    { name: 'Dany', gender: 'Male', company: 'KFC', expand:{ city:'Ibi', state:'Alicante'} },

    { name: 'Molly', gender: 'Female', company: 'Burger King', expand:{ city:'Ibi', state:'Alicante'} }
  ];
  columns = [{ name: 'Name', height:300  }, { name: 'Gender', height:300  }, { name: 'Company', height:300 }];
  ColumnMode= ColumnMode
  timeout: any;
  expanded: any = {};
  constructor() {
   }
  ngOnInit(): void {
  }

  toggleExpandRow(row:any) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }
  
  onPage(event:any) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }


  actions(){
    alert('eeeee');
  }


  onDetailToggle(event:any) {
    console.log('Detail Toggled', event);
  }

}
