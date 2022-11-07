import { Component, OnInit, Input } from "@angular/core";

declare var require: any;
import * as Highcharts from "highcharts";
let Boost = require("highcharts/modules/boost");
let noData = require("highcharts/modules/no-data-to-display");
let More = require("highcharts/highcharts-more");

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
require("highcharts/modules/networkgraph")(Highcharts);

@Component({
  selector: "bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.less"]
})
export class BarChartComponent implements OnInit {
  title = "HighChartNetworkGraph";
  chart: any;
  constructor() {}

  ngOnInit() {
    this.chart = Highcharts.chart("container", this.options);
    // this.addColours();
  }
  options: any = {
    chart: {
      type: "column"
    },
    title: {
      text: "Number of Ideas & Challenges Tagged by the 17 UN Sustainability and Development Goals"
    },
    xAxis: {
      categories: ['No poverty',
      'Zero hunger',
      'Good health and well-being',
      'Quality education',
      'Gender equality',
      'Clean water and sanitation',
      'Affordable and clean energy',
      'Decent work and economic growth',
      'Industry, Innovation and Infrastructure',
      'Reduced inequality',
      'Sustainable cities and communities',
      'Responsible consumption and production',
      'Climate action',
      'Life below water',
      'Life on land',
      'Peace, justice and strong institutions',
      'Partnership for the goals'
    ],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Number of Ideas & Challenges'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'Tagged',
      data: [5, 3, 4, 7, 2,4,5,6,7,2,2,4,5,6,7,2,2]
    }]
  };
}
