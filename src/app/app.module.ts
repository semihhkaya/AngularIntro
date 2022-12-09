import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { Routes,RouterModule } from '@angular/router';
import { Post } from './post/post';
import { AlertifyService } from './services/alertify.service';

const routes :Routes= [ //Root yönlendirme konfigürasyonu
  {path:"posts",component:PostComponent},
  {path:"",redirectTo:"posts",pathMatch:"full"},
  {path:"customers",component:CustomerComponent},
  {path:"posts/:userid",component:PostComponent} //Post component açıldığında parametrelerde user
  //id var mı diye kontrol edilir.
]

@NgModule({ //Modul, uygulamalardaki parçalar. Örn: yönetim modulü paneli gibi
  declarations: [
    AppComponent,
    CustomerComponent,
    NavComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AlertifyService], //App module alertify service'i koyduk her seferinde projenin her yerinde tekrar instance oluşturursak bellek kaybı yaşanır o yüzden merkezi yapı olan app module eklemiş olduk.
  bootstrap: [AppComponent]
})
export class AppModule { }
