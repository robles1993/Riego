import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-generic',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() nameButton:any = null;
  @Input() classButton:any = "btn btn-dark";
  @Input() width:any = "auto";

  
  
  constructor() { }

  ngOnInit(): void {
  }

}
