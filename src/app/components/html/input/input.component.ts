import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-generic',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() inpuType:any ="text";
  @Input() inputModel:any = null;
  @Input() showLabel:boolean = true;
  @Input() label:any = null;
  @Input() id:any = null;
  @Output() emitKey: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  keyUp(key:any){
    this.emitKey.emit(key.target.value);
  }
}
