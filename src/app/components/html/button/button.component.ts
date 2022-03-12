import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-generic',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() nameButton:any = null;
  @Input() classButton:any = "button-standard";
  @Input() width:any = "auto";
  @Input() icon:string= null;
  @Input() id:string= null;

  
  
  constructor() { }

  ngOnInit(): void {
  }

}
