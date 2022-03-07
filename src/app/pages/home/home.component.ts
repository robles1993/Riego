import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DatatableService } from 'src/app/services/datatable.service';
import { MainService } from 'src/app/services/main.service';
import { MessagesService } from 'src/app/services/messages.service';
import { loadedMessages, loadMessages } from 'src/app/state/actions/messages.actions';

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
        this.list = this.formatList(response.content);
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
    return rows = this.datatableService.addDropDown(rows,['coordenadas', 'precio']);
  }

  changePage(page:number){
    this.mainService.test(page).subscribe({
      next: (response) => {
        this.list = this.formatList(response.content);
        this.elementsVisibles  = response.numberOfElements;
        this.numberPage = response.number;
        this.columns = [{ name: 'Nombre', height: 300 }, { name: 'Precio', height: 300 }];
      },
      error: error => {
      }
    });
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
