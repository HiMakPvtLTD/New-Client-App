"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[963],{5963:(z,S,c)=>{c.r(S),c.d(S,{default:()=>Q});var D=c(6814),y=c(7818),P=c(9299),g=c(6223),T=c(8193),_=c(5619),C=c(3185),b=c(8837),A=c(6655),M=c(6990),I=c.n(M),a=c(9468),E=c(5399),O=c(4143),v=c(8672),F=c(7635),w=c(8642),R=c(6686),j=c(7911),V=c(220),Z=c(4270);const L=["startDatePicker"],U=["endDatePicker"];function k(l,h){if(1&l){const i=a.EpF();a.TgZ(0,"div",23),a._uU(1),a.TgZ(2,"span",24),a.NdJ("click",function(){const n=a.CHM(i).$implicit,t=a.oxw();return a.KtG(t.removeVariableTag(n))}),a._UZ(3,"i",25),a.qZA()()}if(2&l){const i=h.$implicit,s=a.oxw();a.xp6(1),a.hij(" ",s.getTagValue(i)," ")}}function K(l,h){if(1&l){const i=a.EpF();a.TgZ(0,"div",23),a._uU(1),a.TgZ(2,"span",24),a.NdJ("click",function(){const n=a.CHM(i).$implicit,t=a.oxw();return a.KtG(t.removenAlogVariableIdsTag(n))}),a._UZ(3,"i",25),a.qZA()()}if(2&l){const i=h.$implicit,s=a.oxw();a.xp6(1),a.hij(" ",s.getAnalogTagValue(i)," ")}}function B(l,h){if(1&l){const i=a.EpF();a.TgZ(0,"div",23),a._uU(1),a.TgZ(2,"span",24),a.NdJ("click",function(){const n=a.CHM(i).$implicit,t=a.oxw();return a.KtG(t.removeAmbientVariableIdsTag(n))}),a._UZ(3,"i",25),a.qZA()()}if(2&l){const i=h.$implicit,s=a.oxw();a.xp6(1),a.hij(" ",s.getAmbientTagValue(i)," ")}}function Y(l,h){if(1&l&&(a.TgZ(0,"option",31),a._uU(1),a.qZA()),2&l){const i=h.$implicit;a.Q6J("value",i.ChartId),a.xp6(1),a.hij("",i.ChartName," ")}}function N(l,h){if(1&l){const i=a.EpF();a.TgZ(0,"div",15)(1,"div",5)(2,"label"),a._uU(3,"Chart Type"),a.qZA()(),a.TgZ(4,"div",26)(5,"select",27),a.NdJ("ngModelChange",function(e){a.CHM(i);const n=a.oxw();return a.KtG(n.chartId=e)})("change",function(){a.CHM(i);const e=a.oxw();return a.KtG(e.changeChartType())}),a.YNc(6,Y,2,2,"option",28),a.qZA()(),a.TgZ(7,"div",26)(8,"button",29),a.NdJ("click",function(){a.CHM(i);const e=a.oxw();return a.KtG(e.generateChart())}),a._UZ(9,"i",30),a._uU(10," Apply "),a.qZA()()()}if(2&l){const i=a.oxw();a.xp6(5),a.Q6J("ngModel",i.chartId),a.xp6(1),a.Q6J("ngForOf",i.chartList)}}function H(l,h){if(1&l&&(a.TgZ(0,"option",34),a._uU(1),a.qZA()),2&l){const i=h.$implicit;a.Q6J("value",i.id),a.xp6(1),a.hij(" ",i.value," ")}}function W(l,h){if(1&l){const i=a.EpF();a.TgZ(0,"div",26)(1,"select",32),a.NdJ("ngModelChange",function(e){a.CHM(i);const n=a.oxw();return a.KtG(n.gram=e)}),a.YNc(2,H,2,2,"option",33),a.qZA()()}if(2&l){const i=a.oxw();a.xp6(1),a.Q6J("ngModel",i.gram),a.xp6(1),a.Q6J("ngForOf",i.dropvalues)}}const J=function(){return["admin"]},$=function(){return{width:"100%",height:"430px"}};let Q=(()=>{class l{constructor(i,s,e,n,t,r,o){this.modalService=i,this.dataAnalyticsService=s,this.spinner=e,this.authService=n,this.route=t,this.idleTimerService=r,this.toastService=o,this.toppings=new g.NI(""),this.toppingList=["Extra cheese","Mushroom","Onion","Pepperoni","Sausage","Tomato"],this.tempvariable=[],this.uid="",this.dropvalues=[{id:"5 min",value:"5 Minutes"},{id:"10 min",value:"10 Minutes"},{id:"15 min",value:"15 Minutes"},{id:"30 min",value:"30 Minutes"},{id:"1 hour",value:"1 Hour"},{id:"3 hour",value:"3 Hours"}],this.aggregate=!1,this.chartList=[],this.chartData={},this.width="600",this.height="400",this.dataFormat="json",this.showChart=!1,this.filterData={productId:"",testRunId:"",variableIds:[],IotPanelId:"",analogVariableIds:[],ambientVariableIds:[]},this.aodd=[],this.eodd=[],this.analogVariableList=[],this.ambientVariableList=[],this.items=[],this.tags=[],this.tagInputControl=new g.NI,this.projectChartDataStatus=new _.X(!1),this.analogChartDataStatus=new _.X(!1),this.ambientChartDataStatus=new _.X(!1);const d=this.authService.getFullNameFromToken();this.uid=d.uid}removeVariableTag(i){this.filterData.variableIds="SelectAll"==i?[]:this.filterData.variableIds.filter(s=>s!==i)}removenAlogVariableIdsTag(i){this.filterData.analogVariableIds=this.filterData.analogVariableIds.filter(s=>s!==i)}removeAmbientVariableIdsTag(i){this.filterData.ambientVariableIds="SelectAll"==i?[]:this.filterData.ambientVariableIds.filter(s=>s!==i)}ngOnInit(){this.idleTimerService.setupIdle(),this.idleTimerService.resetIdleTimer(),this.chartList=[{ChartId:"line",ChartName:"Trend"},{ChartId:"column",ChartName:"Bar"},{ChartId:"area",ChartName:"Area"},{ChartId:"scatter",ChartName:"Scatter"}],this.chartId=this.chartList[0].ChartId,this.gram=this.dropvalues[0].id,this.type=this.chartId,this.dataSource={};const s=new Date,e=new Date;e.setMonth(e.getMonth()-1),this.endDate=s,this.startDate=e,this.startDate={year:this.startDate.getFullYear(),month:this.startDate.getMonth()+1,day:this.startDate.getDate()},this.endDate={year:this.endDate.getFullYear(),month:this.endDate.getMonth()+1,day:this.endDate.getDate()};const t=new Intl.DateTimeFormat("en-GB",{hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),r=new Date;this.jsEndDate=r;const o=t.format(r),d=new Date;this.jsStartDate=d,d.setDate(d.getDate()-1);const p=t.format(d);this.formattedDateTimeRange=p+" - "+o,this.projectChartDataStatus.subscribe(()=>{this.projectChartDataStatus.value&&this.analogChartDataStatus.value&&this.ambientChartDataStatus.value&&(this.changeChart(),this.changeChart())}),this.analogChartDataStatus.subscribe(()=>{this.projectChartDataStatus.value&&this.analogChartDataStatus.value&&this.ambientChartDataStatus.value&&(this.changeChart(),this.changeChart())}),this.ambientChartDataStatus.subscribe(()=>{this.projectChartDataStatus.value&&this.analogChartDataStatus.value&&this.ambientChartDataStatus.value&&(this.changeChart(),this.changeChart())})}getTagValue(i){let s;return s="EODD"==this.projectType?this.eodd.find(e=>e.id==i):this.aodd.find(e=>e.id==i),s?.name}getAnalogTagValue(i){return this.analogVariableList.find(s=>s.VariableId==i)?.VariableName}getAmbientTagValue(i){return this.ambientVariableList.find(s=>s.VariableId==i)?.VariableName}onDropDownClose(){}onItemSelect(i){}onSelectAll(i){}onClickchage(i){this.aggregate=i.target.checked,0==this.aggregate&&(this.gram=this.dropvalues[0].id)}changeChartType2(){}openModal(){const e={startDate:this.jsStartDate,endDate:this.jsEndDate,filterData:this.filterData,projectType:this.projectType,dataType:"normal"},n=this.modalService.open(P.Z,{size:"lg"});n.componentInstance.inputData=e,n.result.then(t=>{1==t.isSearch&&(this.filterData=t.filterData,""!=this.filterData.productId&&(this.filterData.ambientVariableIds=this.filterData.ambientVariableIds.filter(r=>"SelectAll"!=r)),this.filterData.productId.length>1&&this.filterData.ambientVariableIds.length>0&&(this.filterData.ambientVariableIds.map(r=>{const o=r;this.filterData.variableIds.push(r),null!=o&&null!=o&&(this.tags.includes(o)||this.tags.push(o))}),this.filterData.ambientVariableIds=[]),this.ambientVariableData=t.ambientVariableData,this.filterData.analogVariableIds.forEach(r=>{const o=r;this.tags.includes(o)||this.tags.push(o)}),this.filterData.variableIds.forEach(r=>{const o=r;this.tags.includes(o)||this.tags.push(o)}),this.filterData.ambientVariableIds.forEach(r=>{const o=r;null!=o&&null!=o&&(this.tags.includes(o)||this.tags.push(o))}),this.aodd=t.aodd,this.eodd=t.eodd,this.projectType=t.projectType,this.analogVariableList=t.analogVariableList,this.ambientVariableList=t.ambientVariableList)},t=>{console.log(`Modal dismissed with: ${t}`)})}openDateTimeModal(){const e={startDate:this.jsStartDate,endDate:this.jsEndDate},n=this.modalService.open(T.Z);n.componentInstance.inputData=e,n.result.then(t=>{const o=new Intl.DateTimeFormat("en-GB",{hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),d=new Date(t.dateData.startDate.year,t.dateData.startDate.month-1,t.dateData.startDate.day,t.dateData.startTime.hour,t.dateData.startTime.minute,0),p=o.format(d),m=new Date(t.dateData.endDate.year,t.dateData.endDate.month-1,t.dateData.endDate.day,t.dateData.endTime.hour,t.dateData.endTime.minute,0),u=o.format(m);this.formattedDateTimeRange=p+" - "+u,this.jsStartDate=(0,D.p6)(d,"YYYY-MM-dd HH:mm:ss","en_US"),this.jsEndDate=(0,D.p6)(m,"YYYY-MM-dd HH:mm:ss","en_US")},t=>{console.log(`Modal dismissed with: ${t}`)})}generateChart(){this.showChart=!1,this.spinner.show();const i=this.filterData,s=this.jsStartDate,e=this.jsEndDate;let n={};if(""==i.productId&&0==i.variableIds.length)n={start:s,end:e};else if(""==i.productId&&i.variableIds.length>0)n={start:s,end:e,data:i.variableIds};else if(""!=i.productId&&0==i.variableIds.length)n={start:s,end:e,id:i.productId,no:i.testRunId};else if(""!=i.productId&&i.variableIds.length>0){n={start:s,end:e,id:i.productId,no:parseInt(i.testRunId),data:i.variableIds},this.tempvariable="SelectAll"==i.variableIds[0]?i.variableIds.slice(1,this.filterData.variableIds.length):i.variableIds;const t=this.tempvariable.map(r=>`${r}`);n.data=t}if(i.productId&&i.variableIds.length>0?1==this.aggregate&&""!=this.gram?(n.range=this.gram,this.dataAnalyticsService.getAggregateProjectData(n).subscribe({next:t=>{console.log(t,"resssss"),0==t.length?this.toastService.show({template:"Project data Not found!!",classname:"bg-warning",delay:3e3}):(this.projectChartRawData=t,this.projectChartDataStatus.next(!0))},error:t=>{console.log(t)}})):this.dataAnalyticsService.getProjectSectionChartData(n).subscribe({next:t=>{console.log(t),this.projectChartRawData=t,this.projectChartDataStatus.next(!0)},error:t=>{console.log(t)}}):this.projectChartDataStatus.next(!0),this.filterData.analogVariableIds.length){const t={start:s,end:e};if(i.analogVariableIds.length>0){const r=i.analogVariableIds.map(o=>`${o}`);t.data=r}this.dataAnalyticsService.getAnalogSectionChartData(t).subscribe({next:r=>{this.analogChartRawData=r,this.analogChartDataStatus.next(!0)},error:r=>{console.log(r)}})}else this.analogChartDataStatus.next(!0);if(i.ambientVariableIds.length>0&&""==i.productId){const t={start:s,end:e};if(i.ambientVariableIds.length>0){const o=i.ambientVariableIds.filter(d=>"SelectAll"!=d).map(d=>`${d}`);t.data=o}1==this.aggregate&&null!=this.gram?(t.range=this.gram,this.dataAnalyticsService.getAggregateAmbientData(t).subscribe({next:r=>{console.log(r),0==r.length?(this.toastService.show({template:"Project data Not found!!",classname:"bg-warning",delay:3e3}),this.spinner.hide()):(this.ambientChartRawData=r,this.ambientChartDataStatus.next(!0))},error:r=>{console.log(r)}})):this.dataAnalyticsService.getAmbientSectionChartData(t).subscribe({next:r=>{0==r.length?(this.toastService.show({template:"Ambient data Not found!!",classname:"bg-warning",delay:3e3}),this.spinner.hide()):(this.ambientChartRawData=r,this.ambientChartDataStatus.next(!0))},error:r=>{console.log(r)}})}else this.ambientChartDataStatus.next(!0);this.getAnnotations(this.filterData.testRunId,this.filterData.productId)}changeChartType(){}getAnnotations(i,s){this.dataAnalyticsService.selectAnnotation({projectid:s,testno:i,uid:this.uid}).subscribe(e=>{this.annotations=e,this.changeChart()})}changeChart(){const i=0==this.aggregate?"":this.gram,s={chart:{caption:"",yaxisname:"",subcaption:"",showhovereffect:"1",numbersuffix:"",drawcrossline:"",plottooltext:"",theme:"fusion"},xAxis:{outputTimeFormat:{hour:"%H:%M:%S",minute:"%H:%M:%S",second:"%H:%M:%S"}},categories:[{category:[]}],dataset:[],dataLabels:{enabled:!1}};if(Array.isArray(this.projectChartRawData)&&this.filterData.variableIds.length&&this.projectChartRawData.length>0&&(this.projectChartRawData.forEach(e=>{s.categories[0].category.push({label:e.DateTime})}),this.tempvariable.forEach(e=>{const n=e,t=[];this.projectChartRawData.forEach(o=>{const d=""!=i?o.Interval:o.DateTime,p={projectid:o.ProjectId,testno:+o.TestNo,paraname:b[4][n],paratimestamp:this.formatDate(new Date(o.DateTime))},m=this.checkExistObject(p),u={x:new Date(d),y:o[e],click:function(x){const f=document.querySelector(".open-annotation");f.dataset.seriesName=x.dataSeries.name,f.dataset.x=x.dataPoint.x,m?(f.dataset.anid=m.anid,f.dataset.remark=m.remark):(f.dataset.anid="",f.dataset.remark=""),f.click()}};m&&(u.indexLabel=m.remark,u.indexLabelMaxWidth="100",u.markerType="triangle",u.markerSize=20),t.push(u)}),s.dataset.push({name:b[4][n],type:this.chartId,showInLegend:!0,dataPoints:t,visible:1})})),this.analogChartRawData&&this.analogChartRawData.length){const n=[];Object.keys(this.analogChartRawData[0]).map(t=>{"DateTime"!=t&&n.push({name:t,type:this.chartId,showInLegend:!0,dataPoints:[],visible:1})}),this.analogChartRawData.map(t=>{Object.keys(t).map(r=>{const o=n.find(d=>d.name==r);o&&o.dataPoints.push({x:new Date(t.DateTime),y:t[r]})})}),n.map(t=>{s.dataset.push(t)})}this.filterData.ambientVariableIds.length&&this.ambientChartRawData.length>0&&this.filterData.ambientVariableIds.filter(n=>"SelectAll"!=n).forEach(n=>{const t=n,r=[];this.ambientChartRawData.forEach(d=>{const m={x:new Date(""!=i?d.Interval:d.DateTime),y:d[n]};r.push(m)}),s.dataset.push({name:b[5][t],type:this.chartId,showInLegend:!0,dataPoints:r,visible:1})}),this.type=this.chartId,this.dataSource=s,this.chartOptions={zoomEnabled:!0,animationEnabled:!0,theme:"light2",title:{text:""},axisX:{valueFormatString:"DD/MM/YYYY HH:mm:ss",labelFontSize:11},axisY:{title:"Value",suffix:"",labelFontSize:11},toolTip:{shared:!0,content:function(e){let n="";n+=(0,D.p6)(e.entries[0].dataPoint.x,"dd/MM/YYYY HH:mm:ss","en_US")+"<br/><br/>";for(let t=0;t<e.entries.length;t++)n+="LabAirQualityPM2_5"==e.entries[t].dataSeries.name||"LabAirQualityPM10"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(1)+" (\xb5g/m3)<br/>":"VOC"==e.entries[t].dataSeries.name||"Humidity"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(1)+" (%)<br/>":"Pump RPM"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (RPM)<br/>":"Motor AMP"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (A)<br/>":"Discharge Press PV"==e.entries[t].dataSeries.name||"Discharge Press SP"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (BAR)<br/>":"Discharge Flow"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (LPH)<br/>":"Motor KW"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (KW)<br/>":"Stroke Rate"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (SCPM)<br/>":"Inlet Air Press. PV"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (BAR)<br/>":"Inlet Air Press. SP"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (%)<br/>":"PM2.5"==e.entries[t].dataSeries.name||"PM10"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(1)+" (\xb5g/m3)<br/>":"VOC"==e.entries[t].dataSeries.name||"Humidity"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(1)+" (%)<br/>":"Pump RPM"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (RPM)<br/>":"Motor Current"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (A)<br/>":"Discharge Press PV"==e.entries[t].dataSeries.name||"Discharge Press SP"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (BAR)<br/>":"Discharge Flow"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (LPM)<br/>":"Motor Power"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (KW)<br/>":"Stroke Rate"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (SCPM)<br/>":"Inlet Air Press PV"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (BAR)<br/>":"Air Valve Output"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (%)<br/>":"PumpRPM"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (RPM)<br/>":"Discharge Control Valve Cmd"==e.entries[t].dataSeries.name||"Discharge Control Valve Position"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (%)<br/>":"Suction Pressure"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (BAR)<br/>":"Gravimetric Flow"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (kG/Min)<br/>":"Gravimetric Weight"==e.entries[t].dataSeries.name||"WeightScaleRead"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (Kg)<br/>":"MotorAMP"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (A)<br/>":"Discharge Pressure"==e.entries[t].dataSeries.name||"Discharge Pressure Setpoint"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (BAR)<br/>":"DischargeFlow"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (LPM)<br/>":"MotorKW"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (KW)<br/>":"MotorKWH"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (kWh)<br/>":"Test Stroke Count"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+"<br/>":"Motor Energy"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+"(kWh)<br/>":"Motor Speed Setpoint"==e.entries[t].dataSeries.name||"Actual Motor Speed"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+"(Hz)<br/>":"Stroke Count Rate"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (SCPM)<br/>":"In Air Pressure"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+"<br/>":"Air Valve Output"==e.entries[t].dataSeries.name?e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(2)+" (%)<br/>":e.entries[t].dataSeries.name+": "+e.entries[t].dataPoint.y.toFixed(1)+" (\xb0C)<br/>";return n}},legend:{cursor:"pointer",itemclick:function(e){e.dataSeries.visible=!(typeof e.dataSeries.visible>"u"||e.dataSeries.visible),e.chart.render()}},data:s.dataset},this.spinner.hide(),this.showChart=!0}handleAnnotationModal(i){const s=i.target,{seriesName:e,x:n,anid:t,remark:r}=s.dataset,o={projectid:this.filterData.productId,testno:this.filterData.testRunId,paraname:e,paratimestamp:this.formatDate(new Date(n)),createdbyuid:this.uid,createdbydate:this.formatDate(new Date),updatedbyid:this.uid,updatedbydate:this.formatDate(new Date),anid:t,remark:r},d=this.modalService.open(A.c,{size:"lg"});d.componentInstance.inputData=o,d.result.then(()=>{this.getAnnotations(this.filterData.testRunId,this.filterData.productId),this.changeChart(),this.changeChart()},()=>{this.getAnnotations(this.filterData.testRunId,this.filterData.productId),this.changeChart()})}getCurrentDateTime(){return this.formatDate(new Date)}formatDate(i){return`${i.getFullYear()}-${this.padZero(i.getMonth()+1)}-${this.padZero(i.getDate())}T${this.padZero(i.getHours())}:${this.padZero(Math.abs(i.getMinutes()))}:${this.padZero(i.getSeconds())}.000Z`}padZero(i){return i<10?`0${i}`:`${i}`}checkExistObject(i){if(!this.annotations)return"";let s;return this.annotations.some(e=>{var{projectid:n,testno:t,paratimestamp:r,paraname:o}=e;const d={projectid:n,testno:t,paratimestamp:r,paraname:o};I().isEqual(i,d)&&(s=e)}),s}static#t=this.\u0275fac=function(s){return new(s||l)(a.Y36(E.FF),a.Y36(O._),a.Y36(v.t2),a.Y36(F.u),a.Y36(w.gz),a.Y36(R.p),a.Y36(j.k))};static#e=this.\u0275cmp=a.Xpm({type:l,selectors:[["app-data-analytics-time"]],viewQuery:function(s,e){if(1&s&&(a.Gf(L,5),a.Gf(U,5)),2&s){let n;a.iGM(n=a.CRH())&&(e.startDatePicker=n.first),a.iGM(n=a.CRH())&&(e.endDatePicker=n.first)}},standalone:!0,features:[a.jDz],decls:35,vars:13,consts:[["type","ball-scale-multiple"],[1,"row","btn-page"],[1,"col-sm-12"],[1,"custom-card",3,"customHeader"],[1,"form-group","row"],[1,"col-md-3"],[1,"col-md-9"],[1,"custom-datetime-range-span",3,"click"],[1,"fas","fa-calendar"],[1,"col-md-9","disp-flex"],["type","button","ngbAutofocus","",1,"btn","btn-outline-secondary","tag-btn",3,"click"],[1,"fas","fa-plus"],[1,"tag-input"],["class","tag",4,"ngFor","ngForOf"],["class","form-group row align-items-center",4,"appHasRoles"],[1,"form-group","row","align-items-center"],[1,"col-md-3","d-flex"],[1,"mt-3"],["type","checkbox",3,"ngModel","ngModelChange","change"],["class","col-md-2",4,"ngIf"],["cardTitle","Basic",3,"hidden"],["id","chartContainer",3,"options","styles"],["data-ss","sda",1,"open-annotation","d-none",3,"click"],[1,"tag"],[1,"remove",3,"click"],[1,"fas","fa-times"],[1,"col-md-2"],[1,"form-control",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],["type","button","ngbAutofocus","",1,"btn","btn-block","btn-primary","btn-apply","mb-4","custom-btn",3,"click"],[1,"fas","fa-check"],[3,"value"],[1,"form-control",3,"ngModel","ngModelChange"],["class","",3,"value",4,"ngFor","ngForOf"],[1,"",3,"value"]],template:function(s,e){1&s&&(a._UZ(0,"ngx-spinner",0),a.TgZ(1,"div",1)(2,"div",2)(3,"app-card",3)(4,"div",4)(5,"div",5)(6,"label"),a._uU(7,"Data Source & Analysis Tool"),a.qZA()(),a.TgZ(8,"div",6)(9,"span",7),a.NdJ("click",function(){return e.openDateTimeModal()}),a._UZ(10,"i",8),a._uU(11),a.qZA()()(),a.TgZ(12,"div",4)(13,"div",5)(14,"label"),a._uU(15,"Selected Tags"),a.qZA()(),a.TgZ(16,"div",9)(17,"button",10),a.NdJ("click",function(){return e.openModal()}),a._uU(18," Add Tags "),a._UZ(19,"i",11),a.qZA(),a.TgZ(20,"div",12),a.YNc(21,k,4,1,"div",13),a.YNc(22,K,4,1,"div",13),a.YNc(23,B,4,1,"div",13),a.qZA()()(),a.YNc(24,N,11,2,"div",14),a.TgZ(25,"div",15)(26,"div",16)(27,"p",17),a._uU(28,"Data Aggregate:"),a.qZA(),a._uU(29,"\xa0\xa0"),a.TgZ(30,"input",18),a.NdJ("ngModelChange",function(t){return e.aggregate=t})("change",function(t){return e.onClickchage(t)}),a.qZA()(),a.YNc(31,W,3,2,"div",19),a.qZA()(),a.TgZ(32,"app-card",20),a._UZ(33,"canvasjs-chart",21),a.TgZ(34,"button",22),a.NdJ("click",function(t){return e.handleAnnotationModal(t)}),a.qZA()()()()),2&s&&(a.xp6(3),a.Q6J("customHeader",!0),a.xp6(8),a.hij(" ",e.formattedDateTimeRange," "),a.xp6(10),a.Q6J("ngForOf",e.filterData.variableIds),a.xp6(1),a.Q6J("ngForOf",e.filterData.analogVariableIds),a.xp6(1),a.Q6J("ngForOf",e.filterData.ambientVariableIds),a.xp6(1),a.Q6J("appHasRoles",a.DdM(11,J)),a.xp6(6),a.Q6J("ngModel",e.aggregate),a.xp6(1),a.Q6J("ngIf",1==e.aggregate),a.xp6(1),a.Q6J("hidden",!e.showChart),a.xp6(1),a.Q6J("options",e.chartOptions)("styles",a.DdM(12,$)))},dependencies:[D.ez,D.sg,D.O5,y.m,g.YN,g.Kr,g.Wl,g.EJ,g.JJ,g.On,V.A,Z.c,v.Ro,C.n,C.x],styles:[".bi-calendar3{margin-bottom:0}  .btn-apply{padding:2px 8px!important;margin-left:5px}  .custom-card .card{background:linear-gradient(to bottom,rgba(0,190,219,.1490196078),rgba(12,255,0,.1490196078))!important}  .custom-card .card .card-header h5,   .custom-card .card .card-header .h5{font-weight:400;font-size:12px}  .custom-card .input-group.dp .form-control{background:transparent;margin-bottom:5px;padding:0 15px;font-size:14px;line-height:.5;height:25px}  .custom-card .input-group.dp .bi-calendar3.btn{padding-bottom:0!important;padding-top:0!important}  .custom-card select.form-control{background-color:#f5f5f5;line-height:15px}  .custom-card .card .card-header{padding:10px 25px}  .custom-card .card .card-body{padding:10px 25px}  .custom-card .card .card-header .card-header-right .btn.dropdown-toggle{display:none}  .custom-card .form-group label{font-weight:400}  .custom-card .form-control{font-size:14px;line-height:1}  .custom-btn.btn{border-radius:20px;margin:5px!important}  .tag-btn{border-radius:20px;margin-bottom:5px!important;font-size:10px;padding-left:5px;padding-right:5px;margin-right:0!important;margin-top:4px}.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .card-header-right[_ngcontent-%COMP%]   .btn.dropdown-toggle[_ngcontent-%COMP%]{display:none}.tag-input[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;margin:0}.tag[_ngcontent-%COMP%]{background-color:#6c757d;color:#fff;padding:6px 8px;margin:3px 4px;display:flex;align-items:center;border-radius:20px;font-size:10px}.remove[_ngcontent-%COMP%]{cursor:pointer;margin-left:4px;font-weight:700}.disp-flex[_ngcontent-%COMP%]{display:flex}.custom-datetime-range-span[_ngcontent-%COMP%]{padding:2px 8px;border:solid 1px rgb(206,212,218);border-radius:20px}.custom-datetime-range-span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:15px}.dropdown[_ngcontent-%COMP%]{font-size:12px;justify-content:start}"]})}return l})()}}]);