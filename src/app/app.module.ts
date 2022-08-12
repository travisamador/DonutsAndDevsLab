import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'donuts', component: DonutsComponent},
  {path: 'donuts/:id', component: DonutDetailComponent},
  {path: 'famouspeople', component: FamousPeopleComponent},
  {path: 'famouspeople/:name', component: FamousPersonDetailComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  //if page not found
  {path: '**', component: HomeComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DonutDetailComponent,
    FamousPeopleComponent,
    FamousPersonDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
