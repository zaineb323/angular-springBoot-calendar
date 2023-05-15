import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { HttpClientModule } from '@angular/common/http';
import { RoomServiceService } from './room-service.service';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import {SidebarModule } from 'ng-cdbangular';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    NgbModalModule,
    BrowserModule,
    AppRoutingModule,
    PopoverModule.forRoot(),
    FullCalendarModule,
    HttpClientModule,
    SidebarModule

  ],
  providers: [RoomServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
