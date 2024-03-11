"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[568],{9299:(V,m,r)=>{r.d(m,{Z:()=>L});var d=r(6814),u=r(7818),h=r(8351),b=r(8856),D=r(1043),c=r(6223),a=r(9468),_=r(4143),v=r(5399);function A(o,s){if(1&o&&(a.TgZ(0,"option",32),a._uU(1),a.qZA()),2&o){const e=s.$implicit;a.Q6J("value",e.ProjectId),a.xp6(1),a.hij("",e.ProjectName," ")}}function I(o,s){if(1&o&&(a.TgZ(0,"option",32),a._uU(1),a.qZA()),2&o){const e=s.$implicit;a.Q6J("value",e.TestRunId),a.xp6(1),a.hij("",e.TestRunName," ")}}function M(o,s){if(1&o&&(a.TgZ(0,"option",33),a._uU(1),a.qZA()),2&o){const e=s.$implicit,i=a.oxw();a.Q6J("value",e.VariableId)("disabled",i.isDisabled(e.VariableId)),a.xp6(1),a.hij("",e.VariableName," ")}}function P(o,s){if(1&o){const e=a.EpF();a.TgZ(0,"div",34),a._uU(1),a.TgZ(2,"span",35),a.NdJ("click",function(){const n=a.CHM(e).$implicit,l=a.oxw();return a.KtG(l.removeProjectVariableTag(n))}),a._UZ(3,"i",31),a.qZA()()}if(2&o){const e=s.$implicit,i=a.oxw();a.xp6(1),a.hij(" ",i.getTagValue(e)," ")}}function C(o,s){if(1&o&&(a.TgZ(0,"option",33),a._uU(1),a.qZA()),2&o){const e=s.$implicit,i=a.oxw();a.Q6J("value",e.IotPanelId)("disabled",i.isDisabledIotPanel(e.IotPanelId)),a.xp6(1),a.hij("",e.IotPanelName," ")}}function Z(o,s){if(1&o&&(a.TgZ(0,"option",33),a._uU(1),a.qZA()),2&o){const e=s.$implicit,i=a.oxw();a.Q6J("value",e.VariableId)("disabled",i.isDisabledAnalog(e.VariableId)),a.xp6(1),a.hij(" ",e.VariableName," ")}}function y(o,s){if(1&o){const e=a.EpF();a.TgZ(0,"div",34),a._uU(1),a.TgZ(2,"span",35),a.NdJ("click",function(){const n=a.CHM(e).$implicit,l=a.oxw();return a.KtG(l.removeAnalogVariableTag(n))}),a._UZ(3,"i",31),a.qZA()()}if(2&o){const e=s.$implicit,i=a.oxw();a.xp6(1),a.hij(" ",i.getAnalogTagValue(e)," ")}}function j(o,s){if(1&o&&(a.TgZ(0,"option",33),a._uU(1),a.qZA()),2&o){const e=s.$implicit,i=a.oxw();a.Q6J("value",e.VariableId)("disabled",i.isDisabledAmbient(e.VariableId)),a.xp6(1),a.hij("",e.VariableName," ")}}function O(o,s){if(1&o){const e=a.EpF();a.TgZ(0,"div",34),a._uU(1),a.TgZ(2,"span",35),a.NdJ("click",function(){const n=a.CHM(e).$implicit,l=a.oxw();return a.KtG(l.removeAmbientVariableTag(n))}),a._UZ(3,"i",31),a.qZA()()}if(2&o){const e=s.$implicit,i=a.oxw();a.xp6(1),a.hij(" ",i.getAmbientTagValue(e)," ")}}let L=(()=>{class o{constructor(e,i){this.dataAnalyticsService=e,this.activeModal=i,this.label="",this.formControl=new c.NI,this.projectList=[],this.projectId="",this.testanalog=[],this.testambiant=[],this.testvariable=[],this.projectsId=[],this.testRunList=[],this.testRunId="",this.variableList=[],this.variableId="",this.IotPanelList=[],this.IotPanelId="",this.analogVariableList=[],this.analogVariableId="",this.ambientVariableList=[],this.ambientVariableId="",this.tmpAmbientVariableId=[],this.projectVariableTags=[],this.analogVariableTags=[],this.ambientVariableTags=[],this.aodd=[{id:"StrokeCount",name:"Stroke Count"},{id:"FcvSP",name:"Discharge Control Valve O/p"},{id:"FlowGrav",name:"Gravimetric Flow"},{id:"WeightScaleRead",name:"Gravimetric Weight"},{id:"DischargeFlow",name:"Discharge Flow"},{id:"StrokeCountRate",name:"Stroke Count Rate"},{id:"DischargePressureSP",name:"Discharge Pressure Setpoint"},{id:"InAirPressSP",name:"In Air Valve Output"},{id:"FcvPos",name:"Discharge Control Valve Position"},{id:"DischargePressurePV",name:"Discharge Pressure"},{id:"AoddInAirPressPV",name:"In Air Pressure"},{id:"SuctionPressurePV",name:"Suction Pressure"},{id:"LabAirQualityPM2_5",name:"PM2.5"},{id:"LabAirQualityPM10",name:"PM10"},{id:"LabAirQualityVOC",name:"VOC"},{id:"LabHumidity",name:"Humidity"},{id:"LabTemp",name:"Temperature"}],this.eodd=[{id:"MotorKWH",name:"Motor Energy"},{id:"StrokeCount",name:"Stroke Count"},{id:"FcvSP",name:"Discharge Control Valve O/p"},{id:"Act_MotorRPM",name:"Motor RPM"},{id:"MotorAMP",name:"Motor Current"},{id:"MotorKW",name:"Motor Power"},{id:"DischargeFlow",name:"Discharge Flow"},{id:"FlowGrav",name:"Gravimetric Flow"},{id:"WeightScaleRead",name:"Gravimetric Weight"},{id:"Set_MotorRPM",name:"Motor Speed Setpoint"},{id:"DischargePressureSP",name:"Discharge Pressure Setpoint"},{id:"FcvPos",name:"Discharge Control Valve Position"},{id:"DischargePressurePV",name:"Discharge Pressure"},{id:"SuctionPressurePV",name:"Suction Pressure"},{id:"PumpRPM",name:"Pump RPM"},{id:"LabAirQualityPM2_5",name:"PM2.5"},{id:"LabAirQualityPM10",name:"PM10"},{id:"LabAirQualityVOC",name:"VOC"},{id:"LabHumidity",name:"Humidity"},{id:"LabTemp",name:"Temperature"}],this.singleTagSelectionNameList=["Linear Regression","Histogram Analysis","Correlation","Heatmap"]}ngOnInit(){this.inputData.projectType&&(this.projectType=this.inputData.projectType),this.projectId=this.inputData.filterData.productId,this.testRunId=this.inputData.filterData.testRunId;const i=this.inputData.endDate,t=this.inputData.filterData,n=(0,d.p6)(this.inputData.startDate,"YYYY-MM-dd HH:mm:ss","en_US"),l=(0,d.p6)(i,"YYYY-MM-dd HH:mm:ss","en_US");this.projectVariableTags=t.variableIds,this.analogVariableTags=t.analogVariableIds,this.ambientVariableTags=t.ambientVariableIds,this.dataAnalyticsService.getProjectData({fromDate:n,toDate:l}).subscribe({next:g=>{this.projectList=g.data,this.inputData.filterData.productId&&this.loadTestRun()},error:g=>{console.log(g)}}),this.IotPanelList=[{IotPanelId:"Iot Panel 1",IotPanelName:"Iot Panel 1"}],this.dataAnalyticsService.getAnalogVariableData({start:n,end:l}).subscribe({next:g=>{g.forEach(f=>{this.analogVariableList.push({VariableId:f.Data,VariableName:f.Data})})},error:g=>{console.log(g)}}),this.ambientVariableList=[{VariableId:"LabAirQualityPM2_5",VariableName:"PM2.5"},{VariableId:"LabAirQualityPM10",VariableName:"PM10"},{VariableId:"LabAirQualityVOC",VariableName:"VOC"},{VariableId:"LabHumidity",VariableName:"Humidity"},{VariableId:"LabTemp",VariableName:"Temperature"}],""!=this.projectId&&""!=this.testRunId&&(this.filtercoffee=this.inputData.filterData,this.loadVariableDatareset(this.projectType))}loadVariableDatareset(e){this.variableList=[];let i=[],t=[];"EODD"==e?(t=this.eodd.slice(0,14),i=t.filter(n=>!this.filtercoffee.variableIds.includes(n))):(t=this.aodd.slice(0,11),i=t.filter(n=>!this.filtercoffee.variableIds.includes(n))),i.forEach(n=>{this.variableList.push({VariableId:n.id,VariableName:n.name})})}getTagValue(e){let i;return i="EODD"==this.projectType?this.eodd.find(t=>t.id==e):this.aodd.find(t=>t.id==e),i?.name}getAnalogTagValue(e){return this.analogVariableList.find(i=>i.VariableId==e).VariableName}getAmbientTagValue(e){return this.ambientVariableList.find(i=>i.VariableId==e).VariableName}isDisableOption(){this.analogVariableTags.includes(this.analogVariableId),this.projectVariableTags.includes(this.variableId);const i=this.singleTagSelectionNameList.find(t=>t===this.inputData.name);return"Linear Regression"===i&&this.projectVariableTags.length>=2||"Correlation"===i&&this.projectVariableTags.length>=2||"Histogram Analysis"===i&&this.projectVariableTags.length>=1||"Heatmap"===i&&this.projectVariableTags.length>=1}isDisabled(e){return this.projectVariableTags.includes(e)}isDisabledIotPanel(e){return this.projectVariableTags.includes(e)}isDisabledAnalog(e){return this.analogVariableTags.includes(e)}isDisabledAmbient(e){return this.ambientVariableTags.includes(e)}removeProjectVariableTag(e){this.projectVariableTags=this.projectVariableTags.filter(i=>i!==e)}changeVariable(){this.projectVariableTags.push(this.variableId)}removeAnalogVariableTag(e){this.analogVariableTags=this.analogVariableTags.filter(i=>i!==e)}changeAnalogVariable(e="dummy"){this.analogVariableTags.push(this.analogVariableId)}removeAmbientVariableTag(e){this.ambientVariableTags=this.ambientVariableTags.filter(i=>i!==e)}changeAmbientVariable(){this.ambientVariableTags.push(this.ambientVariableId)}changeMatAmbientVariable(e){this.ambientVariableTags=e}handleVariableLableClick(e){e.stopPropagation()}loadVariableData(){this.variableList=[];let e=[];e="EODD"==this.projectType?this.eodd.slice(0,12):this.aodd.slice(0,11),e.forEach(i=>{this.variableList.push({VariableId:i.id,VariableName:i.name})})}changeProject(){this.testRunList=[];const e=this.projectList.find(t=>t.ProjectId===this.projectId);this.projectType=e.ProjectType,this.loadTestRun()}loadTestRun(){this.testRunList=[],this.dataAnalyticsService.getAllProjectData({fromDate:this.inputData.startDate,toDate:this.inputData.endDate}).subscribe(n=>{this.testRunList=[];const l=new Set;n.map(p=>{p.ProjectId==this.projectId&&l.add(p.TestNo)}),l.forEach(p=>{this.testRunList.unshift({TestRunId:p,TestRunName:"Test Run "+p})})})}changeTestRun(){this.loadVariableData()}selectDataAndClose(){this.activeModal.close({isSearch:!0,filterData:{productId:this.projectId,testRunId:this.testRunId,variableIds:this.projectVariableTags,IotPanelId:this.IotPanelId,analogVariableIds:this.analogVariableTags,ambientVariableIds:this.ambientVariableTags},aodd:this.aodd,eodd:this.eodd,projectType:this.projectType,analogVariableList:this.analogVariableList,ambientVariableList:this.ambientVariableList})}closeModal(){this.activeModal.dismiss({isSearch:!1})}static#a=this.\u0275fac=function(i){return new(i||o)(a.Y36(_._),a.Y36(v.Kz))};static#e=this.\u0275cmp=a.Xpm({type:o,selectors:[["app-data-analytics-modal"]],inputs:{inputData:"inputData",label:"label",formControl:"formControl"},standalone:!0,features:[a.jDz],decls:95,vars:21,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row","modal-row-border"],[1,"mb-2"],[1,"section-title"],[1,"col-xl-4","col-md-6"],[1,"form-group"],[1,"form-control",3,"ngModel","disabled","ngModelChange","change"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-xl-1","col-md-6"],[1,"icon-container"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 25 25"],["d","m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z","data-name","Right",2,"fill","#232326"],[1,"col-xl-3","col-md-1"],[1,"col-xl-1","col-md-1"],[1,"col-xl-3","col-md-6"],[3,"value","disabled",4,"ngFor","ngForOf"],[1,"col-xl-12","col-md-12"],[1,"tag-input"],["class","tag",4,"ngFor","ngForOf"],[1,"col-xl-6","col-md-6"],[1,"form-control",3,"ngModel","disabled","ngModelChange"],[1,"col-xl-5","col-md-6"],[1,"d-flex","justify-content-end"],["type","button","ngbAutofocus","",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-check"],["type","button",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-times"],[3,"value"],[3,"value","disabled"],[1,"tag"],[1,"remove",3,"click"]],template:function(i,t){1&i&&(a.TgZ(0,"div",0)(1,"h6",1),a._uU(2,"Select Variable"),a.qZA(),a.TgZ(3,"button",2),a.NdJ("click",function(){return t.closeModal()}),a.TgZ(4,"span",3),a._uU(5,"\xd7"),a.qZA()()(),a.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),a._uU(10,"Project Variable"),a.qZA()(),a.TgZ(11,"div",8)(12,"div",9)(13,"label"),a._uU(14,"Select Project"),a.qZA(),a.TgZ(15,"select",10),a.NdJ("ngModelChange",function(l){return t.projectId=l})("change",function(){return t.changeProject()}),a.TgZ(16,"option",11),a._uU(17,"Select Project"),a.qZA(),a.YNc(18,A,2,2,"option",12),a.qZA()()(),a.TgZ(19,"div",13)(20,"div",14),a.O4$(),a.TgZ(21,"svg",15),a._UZ(22,"path",16),a.qZA()()(),a.kcU(),a.TgZ(23,"div",17)(24,"div",9)(25,"label"),a._uU(26,"Select Test Run"),a.qZA(),a.TgZ(27,"select",10),a.NdJ("ngModelChange",function(l){return t.testRunId=l})("change",function(){return t.changeTestRun()}),a.TgZ(28,"option",11),a._uU(29,"Select Test Run"),a.qZA(),a.YNc(30,I,2,2,"option",12),a.qZA()()(),a.TgZ(31,"div",18)(32,"div",14),a.O4$(),a.TgZ(33,"svg",15),a._UZ(34,"path",16),a.qZA()()(),a.kcU(),a.TgZ(35,"div",19)(36,"div",9)(37,"label"),a._uU(38,"Select Variable"),a.qZA(),a.TgZ(39,"select",10),a.NdJ("ngModelChange",function(l){return t.variableId=l})("change",function(){return t.changeVariable()}),a.TgZ(40,"option",11),a._uU(41,"Select Variable"),a.qZA(),a.YNc(42,M,2,3,"option",20),a.qZA()()(),a.TgZ(43,"div",21)(44,"div",22),a.YNc(45,P,4,1,"div",23),a.qZA()()(),a.TgZ(46,"div",5)(47,"div",6)(48,"label",7),a._uU(49,"Analog Measurement Variable"),a.qZA()(),a.TgZ(50,"div",24)(51,"div",9)(52,"label"),a._uU(53,"Select Iot Panel"),a.qZA(),a.TgZ(54,"select",25),a.NdJ("ngModelChange",function(l){return t.IotPanelId=l}),a.TgZ(55,"option",11),a._uU(56,"Select Iot Panel"),a.qZA(),a.YNc(57,C,2,3,"option",20),a.qZA()()(),a.TgZ(58,"div",18)(59,"div",14),a.O4$(),a.TgZ(60,"svg",15),a._UZ(61,"path",16),a.qZA()()(),a.kcU(),a.TgZ(62,"div",26)(63,"div",9)(64,"label"),a._uU(65,"Select Variable"),a.qZA(),a.TgZ(66,"select",10),a.NdJ("ngModelChange",function(l){return t.analogVariableId=l})("change",function(){return t.changeAnalogVariable()}),a.TgZ(67,"option",11),a._uU(68,"Select Analog Variable"),a.qZA(),a.YNc(69,Z,2,3,"option",20),a.qZA()()(),a.TgZ(70,"div",21)(71,"div",22),a.YNc(72,y,4,1,"div",23),a.qZA()()(),a.TgZ(73,"div",5)(74,"div",6)(75,"label",7),a._uU(76,"Ambient Variable"),a.qZA()(),a.TgZ(77,"div",24)(78,"div",9)(79,"label"),a._uU(80,"Ambient Variable"),a.qZA(),a.TgZ(81,"select",10),a.NdJ("ngModelChange",function(l){return t.ambientVariableId=l})("change",function(){return t.changeAmbientVariable()}),a.TgZ(82,"option",11),a._uU(83,"Select Ambient Variable"),a.qZA(),a.YNc(84,j,2,3,"option",20),a.qZA()()(),a.TgZ(85,"div",21)(86,"div",22),a.YNc(87,O,4,1,"div",23),a.qZA()()(),a.TgZ(88,"div",27)(89,"button",28),a.NdJ("click",function(){return t.selectDataAndClose()}),a._UZ(90,"i",29),a._uU(91," Apply "),a.qZA(),a.TgZ(92,"button",30),a.NdJ("click",function(){return t.closeModal()}),a._UZ(93,"i",31),a._uU(94," Cancel "),a.qZA()()()),2&i&&(a.xp6(15),a.Q6J("ngModel",t.projectId)("disabled",0!==t.projectVariableTags.length),a.xp6(3),a.Q6J("ngForOf",t.projectList),a.xp6(9),a.Q6J("ngModel",t.testRunId)("disabled",0!==t.projectVariableTags.length),a.xp6(3),a.Q6J("ngForOf",t.testRunList),a.xp6(9),a.Q6J("ngModel",t.variableId)("disabled",t.isDisableOption()),a.xp6(3),a.Q6J("ngForOf",t.variableList),a.xp6(3),a.Q6J("ngForOf",t.projectVariableTags),a.xp6(9),a.Q6J("ngModel",t.IotPanelId)("disabled",t.isDisableOption()),a.xp6(3),a.Q6J("ngForOf",t.IotPanelList),a.xp6(9),a.Q6J("ngModel",t.analogVariableId)("disabled",t.isDisableOption()),a.xp6(3),a.Q6J("ngForOf",t.analogVariableList),a.xp6(3),a.Q6J("ngForOf",t.analogVariableTags),a.xp6(9),a.Q6J("ngModel",t.ambientVariableId)("disabled",t.isDisableOption()),a.xp6(3),a.Q6J("ngForOf",t.ambientVariableList),a.xp6(3),a.Q6J("ngForOf",t.ambientVariableTags))},dependencies:[d.ez,d.sg,u.m,c.YN,c.Kr,c.EJ,c.JJ,c.On,h.Qf,b.LD,D.lN],styles:[".modal-title{font-style:normal;font-weight:400}  .modal-header{padding:10px;justify-content:space-between}  .close{border-radius:50%;padding:0 8px;border-color:#666}  .modal-row-border{border-color:#ced4da;border-style:solid;border-width:.8px;border-radius:5px;padding:10px;margin:20px 10px}  .ml-10{margin-left:10px}  .mb-5{margin-bottom:5px}  select.form-control{background-color:#e4e4e4!important}  .modal-header{border-bottom:none}  .modal-body{padding:0}  .modal-body .row{margin:10px;padding-left:0;padding-right:0}  .section-title{font-size:12px}  .form-group label{font-size:10px;font-weight:400}  .icon-container{margin-top:25px}  .custom-btn.btn{border-radius:20px;margin-bottom:5px!important}  .card-header-right{display:none}  .cdk-overlay-container{z-index:9999}  .tag-input{display:flex;flex-wrap:wrap;align-items:center;margin:0}  .tag{background-color:#6c757d;color:#fff;padding:6px 8px;margin:0 4px;display:flex;align-items:center;border-radius:20px;font-size:10px}  .remove{cursor:pointer;margin-left:4px;font-weight:700}  option:disabled{background-color:#eef075!important}  .mat-mdc-form-field-subscript-wrapper{display:none!important}@media only screen and (max-width: 768px){  .icon-container{display:none}}"]})}return o})()},4270:(V,m,r)=>{r.d(m,{c:()=>h});var d=r(9468),u=r(7635);let h=(()=>{class b{constructor(c,a,_){this.templateRef=c,this.viewContainer=a,this.authService=_,this.visible=!1,this.appHasRoles=[]}ngOnChanges(){if(!this.visible){if(this.authService.checkRole(this.appHasRoles)||!this.appHasRoles?.length)return this.viewContainer.clear(),this.viewContainer.createEmbeddedView(this.templateRef),void(this.visible=!0);this.viewContainer.clear(),this.visible=!1}}static#a=this.\u0275fac=function(a){return new(a||b)(d.Y36(d.Rgc),d.Y36(d.s_b),d.Y36(u.u))};static#e=this.\u0275dir=d.lG2({type:b,selectors:[["","appHasRoles",""]],inputs:{appHasRoles:"appHasRoles"},features:[d.TTD]})}return b})()}}]);