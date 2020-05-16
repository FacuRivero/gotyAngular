import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barras-horizontal',
  templateUrl: './grafico-barras-horizontal.component.html',
  styleUrls: ['./grafico-barras-horizontal.component.css'],
})
export class GraficoBarrasHorizontalComponent implements OnDestroy{
  
  @Input() results: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo;

  ngOnDestroy(): void {
    //  clearInterval(this.intervalo);
  }

  constructor( ) {  }

  onSelect(event) {
    console.log(event);
  }
}
