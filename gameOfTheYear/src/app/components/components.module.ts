import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarrasHorizontalComponent } from './grafico-barras-horizontal/grafico-barras-horizontal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [NavbarComponent, GraficoBarrasHorizontalComponent],
  exports: [NavbarComponent, GraficoBarrasHorizontalComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
})
export class ComponentsModule {}
