"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[592],{3182:(D,v,l)=>{l.d(v,{Z:()=>i});var c=l(6814),m=l(3185),t=l(7818),h=l(9468),_=l(5026),g=l(2561);const u=["chart"],p=function(d,o){return{width:d,height:o}};let i=(()=>{class d{set _customRangeSelector(s){this.customRangeSelector=s}set _size(s){this.size=s}constructor(s,n){this.dashService=s,this.chartService=n,this.showChart=!1,this.customRangeSelector=!1,this.stopZoom=!1,this.timeSeriesLegendState={},this.tempSchema=[{name:"Time",type:"date",format:"%d-%b-%Y %H:%M:%S"},{name:"Type",type:"string"},{name:"Value",type:"number"}],this.handleLegendItemClick=e=>{e.preventDefault();const r=e.dataObj.datasetName;this.timeSeriesLegendState[r]=+!this.timeSeriesLegendState[r]},this.type="timeseries",this.width="100%",this.height="500",this.dashService.timeSeriesData.subscribe(e=>{this.data=e,this.data?.length&&(this.loadLegendItems(),this.formatData(),this.showChart=!0)})}setChart(){this.dashService.timeSeriesData.subscribe(s=>{this.data=s,this.data?.length&&(this.loadLegendItems(),this.formatData(),this.showChart=!0)})}ngOnInit(){this.height=`${this.size.height}px`,this.width=this.size.width,this.chartService.resetChart$.subscribe(()=>{})}loadLegendItems(){const s=0==Object.keys(this.timeSeriesLegendState).length;this.data?.map(n=>{const{name:e}=n;s&&(this.timeSeriesLegendState[e]=1)})}formatData(){if(!this.data)return;const s=this.data.map(e=>({type:"line",showInLegend:!0,visible:this.timeSeriesLegendState[e.name],...e})).flat();this.tempData=s;const n=(e,r)=>{this.timeSeriesLegendState[e]=r};this.chartOptions={zoomEnabled:!0,animationEnabled:!0,theme:"light2",title:{text:""},axisX:{valueFormatString:"HH:mm:ss"},axisY:{title:"Value",suffix:""},toolTip:{shared:!0,content:function(e){let r="";r+=(0,c.p6)(e.entries[0].dataPoint.x,"dd/MM/YYYY HH:mm:ss","en_US")+"<br/><br/>";for(let a=0;a<e.entries.length;a++)r+="PM2.5"==e.entries[a].dataSeries.name||"PM10"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(1)+" (\xb5g/m3)<br/>":"VOC"==e.entries[a].dataSeries.name||"Humidity"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(1)+" (%)<br/>":"Pump RPM"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (RPM)<br/>":"Motor Current"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (A)<br/>":"Discharge Press PV"==e.entries[a].dataSeries.name||"Discharge Press SP"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (BAR)<br/>":"Discharge Flow"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (LPM)<br/>":"Motor Power"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (KW)<br/>":"Stroke Rate"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (SCPM)<br/>":"Inlet Air Press PV"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (BAR)<br/>":"Air Valve Output"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (%)<br/>":"PumpRPM"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (RPM)<br/>":"Discharge Control Valve Cmd"==e.entries[a].dataSeries.name||"Discharge Control Valve Position"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (%)<br/>":"Suction Pressure"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (BAR)<br/>":"Gravimetric Flow"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (kG/Min)<br/>":"Gravimetric Weight"==e.entries[a].dataSeries.name||"WeightScaleRead"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (Kg)<br/>":"MotorAMP"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (A)<br/>":"Discharge Pressure"==e.entries[a].dataSeries.name||"Discharge Pressure Setpoint"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (BAR)<br/>":"DischargeFlow"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (LPM)<br/>":"MotorKW"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (KW)<br/>":"MotorKWH"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (kWh)<br/>":"Test Stroke Count"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+"<br/>":"Stroke Count Rate"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (SCPM)<br/>":"In Air Pressure"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+"<br/>":"Air Valve Output"==e.entries[a].dataSeries.name?e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(2)+" (%)<br/>":e.entries[a].dataSeries.name+": "+e.entries[a].dataPoint.y.toFixed(1)+" (\xb0C)<br/>";return r}},legend:{cursor:"pointer",itemclick:function(e){typeof e.dataSeries.visible>"u"||e.dataSeries.visible?(n(e.dataSeries.name,!1),e.dataSeries.visible=!1):(n(e.dataSeries.name,!0),e.dataSeries.visible=!0),e.chart.render()}},data:s}}static#t=this.\u0275fac=function(n){return new(n||d)(h.Y36(_.s),h.Y36(g.C))};static#e=this.\u0275cmp=h.Xpm({type:d,selectors:[["app-time-series"]],viewQuery:function(n,e){if(1&n&&h.Gf(u,5),2&n){let r;h.iGM(r=h.CRH())&&(e.chart=r.first)}},inputs:{_customRangeSelector:"_customRangeSelector",_size:"_size"},standalone:!0,features:[h.jDz],decls:2,vars:5,consts:[["id","chartContainer",3,"options","styles"],["chart",""]],template:function(n,e){1&n&&h._UZ(0,"canvasjs-chart",0,1),2&n&&h.Q6J("options",e.chartOptions)("styles",h.WLB(2,p,e.width,e.height))},dependencies:[c.ez,t.m,m.n,m.x],encapsulation:2})}return d})()},5738:(D,v,l)=>{l.d(v,{b:()=>_});const c=[{title:"Dashboard Access",properties:[{name:"NPD LAB",isActive:!0},{name:"Running Proj",isActive:!0},{name:"History Proj",isActive:!1},{name:"Proj Analysis",isActive:!1}]},{title:"Data Analysis Access",properties:[{name:"Time Series",isActive:!0},{name:"Statistical",isActive:!1},{name:"Log Report",isActive:!0},{name:"Chart Report",isActive:!0}]},{title:"Maitenance Access",properties:[{name:"Log Sheet",isActive:!0},{name:"Remote Op.",isActive:!0}]}];var m=l(5449),t=l(9468),h=l(9862);let _=(()=>{class g{constructor(p){this.http=p,this.data={}}getProjectDetails(){return this.http.post(`${m.N.apiUrl}/getProjectDetails`,{id:"1201082133"})}getRoles(){return this.http.post(`${m.N.apiUrl}/getAllRole`,{})}getAccessDetails(){return c}insertRole(p){return this.http.post(`${m.N.apiUrl}/SetRole`,{data:p})}updateRole(p,i){return this.http.post(`${m.N.apiUrl}/updateRole`,{id:p,data:i})}static#t=this.\u0275fac=function(i){return new(i||g)(t.LFG(h.eN))};static#e=this.\u0275prov=t.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()},4277:(D,v,l)=>{l.d(v,{W:()=>h});var c=l(5449),m=l(9468),t=l(9862);let h=(()=>{class _{constructor(u){this.http=u}selectMaintenance(u,p){return this.http.post(`${c.N.apiUrl}/SelectMaintenance`,{from:u,to:p})}selectUserNote(u,p){return this.http.post(`${c.N.apiUrl}/SelectNote`,{from:u,to:p})}getOperations(){return this.http.get(`${c.N.apiUrl}/getGroupData`)}static#t=this.\u0275fac=function(p){return new(p||_)(m.LFG(t.eN))};static#e=this.\u0275prov=m.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},589:(D,v,l)=>{l.d(v,{Y:()=>g});var c=l(5449),m=l(6814),t=l(9468),h=l(9862),_=l(7635);let g=(()=>{class u{constructor(i,d){this.http=i,this.authService=d}getLastRunData(){return this.http.get(`${c.N.apiUrl}/getLastRunData`)}getListView(i,d){return this.http.post(`${c.N.apiUrl}/getListView`,{fromDate:i,toDate:d})}getProjectDetails(i){return this.http.post(`${c.N.apiUrl}/getProjectDetails`,{id:i})}getTableData(i,d,o,s){return this.http.post(`${c.N.apiUrl}/getRunningStats`,{id:i,no:d,start:o,end:s})}getProjectAnalysis(i,d){return this.http.post(`${c.N.apiUrl}/getProjectAnalysis`,{id:i,no:d})}getTestBenchSequence(i,d){return this.http.post(`${c.N.apiUrl}/getTestBenchseq`,{id:i,no:d})}getTimeSeriesById(i,d){return this.http.post(`${c.N.apiUrl}/getTimeSeriesbyid`,{id:i,no:d})}getTimeSeriesByIdForRunPro(i,d,o,s){return this.http.post(`${c.N.apiUrl}/getTimeSeriesDatabyid`,{id:i,no:d,start:o,end:s})}getProjectRunTime(i){return this.http.post(`${c.N.apiUrl}/getProjectTime`,{id:i})}getUpdatePanelStatus(i,d,o,s,n,e){const r=this.authService.getFullNameFromToken();return this.http.post(`${c.N.apiUrl}/UpdatePanelStatus`,{group:i,status:d,date:o,message:s,uid:r.uid,projectid:n,no:e})}getAnalysisData(i,d,o,s){return this.http.post(`${c.N.apiUrl}/getAnalysisData`,{id:i,start:d,end:o,data:s})}createMaintenance(i,d,o,s,n){const e=this.authService.getFullNameFromToken(),r=(0,m.p6)(new Date,"YYYY-MM-dd HH:mm:ss","en_US"),a=(0,m.p6)(new Date,"YYYY-MM-dd HH:mm:ss","en_US"),M=(0,m.p6)(new Date(n),"YYYY-MM-dd HH:mm:ss","en_US");return this.http.post(`${c.N.apiUrl}/CreateMaintenance`,{data:{projectid:i,testno:d,reason:o,desc:s,createuid:e.uid,updateid:e.uid,createdate:r,updatedate:a,issuecreateddate:M}})}selectUpdateMaintenance(i,d,o,s){const n=this.authService.getFullNameFromToken(),e=(0,m.p6)(new Date(s),"YYYY-MM-dd HH:mm:ss","en_US"),r=(0,m.p6)(new Date,"YYYY-MM-dd HH:mm:ss","en_US");return this.http.post(`${c.N.apiUrl}/UpdateMaintenance`,{mid:i,data:[`reason='${d}'`,`description='${o}'`,`updatedbyid=${n.uid}`,`updateddate='${r}'`,`issuecreateddate='${e}'`]})}deleteMaintenance(i){return this.http.post(`${c.N.apiUrl}/deleteMaintenance`,{mid:i})}createNote(i,d,o,s,n){const r={uid:this.authService.getFullNameFromToken().uid,projectid:i,testno:d,remarks:o,updateddate:n,createddate:s};return this.http.post(`${c.N.apiUrl}/CreateNote`,{data:r})}createFav(i,d,o,s){const e={uid:this.authService.getFullNameFromToken().uid,projectid:i,testno:d,favremark:o,updatedate:s,status:!0};return this.http.post(`${c.N.apiUrl}/CreateFav`,{data:e})}updateUserNote(i,d){const o=(0,m.p6)(new Date,"YYYY-MM-dd HH:mm:ss","en_US");return this.http.post(`${c.N.apiUrl}/UpdateNote`,{id:i,data:[`remarks='${d}'`,`updateddate='${o}'`]})}deleteUserNote(i){return this.http.post(`${c.N.apiUrl}/deleteNote`,{id:i})}deleteFav(i){return this.http.post(`${c.N.apiUrl}/deleteFav`,{fid:i})}getAttach(i,d,o,s,n,e){return this.http.post(`${c.N.apiUrl}/getSeriesReport`,{projectId:i,headers:d,value:o,match:s,fromDate:n,toDate:e},{responseType:"blob"})}getAmbientData(i,d,o){return this.http.post(`${c.N.apiUrl}/getAmbiantData`,{data:o,start:i,end:d})}getAmbientReport(i,d,o){return this.http.post(`${c.N.apiUrl}/getAmbiantReport`,{data:o,start:i,end:d},{responseType:"blob"})}getTankReport(i,d,o){return this.http.post(`${c.N.apiUrl}/getTankReport`,{data:o,start:i,end:d},{responseType:"blob"})}getGroupCReport(i,d){return this.http.post(`${c.N.apiUrl}/getGroupCData`,{start:i,end:d})}static#t=this.\u0275fac=function(d){return new(d||u)(t.LFG(h.eN),t.LFG(_.u))};static#e=this.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},7844:(D,v,l)=>{l.d(v,{l:()=>p});var c=l(6814),m=l(7818),t=l(9468),h=l(3946),_=l(589),g=l(7911),u=l(95);let p=(()=>{class i{constructor(o,s,n){this.activeModal=o,this.projectService=s,this.toastService=n,this.reason=""}ngOnInit(){console.log(this.inputData),this.inputData.reason&&(this.reason=this.inputData.reason),this.inputData.description&&(this.remark=this.inputData.description),this.currrentDate=this.formateDate(),console.log(this.currrentDate)}createMaintenance(){this.projectService.createMaintenance(this.inputData.projectId,this.inputData.testId,this.reason,this.remark,this.currrentDate).subscribe({next:o=>{console.log(o),this.toastService.show({template:"Inserted Succesfully!!",classname:"bg-success",delay:3e3})},error:()=>{this.toastService.show({template:"Something went wrong",classname:"bg-danger",delay:3e3})}})}updateMaintenance(){console.log(this.reason,this.remark),this.projectService.selectUpdateMaintenance(this.inputData.mid,this.reason,this.remark,this.currrentDate).subscribe({next:o=>{console.log(o),this.toastService.show({template:"Updated Succesfully!!",classname:"bg-success",delay:3e3})},error:()=>{this.toastService.show({template:"Something went wrong!!",classname:"bg-danger",delay:3e3})}})}selectDataAndClose(){this.reason?this.remark?("add"==this.inputData.mode?this.createMaintenance():this.updateMaintenance(),this.activeModal.close({isSearch:!1,isSuccess:!0})):this.toastService.show({template:"Please enter the description",classname:"bg-danger",delay:3e3}):this.toastService.show({template:"Please select the reason",classname:"bg-danger",delay:3e3})}closeModal(){this.activeModal.dismiss({isSearch:!1})}formateDate(){let o=new Date;this.inputData.issuecreateddate&&(o=new Date(this.inputData.issuecreateddate));const s=o.getMonth()+1,n=o.getDate(),e=o.getHours(),r=o.getMinutes();return`${o.getFullYear()}-${this.padding10(s)}-${this.padding10(n)}T${this.padding10(e)}:${this.padding10(r)}`}padding10(o){return o>=10?o:`0${o}`}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(h.Kz),t.Y36(_.Y),t.Y36(g.k))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-project-maintenance-log-modal"]],inputs:{inputData:"inputData"},standalone:!0,features:[t.jDz],decls:48,vars:6,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],[1,"form-group"],["for",""],["type","text","disabled","",1,"form-control",3,"value"],["type","datetime-local","name","date","id","",1,"form-control",3,"ngModel","ngModelChange"],["name","reason",1,"form-control",3,"ngModel","ngModelChange"],["value","","disabled","","selected",""],["value","Calibration"],["value","Mechanical"],["value","Electrical"],["value","Others"],["name","remark",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","justify-content-end"],[1,"col-xl-2","col-md-2"],["type","button","ngbAutofocus","",1,"btn","btn-block","d-flex","align-items-center","gap-2","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-check"],["type","button",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-times"]],template:function(s,n){1&s&&(t.TgZ(0,"div",0)(1,"h6",1),t._uU(2,"Add Maintenance log"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return n.closeModal()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4)(7,"div",5)(8,"form")(9,"div",6)(10,"label",7),t._uU(11,"Project ID:"),t.qZA(),t._UZ(12,"input",8),t.qZA(),t.TgZ(13,"div",6)(14,"label",7),t._uU(15,"Test No:"),t.qZA(),t._UZ(16,"input",8),t.qZA(),t.TgZ(17,"div",6)(18,"label",7),t._uU(19,"Issue Created Date"),t.qZA(),t.TgZ(20,"input",9),t.NdJ("ngModelChange",function(r){return n.currrentDate=r}),t.qZA()(),t.TgZ(21,"div",6)(22,"label"),t._uU(23,"Select Reason"),t.qZA(),t.TgZ(24,"select",10),t.NdJ("ngModelChange",function(r){return n.reason=r}),t.TgZ(25,"option",11),t._uU(26,"Select Reason"),t.qZA(),t.TgZ(27,"option",12),t._uU(28,"Calibration"),t.qZA(),t.TgZ(29,"option",13),t._uU(30,"Mechanical"),t.qZA(),t.TgZ(31,"option",14),t._uU(32,"Electrical"),t.qZA(),t.TgZ(33,"option",15),t._uU(34,"Others"),t.qZA()()(),t.TgZ(35,"div",6)(36,"label",7),t._uU(37,"Description:"),t.qZA(),t.TgZ(38,"textarea",16),t.NdJ("ngModelChange",function(r){return n.remark=r}),t.qZA()()()(),t.TgZ(39,"div",17)(40,"div",18)(41,"button",19),t.NdJ("click",function(){return n.selectDataAndClose()}),t._UZ(42,"i",20),t._uU(43),t.qZA()(),t.TgZ(44,"div",18)(45,"button",21),t.NdJ("click",function(){return n.closeModal()}),t._UZ(46,"i",22),t._uU(47," Cancel "),t.qZA()()()()),2&s&&(t.xp6(12),t.Q6J("value",n.inputData.projectId),t.xp6(4),t.Q6J("value",n.inputData.testId),t.xp6(4),t.Q6J("ngModel",n.currrentDate),t.xp6(4),t.Q6J("ngModel",n.reason),t.xp6(14),t.Q6J("ngModel",n.remark),t.xp6(5),t.hij(" ","add"===n.inputData.mode?"Add":"Update"," "))},dependencies:[c.ez,m.m,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.On,u.F]})}return i})()},814:(D,v,l)=>{l.d(v,{_:()=>i});var c=l(6814),m=l(7818),t=l(9468),h=l(5766),_=l(3946),g=l(589),u=l(7911),p=l(95);let i=(()=>{class d{constructor(s,n,e,r){this.navigationService=s,this.activeModal=n,this.projectService=e,this.toastService=r,this.remark=""}ngOnInit(){console.log(this.inputData),this.inputData.remark&&(this.remark=this.inputData.remark)}createNote(){const s=new Date;this.projectService.createNote(this.inputData.projectId,this.inputData.testId,this.remark,s.toLocaleString(),s.toLocaleString()).subscribe(n=>{console.log(n),this.toastService.show(200===n.Status?{template:"User note inserted!!",classname:"bg-success",delay:3e3}:{template:"Something went wrong, Please try again",classname:"bg-danger",delay:3e3})})}createFav(){this.projectService.createFav(this.inputData.projectId,this.inputData.testId,this.remark,new Date).subscribe(n=>{console.log(n),200===n.Status?(this.navigationService.notifyNavbarFunction(),this.toastService.show({template:"Favorites remark inserted!!",classname:"bg-success",delay:3e3})):this.toastService.show({template:"Something went wrong, Please try again",classname:"bg-danger",delay:3e3})})}updateNote(){this.projectService.updateUserNote(this.inputData.nid,this.remark).subscribe(s=>{console.log(s),this.toastService.show(200===s.Status?{template:"User note updated!!",classname:"bg-success",delay:3e3}:{template:"Something went wrong, Please try again",classname:"bg-danger",delay:3e3})})}selectDataAndClose(){"favourite"===this.inputData.title.toLowerCase()?"add"==this.inputData.mode&&this.createFav():"add"==this.inputData.mode?this.createNote():this.updateNote(),console.log("here"),this.activeModal.close({isSearch:!0,data:"successs"})}closeModal(){this.activeModal.dismiss({isSearch:!1})}static#t=this.\u0275fac=function(n){return new(n||d)(t.Y36(h.f),t.Y36(_.Kz),t.Y36(g.Y),t.Y36(u.k))};static#e=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-project-note-fav-modal"]],inputs:{inputData:"inputData"},standalone:!0,features:[t.jDz],decls:30,vars:5,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],[1,"form-group"],["for",""],["type","text","disabled","",1,"form-control",3,"value"],["name","remark",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","justify-content-end"],[1,"col-xl-2","col-md-2","px-0"],["type","button","ngbAutofocus","",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-check"],[1,"col-xl-2","col-md-2"],["type","button",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-times"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"h6",1),t._uU(2),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return e.closeModal()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4)(7,"div",5)(8,"form")(9,"div",6)(10,"label",7),t._uU(11,"Project ID:"),t.qZA(),t._UZ(12,"input",8),t.qZA(),t.TgZ(13,"div",6)(14,"label",7),t._uU(15,"Test ID:"),t.qZA(),t._UZ(16,"input",8),t.qZA(),t.TgZ(17,"div",6)(18,"label",7),t._uU(19,"Remarks:"),t.qZA(),t.TgZ(20,"textarea",9),t.NdJ("ngModelChange",function(a){return e.remark=a}),t.qZA()()()(),t.TgZ(21,"div",10)(22,"div",11)(23,"button",12),t.NdJ("click",function(){return e.selectDataAndClose()}),t._UZ(24,"i",13),t._uU(25),t.qZA()(),t.TgZ(26,"div",14)(27,"button",15),t.NdJ("click",function(){return e.closeModal()}),t._UZ(28,"i",16),t._uU(29," Cancel "),t.qZA()()()()),2&n&&(t.xp6(2),t.Oqu(e.inputData.title),t.xp6(10),t.Q6J("value",e.inputData.projectId),t.xp6(4),t.Q6J("value",e.inputData.testId),t.xp6(4),t.Q6J("ngModel",e.remark),t.xp6(5),t.hij(" ","add"===e.inputData.mode?"Add":"Update"," "))},dependencies:[c.ez,m.m,p._Y,p.Fj,p.JJ,p.JL,p.On,p.F]})}return d})()},239:(D,v,l)=>{l.d(v,{A:()=>p});var c=l(6814),m=l(7818),t=l(9468),h=l(3946),_=l(589),g=l(7911),u=l(95);let p=(()=>{class i{constructor(o,s,n){this.activeModal=o,this.projectService=s,this.toastService=n,this.remark=""}ngOnInit(){console.log(this.inputData)}selectDataAndClose(){console.log(this.inputData,"inpurt data"),this.remark?this.activeModal.close({isSearch:!0,data:"successs"}):this.toastService.show({template:"Please enter the reason",classname:"bg-danger",delay:3e3})}stopRemote(){const o=new Date,s=(0,c.p6)(o,"YYYY-MM-dd HH:mm:ss","en_US");this.projectService.getUpdatePanelStatus(this.inputData.group,!1,s,this.remark,this.inputData.projectId,this.inputData.testId).subscribe(n=>{localStorage.setItem("data",JSON.stringify({group:this.inputData.group,date:o})),this.toastService.show({template:"Please wait while we update your command",classname:"bg-info",delay:3e3}),this.closeModal()})}closeModal(){this.activeModal.dismiss({isSearch:!1})}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(h.Kz),t.Y36(_.Y),t.Y36(g.k))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-remote-stop-modal"]],inputs:{inputData:"inputData"},standalone:!0,features:[t.jDz],decls:22,vars:1,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],[1,"form-group"],["for",""],["name","remark",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","justify-content-end"],[1,"col-xl-2","col-md-2"],["type","button","ngbAutofocus","",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-check"],["type","button",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-times"]],template:function(s,n){1&s&&(t.TgZ(0,"div",0)(1,"h6",1),t._uU(2,"Remote Stop"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return n.closeModal()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4)(7,"div",5)(8,"form")(9,"div",6)(10,"label",7),t._uU(11,"Remarks:"),t.qZA(),t.TgZ(12,"textarea",8),t.NdJ("ngModelChange",function(r){return n.remark=r}),t.qZA()()()(),t.TgZ(13,"div",9)(14,"div",10)(15,"button",11),t.NdJ("click",function(){return n.stopRemote()}),t._UZ(16,"i",12),t._uU(17," Submit "),t.qZA()(),t.TgZ(18,"div",10)(19,"button",13),t.NdJ("click",function(){return n.closeModal()}),t._UZ(20,"i",14),t._uU(21," Cancel "),t.qZA()()()()),2&s&&(t.xp6(12),t.Q6J("ngModel",n.remark))},dependencies:[c.ez,m.m,u._Y,u.Fj,u.JJ,u.JL,u.On,u.F]})}return i})()}}]);