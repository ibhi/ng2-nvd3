import {bootstrap}  from '@angular/platform-browser-dynamic'
import {Component} from '@angular/core'
import {enableProdMode} from '@angular/core'
import {nvD3} from '//cdn.rawgit.com/krispo/ng2-nvd3/v1.1.0/lib/ng2-nvd3.ts'
import {ChartTypes, AllOptions, AllData} from './defs'
import {ChartSelector} from './chart-selector'

@Component({
  selector: 'main',
  directives: [nvD3, ChartSelector],
  template: `
  <div>
    <div>Chart type: <chart-selector (select)="selectType($event)"></chart-selector></div>
    <nvd3 [options]="options" [data]="data"></nvd3>
  </div>
  `
})
export class Main {
  options;
  data;
  chartType;

  selectType(e){
    this.chartType = e;
    this.options = AllOptions[this.chartType];
    this.data = AllData[this.chartType];
  }
}

enableProdMode();
bootstrap(Main);