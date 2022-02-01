import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsSidenavComponent implements OnInit {
  @Output() cancelDetail = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  closeDetails(event:boolean){
    this.cancelDetail.emit(event)
  }

}
