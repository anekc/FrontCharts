import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { ChartSectionComponent } from './chartSection/chart-section/chart-section.component';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { ListSectionComponent } from './listSection/list-section/list-section.component';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  declarations: [
    AppComponent,
    ChartSectionComponent,
    ListSectionComponent
  ],
  imports: [
    NgxChartsModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule,
    BrowserModule,
    SocketIoModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
