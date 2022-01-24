import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

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
      roles:['admin','user']
    },
    {
      icon:'fas fa-chart-pie',
      link:'/graphics',
      name:'Gráficos',
      roles:['admin','user']
    },
    {
      icon:'fas fa-cog',
      link:'/settings-administrative',
      name:'Configuración',
      roles:['admin']
    },
    {
      icon:'fas fa-power-off',
      link:'/close',
      name:'Cerrar sesión',
      roles:['admin','user']
    }
  ]
  constructor(
    private tokenService: TokenService
  ) { }
  isAdmin = false;
  ngOnInit(): void {
    this.isAdmin = this.tokenService.isAdmin();
  }

  logout(){
    console.log('logout')
    this.tokenService.logOut();
  }


}
