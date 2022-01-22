import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  listSidenav:any = [
    {
      icon:'fas fa-home',
      link:'/home',
      name:'Inicio',
    },
    {
      icon:'fas fa-chart-pie',
      link:'/graphics',
      name:'Gráficos',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }



}
