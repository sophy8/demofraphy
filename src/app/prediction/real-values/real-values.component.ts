import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_usaAlbersLow from "@amcharts/amcharts4-geodata/usaAlbersLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as XLSX from 'xlsx';
import {  DialogOverviewExampleComponent  } from '../../shared/component/dialog-overview-example/dialog-overview-example.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-real-values',
  templateUrl: './real-values.component.html',
  styleUrls: ['./real-values.component.scss']
})
export class RealValuesComponent implements OnInit {
  file:File;
  file2:File;
  arrayBuffer:any;
  public v;
  public part_of_people=[];
  public all_of_people=0;
  public generakKoeficient;
  public childKoeficient;
  public oldKoeficient;
public array=[];
piramida:boolean = false;
diagrama:boolean = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.openDialog();
      }
      openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
          width: '250px'
        });}

  incomingfile(event) 
    {
    this.file= event.target.files[0]; 
    }
    Upload() {
      this.piramida=true;
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            this.v = XLSX.utils.sheet_to_json(worksheet,{raw:true});
console.log(this.v);
this.count(this.v);
           // this.ordinarMethod(year,this.v);
          //  this.showResult=true;
        }
        fileReader.readAsArrayBuffer(this.file);
  }
  incomingfile2(event) 
    {
    this.file= event.target.files[0]; 
    }
    Upload2() {
      this.diagrama=true;
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            this.v = XLSX.utils.sheet_to_json(worksheet,{raw:true});
console.log(this.v);
this.count2(this.v);
           // this.ordinarMethod(year,this.v);
          //  this.showResult=true;
        }
        fileReader.readAsArrayBuffer(this.file);
  }
count(data){
let o={};
for(let i=0;i<Object.keys(data[0]).length;i++){
  let element = Object.keys(data[0])[i]
  o={
    "age": element ,
    "male": data[0][i],
    "female":data[1][i]
  }
  this.array.push(o);
}
this.create(this.array)
}
count2(data){
  let o={};
  let chart = am4core.create("chart", am4charts.XYChart);
  for(let i=0;i<Object.keys(data[0]).length;i++){
    let element = Object.keys(data[0])[i];
        o ={
      "name": element,
      "points": data[0][element],
       "color": chart.colors.next(),
      "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
  };
  this.all_of_people=this.all_of_people+o['points'];
    this.array.push(o);
  }
  this.part_of_people=this.array.map((el)=>{
return (el.points/this.all_of_people)*100;
  })
  this.generakKoeficient=(this.array[0].points+this.array[2].points)/this.array[1].points*1000;
  this.childKoeficient=this.array[0].points/this.array[1].points*1000;
  this.oldKoeficient=this.array[2].points/this.array[1].points*1000;
 this.create2(this.array);
  }
create(data){
  am4core.useTheme(am4themes_animated);
// Themes end

let mainContainer = am4core.create("chartdiv", am4core.Container);
mainContainer.width = am4core.percent(100);
mainContainer.height = am4core.percent(100);
mainContainer.layout = "horizontal";

let usData =data;

let maleChart = mainContainer.createChild(am4charts.XYChart);
maleChart.paddingRight = 0;
maleChart.data = JSON.parse(JSON.stringify(usData));

// Create axes
let maleCategoryAxis = maleChart.yAxes.push(new am4charts.CategoryAxis());
maleCategoryAxis.dataFields.category = "age";
maleCategoryAxis.renderer.grid.template.location = 0;
//maleCategoryAxis.renderer.inversed = true;
maleCategoryAxis.renderer.minGridDistance = 15;

let maleValueAxis = maleChart.xAxes.push(new am4charts.ValueAxis());
maleValueAxis.renderer.inversed = true;
maleValueAxis.min = 0;
maleValueAxis.max = 10;
maleValueAxis.strictMinMax = true;

maleValueAxis.numberFormatter = new am4core.NumberFormatter();
maleValueAxis.numberFormatter.numberFormat = "#.#'%'";

// Create series
let maleSeries = maleChart.series.push(new am4charts.ColumnSeries());
maleSeries.dataFields.valueX = "male";
maleSeries.dataFields.valueXShow = "percent";
maleSeries.calculatePercent = true;
maleSeries.dataFields.categoryY = "age";
maleSeries.interpolationDuration = 1000;
maleSeries.columns.template.tooltipText = "Males, age{categoryY}: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
//maleSeries.sequencedInterpolation = true;


let femaleChart = mainContainer.createChild(am4charts.XYChart);
femaleChart.paddingLeft = 0;
femaleChart.data = JSON.parse(JSON.stringify(usData));

// Create axes
let femaleCategoryAxis = femaleChart.yAxes.push(new am4charts.CategoryAxis());
femaleCategoryAxis.renderer.opposite = true;
femaleCategoryAxis.dataFields.category = "age";
femaleCategoryAxis.renderer.grid.template.location = 0;
femaleCategoryAxis.renderer.minGridDistance = 15;

let femaleValueAxis = femaleChart.xAxes.push(new am4charts.ValueAxis());
femaleValueAxis.min = 0;
femaleValueAxis.max = 10;
femaleValueAxis.strictMinMax = true;
femaleValueAxis.numberFormatter = new am4core.NumberFormatter();
femaleValueAxis.numberFormatter.numberFormat = "#.#'%'";
femaleValueAxis.renderer.minLabelPosition = 0.01;

// Create series
let femaleSeries = femaleChart.series.push(new am4charts.ColumnSeries());
femaleSeries.dataFields.valueX = "female";
femaleSeries.dataFields.valueXShow = "percent";
femaleSeries.calculatePercent = true;
femaleSeries.fill = femaleChart.colors.getIndex(4);
femaleSeries.stroke = femaleSeries.fill;
//femaleSeries.sequencedInterpolation = true;
femaleSeries.columns.template.tooltipText = "Females, age{categoryY}: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
femaleSeries.dataFields.categoryY = "age";
femaleSeries.interpolationDuration = 1000;

}
create2(data){
  am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("chart", am4charts.XYChart);

// Add data
chart.data = data;

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "name";
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 30;
categoryAxis.renderer.inside = true;
categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
categoryAxis.renderer.labels.template.fontSize = 20;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.strokeDasharray = "4,4";
valueAxis.renderer.labels.template.disabled = true;
valueAxis.min = 0;

// Do not crop bullets
chart.maskBullets = false;

// Remove padding
chart.paddingBottom = 0;

// Create series
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "points";
series.dataFields.categoryX = "name";
series.columns.template.propertyFields.fill = "color";
series.columns.template.propertyFields.stroke = "color";
series.columns.template.column.cornerRadiusTopLeft = 15;
series.columns.template.column.cornerRadiusTopRight = 15;
series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/b]";

// Add bullets
let bullet = series.bullets.push(new am4charts.Bullet());
let image = bullet.createChild(am4core.Image);
image.horizontalCenter = "middle";
image.verticalCenter = "bottom";
image.dy = 20;
image.y = am4core.percent(100);
image.propertyFields.href = "bullet";
image.tooltipText = series.columns.template.tooltipText;
image.propertyFields.fill = "color";
image.filters.push(new am4core.DropShadowFilter());
}
}

