import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {  DialogOverviewExampleComponent  } from '../../shared/component/dialog-overview-example/dialog-overview-example.component';
import {  MethodComponentShortComponent} from '../../shared/component/short-method/method-component-short.component';
@Component({
  selector: 'app-short-term',
  templateUrl: './short-term.component.html',
  styleUrls: ['./short-term.component.scss']
})
export class ShortTermComponent implements OnInit {

  constructor(public dialog: MatDialog) {
    this.openDialog();

   }
  arrayBuffer:any;
  file:File;
  public year;
  public v;
  public showResult=false;
  public new_ar=[];
  public average:Number;
  public data=[];
  public between;
  public componen=false;
  public ordinar=false;
  public data_tosend;
  public years=[
    {value:1},{value:2},{value:3},{value:4},{value:5},{value:6},{value:7},{value:8},{value:9},{value:10}]
  incomingfile(event) 
    {
    this.file= event.target.files[0]; 
    }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    //  this.animal = result;
    });
  }
  componentMethod(year,data){
    this.componen=true;
    this.data_tosend=data;
  }
  ordinarMethod(year){
    this.ordinar=true; 
  }
  Upload(year) {
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
         // this.count(year,this.v);    
          if(this.ordinar){
            this.count(year,this.v);  
          }
         else{
          this.componentMethod(year,this.v);
         } 
          this.showResult=true;
      }
      fileReader.readAsArrayBuffer(this.file);
}
/* Chart code */
// Themes begin
public count(year,data){
  let k;
  data.forEach(element => {
    k = Object.keys(element).map(i =>{ 
      return {'year':i,'value':element[i]}}
     );
  });
  this.between=k[1].year-k[0].year;
  for(let i=0;i<k.length;i++){
    this.new_ar.push(k[i])
  }
  console.log(this.new_ar);
  let n = 0;
  let i = this.new_ar.length-3;

  while(n<this.year+1){
    let o ={};
    if(i===this.new_ar.length-2){
      o={
        'year': +this.new_ar[i+1].year+this.between+'',
        'value':Math.round(this.new_ar[i-1].average+1/3*(this.new_ar[i].value-this.new_ar[i-1].value))
    
      }
      this.new_ar.push(o);
      this.new_ar[i].average=(this.new_ar[i].value+this.new_ar[i-1].value+this.new_ar[i+1].value)/3;
      i++;
    }
      else {
        this.new_ar[i].average=(this.new_ar[i].value+this.new_ar[i-1].value+this.new_ar[i+1].value)/3;
        i++;
      }

      // this.new_ar[i+1].year=''+ (+this.new_ar[i].year+1);
      // this.new_ar[i+1].value=this.new_ar[i].average+1/3*(this.new_ar[i].value-this.new_ar[i-1].value)
    n++;
    
  }
 // this.data.push(data);
// this.new_ar.slice(this.new_ar.length-1-10);
 this.data.push(this.new_ar);
  console.log('jjj',this.data);
  this.create();      
}
public create(){

am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("chartdiv", am4charts.XYChart);
chart.paddingRight = 20;

// Add data
chart.data=this.new_ar;

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.minGridDistance = 50;
categoryAxis.renderer.grid.template.location = 0.5;
categoryAxis.startLocation = 0.5;
categoryAxis.endLocation = 0.5;

// Pre zoom
chart.events.on("datavalidated", function () {
  categoryAxis.zoomToIndexes(Math.round(chart.data.length * 0.4), Math.round(chart.data.length * 0.55));
});

// Create value axis
let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.baseValue = 0;

// Create series
let series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value";
series.dataFields.categoryX = "year";
series.strokeWidth = 3;
series.tensionX = 0.8;

let bullet = series.bullets.push(new am4charts.CircleBullet());
bullet.strokeWidth = 0;

bullet.adapter.add("fill", function(fill, target) {
  let values = target.dataItem.values;
  
  return values.valueY.value >= 0
    ? am4core.color("red")
    : fill;
});

let range = valueAxis.createSeriesRange(series);
range.value = 0;
range.endValue = 1000;
range.contents.stroke = am4core.color("#FF0000");
range.contents.fill = range.contents.stroke;

// Add scrollbar
let scrollbarX = new am4charts.XYChartScrollbar();
scrollbarX.series.push(series);
chart.scrollbarX = scrollbarX;

}
}