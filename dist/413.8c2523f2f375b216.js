"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[413],{8193:(E,j,d)=>{d.d(j,{Z:()=>f});var i=d(9468),t=d(6814),x=d(7818),b=d(8351),T=d(5399),M=d(6223);function v(D,P){if(1&D){const c=i.EpF();i.TgZ(0,"span",18),i.NdJ("mouseenter",function(){const h=i.CHM(c).$implicit,m=i.oxw();return i.KtG(m.hoveredDate=h)})("mouseleave",function(){i.CHM(c);const _=i.oxw();return i.KtG(_.hoveredDate=null)}),i._uU(1),i.qZA()}if(2&D){const c=P.$implicit,l=P.focused,_=i.oxw();i.ekj("focused",l)("range",_.isRange(c))("faded",_.isHovered(c)||_.isInside(c)),i.xp6(1),i.hij(" ",c.day," ")}}let f=(()=>{class D{constructor(c){this.activeModal=c,this.calendar=(0,i.f3M)(T.vL),this.hoveredDate=null,this.fromDate=this.calendar.getToday(),this.toDate=this.calendar.getNext(this.fromDate,"d",-1),this.currentDate=new Date,this.startTime={hour:this.currentDate.getHours(),minute:this.currentDate.getMinutes()},this.endTime={hour:this.currentDate.getHours(),minute:this.currentDate.getMinutes()}}ngOnInit(){const c=this.inputData.startDate,l=this.inputData.endDate;this.fromDate={year:c.getFullYear(),month:c.getMonth()+1,day:c.getDate()},this.toDate={year:l.getFullYear(),month:l.getMonth()+1,day:l.getDate()};const _=c.getHours(),h=c.getMinutes(),m=l.getHours(),S=l.getMinutes();this.startTime={hour:_,minute:h},this.endTime={hour:m,minute:S}}onDateSelection(c){this.fromDate||this.toDate?this.fromDate&&!this.toDate&&c.after(this.fromDate)?this.toDate=c:(this.toDate=null,this.fromDate=c):this.fromDate=c}isHovered(c){return this.fromDate&&!this.toDate&&this.hoveredDate&&c.after(this.fromDate)&&c.before(this.hoveredDate)}isInside(c){return this.toDate&&c.after(this.fromDate)&&c.before(this.toDate)}isRange(c){return c.equals(this.fromDate)||this.toDate&&c.equals(this.toDate)||this.isInside(c)||this.isHovered(c)}selectDataAndClose(){this.activeModal.close({isUpdated:!0,dateData:{startDate:this.fromDate,endDate:this.toDate,startTime:this.startTime,endTime:this.endTime}})}closeModal(){this.activeModal.dismiss({isUpdated:!1})}static#t=this.\u0275fac=function(l){return new(l||D)(i.Y36(T.Kz))};static#e=this.\u0275cmp=i.Xpm({type:D,selectors:[["app-datatime-range-modal"]],inputs:{inputData:"inputData"},standalone:!0,features:[i.jDz],decls:26,vars:4,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],["outsideDays","hidden",1,"range-datetimepicker",3,"displayMonths","dayTemplate","dateSelect"],["dp",""],["t",""],[1,"col-md-6","col-sm-6"],[3,"ngModel","ngModelChange"],[1,"row","justify-content-end"],[1,"col-xl-3","col-md-3","col-sm-6"],["type","button","ngbAutofocus","",1,"btn","btn-block","btn-primary","mb-4",3,"click"],[1,"fas","fa-check"],[1,"col-xl-4","col-md-3","col-sm-6"],["type","button",1,"btn","btn-block","btn-primary","mb-4",3,"click"],[1,"fas","fa-times"],[1,"custom-day",3,"mouseenter","mouseleave"]],template:function(l,_){if(1&l&&(i.TgZ(0,"div",0)(1,"h6",1),i._uU(2,"Select Date"),i.qZA(),i.TgZ(3,"button",2),i.NdJ("click",function(){return _.closeModal()}),i.TgZ(4,"span",3),i._uU(5,"\xd7"),i.qZA()()(),i.TgZ(6,"div",4)(7,"div",5)(8,"ngb-datepicker",6,7),i.NdJ("dateSelect",function(m){return _.onDateSelection(m)}),i.qZA(),i.YNc(10,v,2,7,"ng-template",null,8,i.W1O),i.qZA(),i.TgZ(12,"div",5)(13,"div",9)(14,"ngb-timepicker",10),i.NdJ("ngModelChange",function(m){return _.startTime=m}),i.qZA()(),i.TgZ(15,"div",9)(16,"ngb-timepicker",10),i.NdJ("ngModelChange",function(m){return _.endTime=m}),i.qZA()()(),i.TgZ(17,"div",11)(18,"div",12)(19,"button",13),i.NdJ("click",function(){return _.selectDataAndClose()}),i._UZ(20,"i",14),i._uU(21," Apply "),i.qZA()(),i.TgZ(22,"div",15)(23,"button",16),i.NdJ("click",function(){return _.closeModal()}),i._UZ(24,"i",17),i._uU(25," Cancel "),i.qZA()()()()),2&l){const h=i.MAs(11);i.xp6(8),i.Q6J("displayMonths",2)("dayTemplate",h),i.xp6(6),i.Q6J("ngModel",_.startTime),i.xp6(2),i.Q6J("ngModel",_.endTime)}},dependencies:[t.ez,x.m,M.JJ,M.On,T.VL,T.Pm,b.Qf],styles:[".modal-title{font-style:normal;font-weight:400}  .modal-header{padding:10px;justify-content:space-between}  .close{border-radius:50%;padding:0 8px;border-color:#666}  .modal-row-border{border-color:#ced4da;border-style:solid;border-width:.8px;border-radius:5px;padding:10px;margin:20px 10px}  .ml-10{margin-left:10px}  .mb-5{margin-bottom:5px}  .custom-day{text-align:center;padding:.185rem .25rem;display:inline-block;height:2rem;width:2rem}  .custom-day.focused{background-color:#e6e6e6}  .custom-day.range,   .custom-day:hover{background-color:#0275d8;color:#fff}  .custom-day.faded{background-color:#0275d880}  .range-datetimepicker{overflow-x:scroll}@media only screen and (max-width: 768px){  .col-sm-6{width:50%}}"]})}return D})()},1413:(E,j,d)=>{d.r(j),d.d(j,{NgbdSortableHeaderDirective:()=>w,default:()=>N});var i=d(6814),t=d(9468),x=d(8351),b=d(7818),T=d(5940),M=d(8193),v=d(7844),f=d(1486),D=d(9074),P=d(5399),c=d(589),l=d(8672),_=d(2098),h=d(6686),m=d(6223),S=d(220);function L(p,C){if(1&p){const e=t.EpF();t.TgZ(0,"tr",39),t.NdJ("click",function(){const o=t.CHM(e),a=o.index,r=o.$implicit,s=t.oxw(2);return t.KtG(s.handleRowClick(a,r.TestNo))}),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.ALo(19,"date"),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.ALo(22,"date"),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA(),t.TgZ(25,"td",39),t.NdJ("click",function(o){const r=t.CHM(e).$implicit,s=t.oxw(2);return t.KtG(s.openMaintenanceModal(o,r.ProjectId,r.TestNo))}),t._UZ(26,"i",40),t.qZA()()}if(2&p){const e=C.$implicit;t.xp6(2),t.Oqu(e.ProjectId),t.xp6(2),t.Oqu(null==e?null:e.ProjectName),t.xp6(2),t.Oqu(null==e?null:e.TestBenchNo),t.xp6(2),t.Oqu(null==e?null:e.ProjectType),t.xp6(2),t.Oqu(null==e?null:e.ProjectConfig),t.xp6(2),t.Oqu(null==e?null:e.ProjectNo),t.xp6(2),t.Oqu(null==e?null:e.ProjectOwner),t.xp6(2),t.Oqu(null==e?null:e.TestNo),t.xp6(2),t.Oqu(t.Dn7(19,11,null==e?null:e.StartDateTime,"dd/MM/yyyy HH:mm:ss","UTC")),t.xp6(3),t.Oqu(t.Dn7(22,15,null==e?null:e.EndDateTime,"dd/MM/yyyy HH:mm:ss","UTC")),t.xp6(3),t.Oqu(null==e?null:e.differnce)}}function A(p,C){if(1&p){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"div",4),t._UZ(3,"i",5),t.TgZ(4,"input",6),t.NdJ("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.tbSearchFilter=o)})("keyup",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.handleSearchChange())}),t.qZA()(),t.TgZ(5,"div",7)(6,"span",8),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.openDateTimeModal())}),t._UZ(7,"i",9),t._uU(8),t.qZA(),t.TgZ(9,"button",10),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.handleResetFilters())}),t._UZ(10,"i",11),t.qZA()()(),t.TgZ(11,"div",12)(12,"div",13)(13,"div",14)(14,"app-card",15)(15,"fusioncharts",16),t.NdJ("dataplotClick",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.handleDataPlotClick(o))}),t.qZA()()(),t.TgZ(16,"div",14)(17,"app-card",17)(18,"fusioncharts",16),t.NdJ("dataplotClick",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.handleDataPlotClick(o))}),t.qZA()()(),t.TgZ(19,"div",14)(20,"app-card",18)(21,"fusioncharts",16),t.NdJ("dataplotClick",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.handleDataPlotClick(o))}),t.qZA()()()(),t.TgZ(22,"div")(23,"app-card",19)(24,"div",20)(25,"button",21),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.exportToCSV())}),t._UZ(26,"i",22),t._uU(27," Export "),t.qZA()(),t.TgZ(28,"div",23)(29,"table",24)(30,"thead")(31,"tr")(32,"th",25),t.NdJ("sort",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.onSort(o))}),t._uU(33,"Project ID"),t.qZA(),t.TgZ(34,"th",26),t.NdJ("sort",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.onSort(o))}),t._uU(35,"Project Name"),t.qZA(),t.TgZ(36,"th",27),t.NdJ("sort",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.onSort(o))}),t._uU(37,"Test Bench"),t.qZA(),t.TgZ(38,"th",28),t.NdJ("sort",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.onSort(o))}),t._uU(39,"Project Type"),t.qZA(),t.TgZ(40,"th",28),t.NdJ("sort",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.onSort(o))}),t._uU(41,"Project Config"),t.qZA(),t.TgZ(42,"th",29),t.NdJ("sort",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.onSort(o))}),t._uU(43,"Project Number"),t.qZA(),t.TgZ(44,"th",30),t.NdJ("sort",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.onSort(o))}),t._uU(45,"Owner"),t.qZA(),t.TgZ(46,"th",31),t.NdJ("sort",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.onSort(o))}),t._uU(47,"Test Run No."),t.qZA(),t.TgZ(48,"th",32),t.NdJ("sort",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.onSort(o))}),t._uU(49,"Project Start Time"),t.qZA(),t.TgZ(50,"th",33),t.NdJ("sort",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.onSort(o))}),t._uU(51,"Project End Time"),t.qZA(),t.TgZ(52,"th",34),t.NdJ("sort",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.onSort(o))}),t._uU(53,"Project Run Time"),t.qZA(),t.TgZ(54,"th"),t._uU(55,"Add Maintenance Log"),t.qZA()()(),t.TgZ(56,"tbody",35),t.YNc(57,L,27,19,"tr",36),t.qZA()(),t.TgZ(58,"div",37)(59,"span"),t._uU(60),t.qZA(),t.TgZ(61,"ngb-pagination",38),t.NdJ("pageChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.handlePageChange(o))})("pageChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.page=o)}),t.qZA()()()()()()()}if(2&p){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.tbSearchFilter),t.xp6(4),t.hij(" ",e.formattedDateTimeRange," "),t.xp6(6),t.Q6J("options",!1),t.xp6(1),t.Q6J("type",e.type)("dataFormat",e.dataFormat)("dataSource",e.dataSource),t.xp6(2),t.Q6J("options",!1),t.xp6(1),t.Q6J("type",e.type)("dataFormat",e.dataFormat)("dataSource",e.dataSourceTestBench),t.xp6(2),t.Q6J("options",!1),t.xp6(1),t.Q6J("type",e.type)("dataFormat",e.dataFormat)("dataSource",e.dataSourceMode),t.xp6(2),t.Q6J("hidHeader",!0)("options",!1),t.xp6(34),t.Q6J("ngForOf",e.selectedProjectsList),t.xp6(3),t.AsE("Page ",(e.page-1)*e.pageSize," - ",e.page*e.pageSize>e.projectsList.length?e.projectsList.length:e.page*e.pageSize," "),t.xp6(1),t.Q6J("pageSize",e.pageSize)("collectionSize",null==e.projectsList?null:e.projectsList.length)("page",e.page)}}const O={asc:"desc",desc:"","":"asc"},Z=(p,C)=>p<C?-1:p>C?1:0;let w=(()=>{class p{constructor(){this.appSortable="",this.direction="",this.sort=new t.vpe}rotate(){this.direction=O[this.direction],this.sort.emit({column:this.appSortable,direction:this.direction})}static#t=this.\u0275fac=function(n){return new(n||p)};static#e=this.\u0275dir=t.lG2({type:p,selectors:[["th","appSortable",""]],hostVars:4,hostBindings:function(n,o){1&n&&t.NdJ("click",function(){return o.rotate()}),2&n&&t.ekj("asc","asc"===o.direction)("desc","desc"===o.direction)},inputs:{appSortable:"appSortable",direction:"direction"},outputs:{sort:"sort"},standalone:!0})}return p})(),N=(()=>{class p{constructor(e,n,o,a,r,s){this.headerService=e,this.modalService=n,this.projectService=o,this.spinner=a,this.router=r,this.idleTimerService=s,this.width="375",this.height="300",this.type="pie2d",this.dataFormat="json",this.page=1,this.pageSize=10,this.chart={showPercentInTooltip:"0",showlegend:"1",legendposition:"right",legendWidth:"350",legendHeight:"350",legendItemFontSize:"12",tooltipBorderRadius:"20",plottooltext:"$label, Count: $Value ",showLabels:"0",showValues:"0",bgAlpha:"0",theme:"fusion",pieRadius:90},this.dataSource={chart:this.chart,data:[]},this.dataSourceTestBench={chart:this.chart,data:[]},this.dataSourceMode={chart:this.chart,data:[]},this.showSpinner=!0,a.show(),this.headerService.setHeaderName("Historic List View")}ngOnInit(){this.formatTimeModalDate(),this.getTestData(),this.idleTimerService.setupIdle(),this.idleTimerService.resetIdleTimer()}getTestData(){this.projectService.getListView(this.fromDate,this.toDate).subscribe(e=>{this.projectsList=e.data,this.tempProjectsList=e.data,this.sliceProjects(this.page),this.dataSource.data=this.generateDataSource(this.projectsList,"ProjectType"),this.dataSourceTestBench.data=this.generateDataSource(this.projectsList,"TestBenchNo"),this.dataSourceMode.data=this.generateDataSource(this.projectsList,"ProjectConfig"),this.showSpinner=!1,this.spinner.hide()})}getCurrentDateTime(){return this.formatDate(new Date)}handlePageChange(e){this.sliceProjects(e)}handleSearchChange(){this.filterProjects(this.tbSearchFilter,!1)}handleRowClick(e,n){window.open(`${location.origin}#/project-analysis/${this.selectedProjectsList[e].ProjectId}/${n}`)}handleDataPlotClick(e){this.filterProjects(e.dataObj.categoryLabel??e.dataObj.datasetName)}handleResetFilters(){this.tbSearchFilter="",this.handleSearchChange(),this.formatTimeModalDate(),this.getTestData()}filterProjects(e,n=!0){if(n)if(this.selectedDataPlot){if(this.selectedDataPlot==e)return this.projectsList=this.tempProjectsList,this.sliceProjects(this.page),void(this.selectedDataPlot=void 0)}else this.selectedDataPlot=e;const o=this.tempProjectsList.filter(a=>{if(Object.entries(a).some(u=>{let g=u[1].toString();return e.startsWith("Test Bench")&&"TestBenchNo"==u[0]&&(g="Test Bench "+g),n?g==e:g.toLowerCase().includes(e.toLowerCase())}))return a});this.projectsList=o,this.sliceProjects(this.page)}openDateTimeModal(){const o={startDate:this.jsStartDate,endDate:this.jsEndDate},a=this.modalService.open(M.Z);a.componentInstance.inputData=o,a.result.then(r=>{const u=new Intl.DateTimeFormat("en-GB",{hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),g=new Date(r.dateData.startDate.year,r.dateData.startDate.month-1,r.dateData.startDate.day,r.dateData.startTime.hour,r.dateData.startTime.minute,0),U=u.format(g),y=new Date(r.dateData.endDate.year,r.dateData.endDate.month-1,r.dateData.endDate.day,r.dateData.endTime.hour,r.dateData.endTime.minute,0),R=u.format(y);this.formattedDateTimeRange=U+" - "+R,this.jsStartDate=g,this.jsEndDate=y,this.fromDate=this.formatDate(this.jsStartDate),this.toDate=this.formatDate(this.jsEndDate),this.getTestData()},r=>{console.log(`Modal dismissed with: ${r}`)})}exportToCSV(){const e=[];this.selectedProjectsList.map(s=>{e.push([s.ProjectId,s.ProjectName,s.TestBenchNo,s.ProjectType,s.ProjectConfig,s.ProjectNo,s.ProjectOwner,s.TestNo,s.StartDateTime,s.EndDateTime,s.differnce])}),e.unshift(["Project ID","Project Name","Test Bench","Project Type","Project Config","Project Number","Owner","Test Run No.","Project Start Time","Project End Time","Project Run Time"]);const o=f.P6.aoa_to_sheet(e),a=f.P6.decode_range(o["!ref"]);for(let s=a.s.r;s<=a.e.r;++s)for(let u=a.s.c;u<=a.e.c;++u){const g=f.P6.encode_cell({r:s,c:u});o[g]&&(o[g].s||(o[g].s={}),o[g].s.alignment={horizontal:"center",vertical:"center"})}const r=f.P6.book_new();f.P6.book_append_sheet(r,o,"Sheet1"),f.NC(r,"historic_list.xlsx")}openMaintenanceModal(e,n,o){e.stopPropagation();const a={projectId:n,testId:o,mode:"add"},r=this.modalService.open(v.l,{size:"lg"});r.componentInstance.inputData=a,r.result.then(s=>{},s=>{console.log(`Modal dismissed with: ${JSON.stringify(s)}`)})}onSort({column:e,direction:n},o=""){if(this.headers)for(const a of this.headers)a.appSortable!==e&&(a.direction="");""===n||""===e?(this.projectsList=this.tempProjectsList,this.sliceProjects(this.page)):(this.projectsList="number"==o?[...this.tempProjectsList].sort((a,r)=>{const s=Z(+a[e],+r[e]);return"asc"===n?s:-s}):"date"==o?[...this.tempProjectsList].sort((a,r)=>{const s=Z(+new Date(a[e]),+new Date(r[e]));return"asc"===n?s:-s}):[...this.tempProjectsList].sort((a,r)=>{const s=Z(a[e],r[e]);return"asc"===n?s:-s}),this.sliceProjects(this.page))}formatTimeModalDate(){const e=new Date;e.setDate(e.getDate()-30),this.fromDate=this.formatDate(e),this.toDate=this.getCurrentDateTime();const o=new Intl.DateTimeFormat("en-GB",{hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),a=new Date;this.jsEndDate=a;const r=o.format(a),s=e;this.jsStartDate=s;const u=o.format(s);this.formattedDateTimeRange=u+" - "+r}sliceProjects(e){this.selectedProjectsList=this.projectsList.slice((e-1)*this.pageSize,e*this.pageSize)}generateDataSource(e,n){const o=new Map;e.forEach(r=>{const s=r[n];o.has(s)?o.set(s,o.get(s)+1):o.set(s,1)});const a=[];return o.forEach((r,s)=>{a.push({label:"TestBenchNo"==n?`Test Bench ${s}`:s,value:r})}),a}formatDate(e){return`${e.getFullYear()}-${this.padZero(e.getMonth()+1)}-${this.padZero(e.getDate())}T${this.padZero(e.getHours())}:${this.padZero(e.getMinutes())}`}padZero(e){return e<10?`0${e}`:`${e}`}static#t=this.\u0275fac=function(n){return new(n||p)(t.Y36(D.r),t.Y36(P.FF),t.Y36(c.Y),t.Y36(l.t2),t.Y36(_.F0),t.Y36(h.p))};static#e=this.\u0275cmp=t.Xpm({type:p,selectors:[["app-project-list-view"]],viewQuery:function(n,o){if(1&n&&t.Gf(w,5),2&n){let a;t.iGM(a=t.CRH())&&(o.headers=a)}},standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[["type","ball-scale-multiple"],["class","historic-list",4,"ngIf"],[1,"historic-list"],[1,"filter","row","col-md-12"],[1,"searchbar","col-md-4"],[1,"feather","icon","icon-search"],["type","text","name","","id","","placeholder","Search Project Name, Num, Owner, Type...",3,"ngModel","ngModelChange","keyup"],[1,"col-md-8","d-flex","justify-content-end","dateRangePicker"],[1,"custom-datetime-range-span",3,"click"],[1,"fas","fa-calendar"],[1,"btn","btn-primary","btn-reset",3,"click"],[1,"fas","fa-history"],[1,"project-view"],[1,"row"],[1,"col-md-4"],["cardTitle","Type Distribution",3,"options"],["width","100%","height","250",3,"type","dataFormat","dataSource","dataplotClick"],["cardTitle","Test Bench Utilization",3,"options"],["cardTitle","Mode Distribution",3,"options"],[3,"hidHeader","options"],[1,"export","d-flex","justify-content-end"],[1,"btn","btn-success",3,"click"],[1,"fa","fa-file-csv","fw-bolder"],[1,"table-responsive"],[1,"table","table-styling","text-center"],["appSortable","ProjectId","scope","col",3,"sort"],["appSortable","ProjectName","scope","col",3,"sort"],["appSortable","TestBenchNo","scope","col",3,"sort"],["appSortable","ProjectType","scope","col",3,"sort"],["appSortable","ProjectNo","scope","col",3,"sort"],["appSortable","ProjectOwner","scope","col",3,"sort"],["appSortable","TestNo","scope","col",3,"sort"],["appSortable","StartDateTime","scope","col",3,"sort"],["appSortable","EndDateTime","scope","col",3,"sort"],["appSortable","differnce","scope","col",3,"sort"],[2,"font-size","12px"],[3,"click",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end","align-items-center","gap-3"],[1,"m-0",3,"pageSize","collectionSize","page","pageChange"],[3,"click"],[1,"icon","feather","icon-edit","text-success","fs-6"]],template:function(n,o){1&n&&(t._UZ(0,"ngx-spinner",0),t.YNc(1,A,62,22,"div",1)),2&n&&(t.xp6(1),t.Q6J("ngIf",!o.showSpinner))},dependencies:[i.ez,i.sg,i.O5,i.uU,b.m,m.Fj,m.JJ,m.On,S.A,P.N9,l.Ro,x.Qf,x.PZ,T.Cq,w],styles:['.historic-list .searchbar{background-color:#ddd;padding:2px 8px;display:flex;align-items:center;border-radius:20px;max-height:26px}  .historic-list .searchbar .feather{font-size:15px}  .historic-list .searchbar input{flex:1;background-color:transparent;border:0;outline:0}  .historic-list .custom-datetime-range-span{padding:2px 8px;border:solid 1px rgb(206,212,218);border-radius:20px}  .historic-list .custom-datetime-range-span i{margin-right:15px}  .historic-list .card-body{padding:15px 10px!important}  .historic-list .card-header{padding:15px!important}  .historic-list .filter{margin:10px 0}  .dateRangePicker{padding:0}  .dateRangePicker .btn-reset{padding:2px 8px;margin-left:5px}  table tbody tr{cursor:pointer}  table tbody tr:hover{background-color:#d3d3d3}  table thead th[appSortable]{cursor:pointer;-webkit-user-select:none;user-select:none}  table thead th[appSortable]:after{font-family:"Font Awesome 5 Free";margin-left:5px}  table thead th[appSortable].asc:after{content:"\\f062"}  table thead th[appSortable].desc:after{content:"\\f063"}@media only screen and (max-width: 768px){  .dateRangePicker{padding:0}}@media only screen and (max-width: 768px) and (max-width: 768px){  .dateRangePicker{margin:10px 0}}@media only screen and (max-width: 768px){  .btn-primary{margin:0 15px}}']})}return p})()}}]);