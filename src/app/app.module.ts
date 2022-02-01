import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/httpAuthInterceptor';
import { CookieService } from "ngx-cookie-service";
import { IndexComponent } from './index/index.component';
import { SettingsComponent } from './pages-administrative/settings/settings.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { UserDetailsComponent } from './pages/user/details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs'
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { messagesReducer } from './state/recuders/messages.reducer';
import { ROOT_REDUCERS } from './state/app.state';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/html/input/input.component';
import { SelectComponent } from './components/html/select/select.component';
import { ButtonComponent } from './components/html/button/button.component';
import { ButtonsComponent } from './shared/sidebar/components/buttons/buttons.component';
import { AlertsSidenavComponent } from './pages/alerts/sidenav/alerts.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GraphicsComponent,
    SidenavComponent,
    HeaderComponent,
    IndexComponent,
    SettingsComponent,
    SidebarComponent,
    UserDetailsComponent,
    InputComponent,
    SelectComponent,
    ButtonComponent,
    ButtonsComponent,
    AlertsSidenavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTabsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST' })

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
