"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[109],{8193:(w,N,c)=>{c.d(N,{Z:()=>T});var t=c(9468),M=c(6814),Z=c(7818),D=c(8351),b=c(5399),v=c(6223);function E(f,U){if(1&f){const i=t.EpF();t.TgZ(0,"span",18),t.NdJ("mouseenter",function(){const m=t.CHM(i).$implicit,u=t.oxw();return t.KtG(u.hoveredDate=m)})("mouseleave",function(){t.CHM(i);const _=t.oxw();return t.KtG(_.hoveredDate=null)}),t._uU(1),t.qZA()}if(2&f){const i=U.$implicit,h=U.focused,_=t.oxw();t.ekj("focused",h)("range",_.isRange(i))("faded",_.isHovered(i)||_.isInside(i)),t.xp6(1),t.hij(" ",i.day," ")}}let T=(()=>{class f{constructor(i){this.activeModal=i,this.calendar=(0,t.f3M)(b.vL),this.hoveredDate=null,this.fromDate=this.calendar.getToday(),this.toDate=this.calendar.getNext(this.fromDate,"d",-1),this.currentDate=new Date,this.startTime={hour:this.currentDate.getHours(),minute:this.currentDate.getMinutes()},this.endTime={hour:this.currentDate.getHours(),minute:this.currentDate.getMinutes()}}ngOnInit(){const i=this.inputData.startDate,h=this.inputData.endDate;this.fromDate={year:i.getFullYear(),month:i.getMonth()+1,day:i.getDate()},this.toDate={year:h.getFullYear(),month:h.getMonth()+1,day:h.getDate()};const _=i.getHours(),m=i.getMinutes(),u=h.getHours(),x=h.getMinutes();this.startTime={hour:_,minute:m},this.endTime={hour:u,minute:x}}onDateSelection(i){this.fromDate||this.toDate?this.fromDate&&!this.toDate&&i.after(this.fromDate)?this.toDate=i:(this.toDate=null,this.fromDate=i):this.fromDate=i}isHovered(i){return this.fromDate&&!this.toDate&&this.hoveredDate&&i.after(this.fromDate)&&i.before(this.hoveredDate)}isInside(i){return this.toDate&&i.after(this.fromDate)&&i.before(this.toDate)}isRange(i){return i.equals(this.fromDate)||this.toDate&&i.equals(this.toDate)||this.isInside(i)||this.isHovered(i)}selectDataAndClose(){this.activeModal.close({isUpdated:!0,dateData:{startDate:this.fromDate,endDate:this.toDate,startTime:this.startTime,endTime:this.endTime}})}closeModal(){this.activeModal.dismiss({isUpdated:!1})}static#t=this.\u0275fac=function(h){return new(h||f)(t.Y36(b.Kz))};static#e=this.\u0275cmp=t.Xpm({type:f,selectors:[["app-datatime-range-modal"]],inputs:{inputData:"inputData"},standalone:!0,features:[t.jDz],decls:26,vars:4,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],["outsideDays","hidden",1,"range-datetimepicker",3,"displayMonths","dayTemplate","dateSelect"],["dp",""],["t",""],[1,"col-md-6","col-sm-6"],[3,"ngModel","ngModelChange"],[1,"row","justify-content-end"],[1,"col-xl-3","col-md-3","col-sm-6"],["type","button","ngbAutofocus","",1,"btn","btn-block","btn-primary","mb-4",3,"click"],[1,"fas","fa-check"],[1,"col-xl-4","col-md-3","col-sm-6"],["type","button",1,"btn","btn-block","btn-primary","mb-4",3,"click"],[1,"fas","fa-times"],[1,"custom-day",3,"mouseenter","mouseleave"]],template:function(h,_){if(1&h&&(t.TgZ(0,"div",0)(1,"h6",1),t._uU(2,"Select Date"),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return _.closeModal()}),t.TgZ(4,"span",3),t._uU(5,"\xd7"),t.qZA()()(),t.TgZ(6,"div",4)(7,"div",5)(8,"ngb-datepicker",6,7),t.NdJ("dateSelect",function(u){return _.onDateSelection(u)}),t.qZA(),t.YNc(10,E,2,7,"ng-template",null,8,t.W1O),t.qZA(),t.TgZ(12,"div",5)(13,"div",9)(14,"ngb-timepicker",10),t.NdJ("ngModelChange",function(u){return _.startTime=u}),t.qZA()(),t.TgZ(15,"div",9)(16,"ngb-timepicker",10),t.NdJ("ngModelChange",function(u){return _.endTime=u}),t.qZA()()(),t.TgZ(17,"div",11)(18,"div",12)(19,"button",13),t.NdJ("click",function(){return _.selectDataAndClose()}),t._UZ(20,"i",14),t._uU(21," Apply "),t.qZA()(),t.TgZ(22,"div",15)(23,"button",16),t.NdJ("click",function(){return _.closeModal()}),t._UZ(24,"i",17),t._uU(25," Cancel "),t.qZA()()()()),2&h){const m=t.MAs(11);t.xp6(8),t.Q6J("displayMonths",2)("dayTemplate",m),t.xp6(6),t.Q6J("ngModel",_.startTime),t.xp6(2),t.Q6J("ngModel",_.endTime)}},dependencies:[M.ez,Z.m,v.JJ,v.On,b.VL,b.Pm,D.Qf],styles:[".modal-title{font-style:normal;font-weight:400}  .modal-header{padding:10px;justify-content:space-between}  .close{border-radius:50%;padding:0 8px;border-color:#666}  .modal-row-border{border-color:#ced4da;border-style:solid;border-width:.8px;border-radius:5px;padding:10px;margin:20px 10px}  .ml-10{margin-left:10px}  .mb-5{margin-bottom:5px}  .custom-day{text-align:center;padding:.185rem .25rem;display:inline-block;height:2rem;width:2rem}  .custom-day.focused{background-color:#e6e6e6}  .custom-day.range,   .custom-day:hover{background-color:#0275d8;color:#fff}  .custom-day.faded{background-color:#0275d880}  .range-datetimepicker{overflow-x:scroll}@media only screen and (max-width: 768px){  .col-sm-6{width:50%}}"]})}return f})()},1109:(w,N,c)=>{c.r(N),c.d(N,{NgbdSortableHeaderDirective:()=>A,default:()=>K});var t=c(9468),M=c(8672),Z=c(8193),D=c(6814),b=c(7818),v=c(8351),E=c(814),T=c(1486),f=c(5399),U=c(7911),i=c(7635),h=c(9074),_=c(4277),m=c(589),u=c(6686),x=c(6223),H=c(220);function R(d,C){1&d&&(t.TgZ(0,"th"),t._uU(1,"Delete note"),t.qZA())}function j(d,C){if(1&d){const e=t.EpF();t.TgZ(0,"td",34)(1,"i",37),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.deleteNote(null==o?null:o.nid))}),t.qZA()()}}function k(d,C){if(1&d){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.ALo(20,"date"),t.qZA(),t.TgZ(21,"td",34)(22,"i",35),t.NdJ("click",function(){const s=t.CHM(e).index,n=t.oxw(2);return t.KtG(n.openModal(s))}),t.qZA()(),t.YNc(23,j,2,0,"td",36),t.qZA()}if(2&d){const e=C.$implicit,a=t.oxw(2);t.xp6(2),t.Oqu(null==e?null:e.ProjectId),t.xp6(2),t.Oqu(null==e?null:e.ProjectName),t.xp6(2),t.Oqu(null==e?null:e.TestBenchNo),t.xp6(2),t.Oqu(null==e?null:e.ProjectType),t.xp6(2),t.Oqu(null==e?null:e.testno),t.xp6(2),t.Oqu(null==e?null:e.remarks),t.xp6(2),t.Oqu(null==e?null:e.uname),t.xp6(2),t.Oqu(t.Dn7(17,10,null==e?null:e.createddate,"dd/MM/yyyy HH:mm:ss","UTC")),t.xp6(3),t.Oqu(t.Dn7(20,14,null==e?null:e.updateddate,"dd/MM/yyyy HH:mm:ss","UTC")),t.xp6(4),t.Q6J("ngIf",a.isSuperAdmin)}}function I(d,C){if(1&d){const e=t.EpF();t.TgZ(0,"div",1)(1,"div",2)(2,"div",3),t._UZ(3,"i",4),t.TgZ(4,"input",5),t.NdJ("ngModelChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.tbSearchFilter=o)})("keyup",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.handleSearchChange())}),t.qZA()(),t.TgZ(5,"div",6)(6,"span",7),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.openDateTimeModal())}),t._UZ(7,"i",8),t._uU(8),t.qZA()()(),t.TgZ(9,"div",9)(10,"div",10)(11,"div",11)(12,"app-card",12)(13,"fusioncharts",13),t.NdJ("dataplotClick",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.handleDataPlotClick(o))}),t.qZA()()(),t.TgZ(14,"div",11)(15,"app-card",14)(16,"fusioncharts",13),t.NdJ("dataplotClick",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.handleDataPlotClick(o))}),t.qZA()()()()(),t.TgZ(17,"div")(18,"app-card",15)(19,"div",16)(20,"button",17),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.exportToCSV())}),t._UZ(21,"i",18),t._uU(22," Export "),t.qZA()(),t.TgZ(23,"div",19)(24,"table",20)(25,"thead")(26,"tr")(27,"th",21),t.NdJ("sort",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.onSort(o))}),t._uU(28,"Project ID"),t.qZA(),t.TgZ(29,"th",22),t.NdJ("sort",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.onSort(o))}),t._uU(30,"Project Name"),t.qZA(),t.TgZ(31,"th",23),t.NdJ("sort",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.onSort(o))}),t._uU(32,"Test Bench"),t.qZA(),t.TgZ(33,"th",24),t.NdJ("sort",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.onSort(o))}),t._uU(34,"Project Type"),t.qZA(),t.TgZ(35,"th",25),t.NdJ("sort",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.onSort(o))}),t._uU(36,"Test Run No."),t.qZA(),t.TgZ(37,"th",26),t.NdJ("sort",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.onSort(o))}),t._uU(38,"Remark"),t.qZA(),t.TgZ(39,"th",27),t.NdJ("sort",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.onSort(o))}),t._uU(40,"Created By"),t.qZA(),t.TgZ(41,"th",28),t.NdJ("sort",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.onSort(o))}),t._uU(42,"Created Time"),t.qZA(),t.TgZ(43,"th",29),t.NdJ("sort",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.onSort(o))}),t._uU(44,"Modified Time"),t.qZA(),t.TgZ(45,"th"),t._uU(46,"Update Note"),t.qZA(),t.YNc(47,R,2,0,"th",30),t.qZA()(),t.TgZ(48,"tbody"),t.YNc(49,k,24,18,"tr",31),t.qZA()(),t.TgZ(50,"div",32)(51,"span"),t._uU(52),t.qZA(),t.TgZ(53,"ngb-pagination",33),t.NdJ("pageChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.handlePageChange(o))})("pageChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.page=o)}),t.qZA()()()()()()}if(2&d){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.tbSearchFilter),t.xp6(4),t.hij(" ",e.formattedDateTimeRange," "),t.xp6(4),t.Q6J("options",!1),t.xp6(1),t.Q6J("type",e.type)("dataFormat",e.dataFormat)("dataSource",e.dataSourceTestbench),t.xp6(2),t.Q6J("options",!1),t.xp6(1),t.Q6J("type",e.type)("dataFormat",e.dataFormat)("dataSource",e.dataSourceRequest),t.xp6(2),t.Q6J("hidHeader",!0)("options",!1),t.xp6(29),t.Q6J("ngIf",e.isSuperAdmin),t.xp6(2),t.Q6J("ngForOf",e.selectedNotes),t.xp6(3),t.AsE("Page ",(e.page-1)*e.pageSize+1," - ",e.page*e.pageSize>e.notes.length?e.notes.length:e.page*e.pageSize," "),t.xp6(1),t.Q6J("pageSize",e.pageSize)("collectionSize",null==e.notes?null:e.notes.length)("page",e.page)}}const B={asc:"desc",desc:"","":"asc"},P=(d,C)=>d<C?-1:d>C?1:0;let A=(()=>{class d{constructor(){this.appSortable="",this.direction="",this.sort=new t.vpe}rotate(){this.direction=B[this.direction],this.sort.emit({column:this.appSortable,direction:this.direction})}static#t=this.\u0275fac=function(a){return new(a||d)};static#e=this.\u0275dir=t.lG2({type:d,selectors:[["th","appSortable",""]],hostVars:4,hostBindings:function(a,o){1&a&&t.NdJ("click",function(){return o.rotate()}),2&a&&t.ekj("asc","asc"===o.direction)("desc","desc"===o.direction)},inputs:{appSortable:"appSortable",direction:"direction"},outputs:{sort:"sort"},standalone:!0})}return d})(),K=(()=>{class d{constructor(e,a,o,s,n,r,p,l){this.spinner=e,this.modalService=a,this.toastService=o,this.auth=s,this.headerService=n,this.maintenanceToolService=r,this.projectService=p,this.idleTimerService=l,this.width="375",this.height="300",this.type="pie2d",this.dataFormat="json",this.page=1,this.pageSize=10,this.showSpinner=!0,this.testbenchChart=[],this.createdby=[],this.isSuperAdmin=!1,this.headerService.setHeaderName("User Notes")}ngOnInit(){const e=this.auth.decodedToken();null!=e&&(this.loggedUserDetails=e,this.isSuperAdmin="SuperAdmin"==this.loggedUserDetails.user),this.formatTimeModalDate(),this.getTestData(),this.idleTimerService.setupIdle(),this.idleTimerService.resetIdleTimer()}getTestData(){new Date(this.fromDate);const a=new Date(this.toDate);a.setMinutes(a.getMinutes()+2);const o=(0,D.p6)(new Date(this.fromDate),"YYYY-MM-dd HH:mm:ss","en_US"),s=(0,D.p6)(new Date(a),"YYYY-MM-dd HH:mm:ss","en_US");this.maintenanceToolService.selectUserNote(o,s).subscribe(n=>{this.testbenchChart=[];const r={},p={},l={};this.testBenchData=n,this.notes=n,this.tempNotes=n,this.sliceNotes(this.page),n.forEach(g=>{const S=g.reason,y=g.uname,O=g.TestBenchNo;r[O]=(r[O]||0)+1,p[S]=(p[S]||0)+1,l[y]=(l[y]||0)+1}),this.testbenchChart=Object.keys(r).map(g=>({label:`TestBench ${g}`,value:r[g]})),this.createdby=Object.keys(l).map(g=>({label:g,value:l[g]})),this.testBenchChart(),this.modeDistribution(),this.showSpinner=!1,this.spinner.hide()})}formatDate(e){return`${e.getFullYear()}-${this.padZero(e.getMonth()+1)}-${this.padZero(e.getDate())}T${this.padZero(e.getHours())}:${this.padZero(e.getMinutes())}:${this.padZero(Math.abs(e.getSeconds()))}`}padZero(e){return e<10?`0${e}`:`${e}`}handleSearchChange(){this.filterNotes(this.tbSearchFilter,!1)}handlePageChange(e){this.sliceNotes(e)}handleDataPlotClick(e){this.filterNotes(e.dataObj.categoryLabel??e.dataObj.datasetName)}testBenchChart(){this.dataSourceTestbench={chart:{showPercentInTooltip:"0",showlegend:!0,legendWidth:"350",legendHeight:"350",legendPosition:"right",legendItemFontSize:"10",theme:"fusion",tooltipBorderRadius:"20",showlabels:"0",showvalues:"0",bgAlpha:"0",plottooltext:"$label, Count: $Value ",paletteColors:"#2085ec,#72b4eb,#0a417a,#8464a0,#cea9bc",pieRadius:90},data:this.testbenchChart}}modeDistribution(){this.dataSourceRequest={chart:{showPercentInTooltip:"0",showlegend:!0,legendWidth:"350",legendHeight:"350",legendPosition:"right",legendItemFontSize:"12",theme:"fusion",tooltipBorderRadius:"20",showlabels:"0",showvalues:"0",plottooltext:"$label, Count: $Value ",paletteColors:"#2085ec,#72b4eb,#0a417a,#8464a0,#cea9bc",pieRadius:90},data:this.createdby}}filterNotes(e,a=!0){if(a)if(this.selectedDataPlot){if(this.selectedDataPlot==e)return this.notes=this.tempNotes,this.sliceNotes(this.page),void(this.selectedDataPlot=void 0)}else this.selectedDataPlot=e;const o=this.tempNotes.filter(s=>{if(Object.entries(s).some(p=>{let l=p[1]?.toString();return!!l&&(e.startsWith("TestBench")&&"TestBenchNo"==p[0]&&(l="TestBench "+l),a?l==e:l.toLowerCase().includes(e.toLowerCase()))}))return s});this.notes=o,this.sliceNotes(this.page)}exportToCSV(){const e=[];this.selectedNotes.map(r=>{e.push([r.ProjectId,r.ProjectName,r.TestBenchNo,r.ProjectType,r.testno,r.remarks,r.uname,r.createddate,r.updateddate])}),e.unshift(["Project ID","Project Name","Test Bench","Project Type","Test Run No.","Remark","Created By","Created Time","Modified Time"]);const o=T.P6.aoa_to_sheet(e),s=T.P6.decode_range(o["!ref"]);for(let r=s.s.r;r<=s.e.r;++r)for(let p=s.s.c;p<=s.e.c;++p){const l=T.P6.encode_cell({r,c:p});o[l]&&(o[l].s||(o[l].s={}),o[l].s.alignment={horizontal:"center",vertical:"center"})}const n=T.P6.book_new();T.P6.book_append_sheet(n,o,"Sheet1"),T.NC(n,"user_list.xlsx")}openDateTimeModal(){const o={startDate:(0,D.p6)(new Date(this.jsStartDate),"YYYY-MM-dd HH:mm:ss","en_US"),endDate:(0,D.p6)(new Date(this.jsEndDate),"YYYY-MM-dd HH:mm:ss","en_US")},s=this.modalService.open(Z.Z);s.componentInstance.inputData=o,s.result.then(n=>{const p=new Intl.DateTimeFormat("en-GB",{hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),l=new Date(n.dateData.startDate.year,n.dateData.startDate.month-1,n.dateData.startDate.day,n.dateData.startTime.hour,n.dateData.startTime.minute,0),g=p.format(l),S=new Date(n.dateData.endDate.year,n.dateData.endDate.month-1,n.dateData.endDate.day,n.dateData.endTime.hour,n.dateData.endTime.minute,0),y=p.format(S);this.formattedDateTimeRange=g+" - "+y,this.jsStartDate=l,this.jsEndDate=S},n=>{console.log(`Modal dismissed with: ${n}`)})}openModal(e){const a=this.selectedNotes[e],o={title:"Update User Note",nid:a.nid,projectId:a.ProjectId,testId:a.testno,remark:a.remarks,mode:"update"},s=this.modalService.open(E._,{size:"lg"});s.componentInstance.inputData=o,s.result.then(n=>{this.formatTimeModalDate(),this.getTestData()},n=>{console.log(`Modal dismissed with: ${JSON.stringify(n)}`)})}deleteNote(e){confirm("Are you sure you want to delete this record?")&&this.projectService.deleteUserNote(e).subscribe({next:a=>{this.toastService.show({template:"Note deleted successfully!!",classname:"bg-success",delay:3e3}),this.formatTimeModalDate(),this.getTestData()},error:a=>{console.error(a),this.toastService.show({template:"Failed to delete note!!",classname:"bg-danger",delay:3e3})}})}sliceNotes(e){this.selectedNotes=this.notes.slice((e-1)*this.pageSize,e*this.pageSize)}formatTimeModalDate(){const e=new Date;e.setDate(e.getDate()-30),this.fromDate=this.formatDate(e),this.toDate=this.getCurrentDateTime();const o=new Intl.DateTimeFormat("en-GB",{hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),s=new Date;this.jsEndDate=s;const n=o.format(s),r=e;this.jsStartDate=r,r.setDate(r.getDate());const p=o.format(r);this.formattedDateTimeRange=p+" - "+n}getCurrentDateTime(){return this.formatDate(new Date)}onSort({column:e,direction:a},o=""){if(this.headers)for(const s of this.headers)s.appSortable!==e&&(s.direction="");this.notes=""===a||""===e?this.tempNotes:"number"==o?[...this.tempNotes].sort((s,n)=>{const r=P(+s[e],+n[e]);return"asc"===a?r:-r}):"date"==o?[...this.tempNotes].sort((s,n)=>{const r=P(+new Date(s[e]),+new Date(n[e]));return"asc"===a?r:-r}):[...this.tempNotes].sort((s,n)=>{const r=P(s[e],n[e]);return"asc"===a?r:-r}),this.sliceNotes(this.page)}static#t=this.\u0275fac=function(a){return new(a||d)(t.Y36(M.t2),t.Y36(f.FF),t.Y36(U.k),t.Y36(i.u),t.Y36(h.r),t.Y36(_.W),t.Y36(m.Y),t.Y36(u.p))};static#e=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-user-notes"]],viewQuery:function(a,o){if(1&a&&t.Gf(A,5),2&a){let s;t.iGM(s=t.CRH())&&(o.headers=s)}},standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[["class","user-notes",4,"ngIf"],[1,"user-notes"],[1,"filter","row","col-md-12"],[1,"searchbar","col-md-4"],[1,"feather","icon","icon-search"],["type","text","name","","id","","placeholder","Search",3,"ngModel","ngModelChange","keyup"],[1,"col-md-8","d-flex","justify-content-end","dateRangePicker"],[1,"custom-datetime-range-span",3,"click"],[1,"fas","fa-calendar"],[1,"notes-list"],[1,"row"],[1,"col-md-6"],["cardTitle","User Note on TestBench ",3,"options"],["width","100%","height","230",3,"type","dataFormat","dataSource","dataplotClick"],["cardTitle","User Note Created By",3,"options"],[3,"hidHeader","options"],[1,"export","d-flex","justify-content-end"],[1,"btn","btn-success",3,"click"],[1,"fa","fa-file-csv","fw-bolder"],[1,"table-responsive"],[1,"table","table-styling"],["appSortable","ProjectId","scope","col",3,"sort"],["appSortable","ProjectName","scope","col",3,"sort"],["appSortable","TestBenchNo","scope","col",3,"sort"],["appSortable","ProjectType","scope","col",3,"sort"],["appSortable","testno","scope","col",3,"sort"],["appSortable","remarks","scope","col",3,"sort"],["appSortable","uname","scope","col",3,"sort"],["appSortable","createddate","scope","col",3,"sort"],["appSortable","updateddate","scope","col",3,"sort"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","align-items-center","gap-3"],[1,"m-0",3,"pageSize","collectionSize","page","pageChange"],[1,"text-center"],["role","button",1,"icon","feather","icon-edit","text-success","fs-5",3,"click"],["class","text-center",4,"ngIf"],["role","button",1,"icon","feather","icon-trash-2","text-danger","fs-5",3,"click"]],template:function(a,o){1&a&&(t._UZ(0,"ngx-spinner"),t.YNc(1,I,54,19,"div",0)),2&a&&(t.xp6(1),t.Q6J("ngIf",!o.showSpinner))},dependencies:[D.ez,D.sg,D.O5,D.uU,b.m,x.Fj,x.JJ,x.On,H.A,f.N9,M.Ro,M.ef,v.Qf,v.PZ,A],styles:['.searchbar{background-color:#ddd;padding:2px 8px;display:flex;align-items:center;border-radius:20px;max-height:26px}  .searchbar .feather{font-size:15px}  .searchbar input{flex:1;background-color:transparent;border:0;outline:0}  .custom-datetime-range-span{padding:2px 8px;border:solid 1px rgb(206,212,218);border-radius:20px}  .custom-datetime-range-span i{margin-right:15px}  .card-body{padding:15px 10px!important}  .card-header{padding:15px!important}  .filter{margin:10px 0}  table tbody tr{cursor:pointer}  table tbody tr:hover{background-color:#d3d3d3}  table thead th[appSortable]{cursor:pointer;-webkit-user-select:none;user-select:none}  table thead th[appSortable]:after{font-family:"Font Awesome 5 Free";margin-left:5px}  table thead th[appSortable].asc:after{content:"\\f062"}  table thead th[appSortable].desc:after{content:"\\f063"}']})}return d})()}}]);