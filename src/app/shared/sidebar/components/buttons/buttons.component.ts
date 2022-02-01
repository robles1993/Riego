import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-sidebar',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Input() showSave:boolean = true;
  @Output() closeSide = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  closeSidebar(){
    this.closeSide.emit(false)
  }

}
