import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-generic',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() inpuType:any ="text";
  @Input() inputModel:any = null;
  @Input() label:any = null;
  @Input() id:any = null;



  constructor() { }

  ngOnInit(): void {
  }

}
