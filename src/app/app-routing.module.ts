import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { ProdGuardService  } from './guards/prod-guard.service';
import { SettingsComponent } from './pages-administrative/settings/settings.component';
const routes = [

  {
    path:'',
    component: HomeComponent,
    canActivate:[ProdGuardService],
    data: {expectedRol:['admin', 'user']}
  },
  {
    path:'home',
    component: HomeComponent,
    canActivate:[ProdGuardService],
    data: {expectedRol:['admin', 'user']}
  },
  {
    path:'graphics',
    component: GraphicsComponent,
    canActivate:[ProdGuardService],
    data: {expectedRol:['admin', 'user']}
  },
  {
    path:'settings-administrative',
    component: SettingsComponent,
    canActivate:[ProdGuardService],
    data: {expectedRol:['admin']}
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
