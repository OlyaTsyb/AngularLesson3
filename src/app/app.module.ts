import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {RouterModule} from "@angular/router";
import {CarsComponent} from './component/cars/cars.component';
import {CarComponent} from './component/car/car.component';
import {FullInfoComponent} from './component/full-info/full-info/full-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    CarComponent,
    FullInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{
      path: 'link/home', component: HomeComponent
    },
      {
        path: 'link/cars', component: CarsComponent, children: [
          {
            path: ':id', component: FullInfoComponent
          }
        ]

      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
