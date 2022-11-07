import { Component } from "@angular/core";
import { map } from "rxjs";
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';

var Highcharts = require("highcharts/highmaps.js")
import {ColorAxis, Options } from "highcharts";
var worldMap = require("@highcharts/map-collection/custom/world.geo.json");

@Component({
  selector: "map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.less"]
})
export class MapComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = "mapChart";

  hash = {
    'Gender Equality': 2,
  }

  updateFlag = false;

  chartData = [{ code3: "ABW", z: 105 }, { code3: "AFG", z: 35530 }];

  chartOptions: Options = {
    chart: {
      map: worldMap as any
    },
    title: {
      text: "Challenges based on UN Sustainability and Development Goals"
    },
    exporting: {
      enabled: true
    },
    credits: {
      enabled: true
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: "spacingBox"
      }
    },
    legend: {
      enabled: true
    },
    colorAxis: {
      dataClasses: [
        {
        name: ' ',
        to: 0,
        color: '#ddd'
        },
        {
          from: 1,
          to: 1,
          name: 'No Poverty',
          color: '#E5233D'
        },
        {
          from: 2,
          to: 2,
          name: 'Zero Hunger',
          color: '#DDA73A'
        },
        {
          from: 3,
          to: 3,
          name: 'Good Health and Well Being',
          color: '#4CA146'
        },
        {
          from: 4,
          to: 4,
          name: 'Quality Education',
          color: '#C7202F'
        },
        {
          from: 5,
          to: 5,
          name: 'Gender Equality',
          color: '#F0402D'
        },
        {
          from: 6,
          to: 6,
          name: 'Clean Water and Sanitation',
          color: '#28BFE6'
        },
        {
          from: 7,
          to: 7,
          name: 'Affordable and Clean Energy',
          color: '#FBC411'
        },
        {
          from: 8,
          to: 8,
          name: 'Decent Work and Economic Growth',
          color: '#831C44'
        },
        {
          from: 9,
          to: 9,
          name: 'Industry, Innovation and Infrastructure',
          color: '#F26A2F'
        },
        {
          from: 10,
          to: 10,
          name: 'Reduced Inequalities',
          color: '#E01583'
        },
        {
          from: 11,
          to: 11,
          name: 'Sustainable cities and communities',
          color: '#F89D2A'
        },
        {
          from: 12,
          to: 12,
          name: 'Responsible consumption and production',
          color: '#BF8D2C'
        },
        {
          from: 13,
          to: 13,
          name: 'Climate Action',
          color: '#408046'
        },
        {
          from: 14,
          to: 14,
          name: 'Life below water',
          color: '#1F97B4'
        },
        {
          from: 15,
          to: 15,
          name: 'Life on Land',
          color: '#58BA47'
        },
        {
          from: 16,
          to: 16,
          name: 'Peace Justice and strong institutions',
          color: '#136A9F'
        },
        {
          from: 17,
          to: 17,
          name: 'Partnerships for the goals',
          color: '#14496B'
        },
      ],
        type: "linear"
    },
    series: [
      {
        type: "map",
        name: 'UN Goals',
        states: {
          hover: {
            color: "#BADA55"
          }
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}"
        },
        allAreas: false,
        data: [
          ["fo", 2],
          ["um", 3],
          ["us", 0],
          ["jp", 5],
          ["sc", 7],
          ["in", 2],
          ["fr", 0],
          ["fm", 8],
          ["cn", 0],
          ["pt", 11],
          ["sw", 10],
          ["sh", 0],
          ["br", 3],
          ["ki", 0],
          ["ph", 4],
          ["mx", 2],
          ["es", 0],
          ["bu", 2],
          ["mv", 4],
          ["sp", 2],
          ["gb", 3],
          ["gr", 2],
          ["as", 4],
          ["dk", 0],
          ["gl", 14],
          ["gu", 2],
          ["mp", 1],
          ["pr", 2],
          ["vi", 0],
          ["ca", 1],
          ["st", 0],
          ["cv", 5],
          ["dm", 1],
          ["nl", 0],
          ["jm", 6],
          ["ws", 1],
          ["om", 7],
          ["vc", 0],
          ["tr", 9],
          ["bd", 0],
          ["lc", 9],
          ["nr", 2],
          ["no", 12],
          ["kn", 3],
          ["bh", 9],
          ["to", 3],
          ["fi", 4],
          ["id", 4],
          ["mu", 3],
          ["se", 0],
          ["tt", 4],
          ["my", 3],
          ["pa", 5],
          ["pw", 7],
          ["tv", 6],
          ["mh", 7],
          ["cl", 16],
          ["th", 12],
          ["gd", 10],
          ["ee", 16],
          ["ag", 3],
          ["tw", 11],
          ["bb", 13],
          ["it", 12],
          ["mt", 3],
          ["vu", 16],
          ["sg", 0],
          ["cy", 3],
          ["lk", 4],
          ["km", 0],
          ["fj", 5],
          ["ru", 3],
          ["va", 2],
          ["sm", 2],
          ["kz", 12],
          ["az", 0],
          ["tj", 2],
          ["ls", 1],
          ["uz", 2],
          ["ma", 0],
          ["co", 3],
          ["tl", 0],
          ["tz", 4],
          ["ar", 0],
          ["sa", 4],
          ["pk", 12],
          ["ye", 0],
          ["ae", 2],
          ["ke", 2],
          ["pe", 4],
          ["do", 2],
          ["ht", 2],
          ["pg", 2],
          ["ao", 0],
          ["kh", 12],
          ["vn", 0],
          ["mz", 1],
          ["cr", 0],
          ["bj", 2],
          ["ng", 0],
          ["ir", 3],
          ["sv", 12],
          ["sl",0],
          ["gw", 1],
          ["hr", 1],
          ["bz", 0],
          ["za", 2],
          ["cf", 0],
          ["sd", 3],
          ["cd", 0],
          ["kw", 4],
          ["de", 3],
          ["be", 4],
          ["ie", 1],
          ["kp", 2],
          ["kr", 2],
          ["gy", 3],
          ["hn", 0],
          ["mm", 4],
          ["ga", 0],
          ["gq", 4],
          ["ni", 0],
          ["lv", 0],
          ["ug", 0],
          ["mw", 0],
          ["am", 0],
          ["sx", 0],
          ["tm", 0],
          ["zm", 0],
          ["nc", 0],
          ["mr", 0],
          ["dz", 0],
          ["lt", 0],
          ["et", 0],
          ["er", 0],
          ["gh", 0],
          ["si", 0],
          ["gt", 0],
          ["ba", 0],
          ["jo", 0],
          ["sy", 0],
          ["mc", 0],
          ["al", 0],
          ["uy", 0],
          ["cnm", 0],
          ["mn", 0],
          ["rw", 0],
          ["so", 0],
          ["bo", 0],
          ["cm", 0],
          ["cg", 0],
          ["eh", 0],
          ["rs", 0],
          ["me", 0],
          ["tg", 0],
          ["la", 0],
          ["af", 0],
          ["ua", 0],
          ["sk", 0],
          ["jk", 0],
          ["bg", 0],
          ["qa", 0],
          ["li", 0],
          ["at", 0],
          ["sz", 0],
          ["hu", 0],
          ["ro", 0],
          ["ne", 0],
          ["lu", 0],
          ["ad", 0],
          ["ci", 0],
          ["lr", 0],
          ["bn", 0],
          ["iq", 0],
          ["ge", 0],
          ["gm", 0],
          ["ch", 0],
          ["td", 0],
          ["kv", 0],
          ["lb", 0],
          ["dj", 0],
          ["bi", 0],
          ["sr", 0],
          ["il", 0],
          ["ml", 0],
          ["sn", 0],
          ["gn", 0],
          ["zw", 0],
          ["pl", 0],
          ["mk", 0],
          ["py", 0],
          ["by", 0],
          ["cz", 0],
          ["bf", 0],
          ["na", 0],
          ["ly", 0],
          ["tn", 0],
          ["bt", 0],
          ["md", 0],
          ["ss", 0],
          ["bw", 0],
          ["bs", 0],
          ["nz", 0],
          ["cu", 0],
          ["ec", 0],
          ["ve", 0],
          ["sb", 0],
          ["mg", 0],
          ["is", 0],
          ["eg", 0],
          ["kg", 0],
          ["np", 0],
          ["eu", 0],
          ["rs", 0],
          ["au", 0]

        ]
      }
    ]
  };
}
