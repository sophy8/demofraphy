import { Component, OnInit, Input,EventEmitter,  Output } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
@Component({
  selector: 'app-method-component-long',
  templateUrl: './method-component-long.component.html',
  styleUrls: ['./method-component-long.component.scss']
})
export class MethodComponentLongComponent implements OnInit {
@Input() data;
public migration=[];
public people=[];
public death=[];
public birth=[];
public new_ar=[];
public between;
public array=[];
public showResult=false;
constructor() { }

  ngOnInit() {
    console.log(this.data);
    this.transformation();
  }

transformation(){
 this.migration = Object.keys(this.data[1]).map(i=>{
   return {'year':i,'value':this.data[1][i]}
 });
 this.people = Object.keys(this.data[0]).map(i=>{
  return {'year':i,'value':this.data[0][i]}
});
this.birth = Object.keys(this.data[2]).map(i=>{
  return {'year':i,'value':this.data[2][i]}
});
this.death = Object.keys(this.data[3]).map(i=>{
  return {'year':i,'value':this.data[3][i]}
});
}
count(data,year){
  this.between=data[1].year-data[0].year;
  let decada = this.between/10;
  console.log(data)
  // for(let i=0;i<data.length;i++){
  //   data.push(data[i])
  // }
  let n = 0;
  let i = data.length-1;

  while(n<(year-1)/this.between){
    let o ={};
    let x = data[i].value - data[i-1].value;
    data[i].x = x;
    let y = data[i-1].x?data[i].x - data[i-1].x:data[i].x-0;
    data[i].y = y;
    data[i].x_aver = data[i-1].x?(data[i].x+data[i-1].x)/2:(data[i].x)/2;
    data[i].y_aver = data[i-1].y?(data[i].y+data[i-1].y)/2:(data[i].y)/2;
    if(i===data.length-1){
      o={
        'year': +data[i].year+this.between+'',
        'value':Math.round(data[i].value+decada*data[i].x_aver+(decada*(decada+1)/2)*data[i].y_aver)
    
      }
      data.push(o);
      i++;
    }
    n++;
}

}
prediction(){
this.count(this.people,10);
this.count(this.migration,10);
this.count(this.birth,10);
this.count(this.death,10);
this.array=[];
for(let i =0;i<this.people.length;i++){
let o ={
  'year': this.people[i].year,
  'value':this.people[i].value+this.migration[i].value+this.birth[i].value-this.death[i].value
}
this.array.push(o);
}
this.draw(this.array);
this.showResult=true;
}
draw(data){
  am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  let chart = am4core.create("component", am4charts.XYChart);
  chart.paddingRight = 20;
  
  // Add data
  chart.data=data;
  
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
