"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[474],{474:(O,D,i)=>{i.r(D),i.d(D,{default:()=>g});var o=i(6814),_=i(7818),n=i(1687),T=i(239),t=i(9468),M=i(9074),c=i(8642),E=i(4277),e=i(5399),a=i(6686),s=i(220);function r(m,U){1&m&&t._UZ(0,"i",8)}function p(m,U){if(1&m){const l=t.EpF();t.TgZ(0,"i",9),t.NdJ("click",function(){t.CHM(l);const u=t.oxw().$implicit,v=t.oxw();return t.KtG(v.stopBench(u.Group,u.ProjectId,u.TestRunCount,u.Status))}),t.qZA()}}function d(m,U){if(1&m&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td",5),t.YNc(14,r,1,0,"i",6),t.YNc(15,p,1,0,"i",7),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.ALo(20,"date"),t.qZA()()),2&m){const l=U.$implicit,h=U.index;t.xp6(2),t.Oqu(h+1),t.xp6(2),t.Oqu(l.TestBenchName),t.xp6(2),t.Oqu(l.PanelName),t.xp6(2),t.Oqu(l.ProjectType),t.xp6(2),t.Oqu(l.ProjectId),t.xp6(2),t.Oqu(l.ProjectName),t.xp6(2),t.Q6J("ngIf","Idle"==l.Status||"Stop"==l.Status),t.xp6(1),t.Q6J("ngIf","Running"==l.Status||"Starting"==l.Status),t.xp6(2),t.Oqu(l.ReasonOfStop),t.xp6(2),t.Oqu(t.Dn7(20,10,l.LastStopDate,"dd/MM/yyyy, HH:mm:ss","UTC"))}}let g=(()=>{class m{constructor(l,h,u,v,f){this.headerService=l,this.router=h,this.maintenanceToolService=u,this.modalService=v,this.idleTimerService=f,l.setHeaderName("Remote Operation")}ngOnInit(){this.intervalSubscription=(0,n.F)(5e3).subscribe(()=>{this.getOperationData()}),this.idleTimerService.setupIdle(),this.idleTimerService.resetIdleTimer()}getOperationData(){this.maintenanceToolService.getOperations().subscribe(l=>{l.map((h,u)=>{"Running"==h.Status&&(l[u].ReasonOfStop="-",l[u].LastStopDate="-")}),this.operationList=l})}stopBench(l,h,u,v){this.projectId=h,this.status=v,this.testno=u,this.group=l,this.toggleRemoteStop()}toggleRemoteStop(){if("Running"!==this.status)return;const l={group:this.group,projectId:this.projectId,testId:this.testno},h=this.modalService.open(T.A,{size:"lg"});h.componentInstance.inputData=l,h.result.then(u=>{},u=>{console.log(`Modal dismissed with: ${JSON.stringify(u)}`)})}ngOnDestroy(){this.intervalSubscription&&this.intervalSubscription.unsubscribe()}static#t=this.\u0275fac=function(h){return new(h||m)(t.Y36(M.r),t.Y36(c.F0),t.Y36(E.W),t.Y36(e.FF),t.Y36(a.p))};static#e=this.\u0275cmp=t.Xpm({type:m,selectors:[["app-remote-operation"]],standalone:!0,features:[t.jDz],decls:35,vars:2,consts:[["cardTitle","Remote Operation",3,"options"],[1,"row","justify-content-end"],[1,"table-responsive"],[1,"table","table-styling"],[4,"ngFor","ngForOf"],[1,"td-i"],["aria-hidden","true","class","fa fa-stop-circle","style","color: rgba(206, 50, 50, 0.884);",4,"ngIf"],["aria-hidden","true","class","fa fa-play-circle","style","color: rgba(19, 133, 19, 0.884);",3,"click",4,"ngIf"],["aria-hidden","true",1,"fa","fa-stop-circle",2,"color","rgba(206, 50, 50, 0.884)"],["aria-hidden","true",1,"fa","fa-play-circle",2,"color","rgba(19, 133, 19, 0.884)",3,"click"]],template:function(h,u){1&h&&(t.TgZ(0,"app-card",0)(1,"div",1)(2,"div",2)(3,"table",3)(4,"thead")(5,"tr")(6,"th")(7,"span"),t._uU(8,"Sr. No."),t.qZA()(),t.TgZ(9,"th")(10,"span"),t._uU(11,"Test Bench"),t.qZA()(),t.TgZ(12,"th")(13,"span"),t._uU(14,"IOT Panel"),t.qZA()(),t.TgZ(15,"th")(16,"span"),t._uU(17,"Project Type"),t.qZA()(),t.TgZ(18,"th")(19,"span"),t._uU(20,"Project ID"),t.qZA()(),t.TgZ(21,"th")(22,"span"),t._uU(23,"Project Name"),t.qZA()(),t.TgZ(24,"th")(25,"span"),t._uU(26,"Test Bench Status"),t.qZA()(),t.TgZ(27,"th")(28,"span"),t._uU(29,"Last Stop Reason"),t.qZA()(),t.TgZ(30,"th")(31,"span"),t._uU(32,"Last Stop Date"),t.qZA()()()(),t.TgZ(33,"tbody"),t.YNc(34,d,21,14,"tr",4),t.qZA()()()()()),2&h&&(t.Q6J("options",!1),t.xp6(34),t.Q6J("ngForOf",u.operationList))},dependencies:[o.ez,o.sg,o.O5,o.uU,_.m,s.A],styles:["i.fa[_ngcontent-%COMP%]{font-size:18px}"]})}return m})()},6686:(O,D,i)=>{i.d(D,{p:()=>M});var o=i(8171),_=i(9468),n=i(6497),T=i(8642),t=i(5399);let M=(()=>{class c{constructor(e,a,s,r){this.idle=e,this.keepalive=a,this.router=s,this.modalService=r}setupIdle(){this.idle.setIdle(1200),this.idle.setTimeout(30),this.idle.setInterrupts(o.WO),this.idle.onIdleEnd.subscribe(()=>{this.dismissModal("No Longer Idle"),console.log("No longer idle.")}),this.idle.onTimeout.subscribe(()=>{this.timedOut()}),this.idle.onIdleStart.subscribe(()=>{}),this.idle.onTimeoutWarning.subscribe(e=>{console.log("You will time out in "+e+" seconds!")}),this.keepalive.interval(15),this.keepalive.onPing.subscribe(()=>this.updateLastPing())}resetIdleTimer(){this.idle.watch()}dismissModal(e){this.modalService.dismissAll(e)}timedOut(){console.log("Timed out!"),localStorage.clear(),this.router.navigate(["/"])}StopIdle(){this.idle.stop()}updateLastPing(){console.log("Keepalive ping received.")}static#t=this.\u0275fac=function(a){return new(a||c)(_.LFG(o.hX),_.LFG(n.A),_.LFG(T.F0),_.LFG(t.FF))};static#e=this.\u0275prov=_.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},589:(O,D,i)=>{i.d(D,{Y:()=>M});var o=i(5449),_=i(6814),n=i(9468),T=i(9862),t=i(7635);let M=(()=>{class c{constructor(e,a){this.http=e,this.authService=a}getLastRunData(){return this.http.get(`${o.N.apiUrl}/getLastRunData`)}getListView(e,a){return this.http.post(`${o.N.apiUrl}/getListView`,{fromDate:e,toDate:a})}getProjectDetails(e){return this.http.post(`${o.N.apiUrl}/getProjectDetails`,{id:e})}getCurrentBenchDetails(e){return this.http.post(`${o.N.apiUrl}/getCurrentBenchDetails`,{id:e})}getTableData(e,a,s,r){return this.http.post(`${o.N.apiUrl}/getRunningStats`,{id:e,no:a,start:s,end:r})}getProjectAnalysis(e,a){return this.http.post(`${o.N.apiUrl}/getProjectAnalysis`,{id:e,no:a})}getTestBenchSequence(e,a){return this.http.post(`${o.N.apiUrl}/getTestBenchseq`,{id:e,no:a})}getTimeSeriesById(e,a,s){return this.http.post(`${o.N.apiUrl}/getTimeSeriesbyid`,{projectConfig:e,id:a,no:s})}getTimeSeriesByIdForRunPro(e,a,s,r){return this.http.post(`${o.N.apiUrl}/getTimeSeriesDatabyid`,{id:e,no:a,start:s,end:r})}getProjectRunTime(e,a){return this.http.post(`${o.N.apiUrl}/getProjectTime`,{id:e,no:a})}getUpdatePanelStatus(e,a,s,r,p,d){const g=this.authService.getFullNameFromToken();return this.http.post(`${o.N.apiUrl}/UpdatePanelStatus`,{group:e,status:a,date:s,message:r,uid:g.uid,projectid:p,no:d})}getAnalysisData(e,a,s,r){return this.http.post(`${o.N.apiUrl}/getAnalysisData`,{id:e,start:a,end:s,data:r})}createMaintenance(e,a,s,r,p){const d=this.authService.getFullNameFromToken(),g=(0,_.p6)(new Date,"YYYY-MM-dd HH:mm:ss","en_US"),m=(0,_.p6)(new Date,"YYYY-MM-dd HH:mm:ss","en_US"),U=(0,_.p6)(new Date(p),"YYYY-MM-dd HH:mm:ss","en_US");return this.http.post(`${o.N.apiUrl}/CreateMaintenance`,{data:{projectid:e,testno:a,reason:s,desc:r,createuid:d.uid,updateid:d.uid,createdate:g,updatedate:m,issuecreateddate:U}})}selectUpdateMaintenance(e,a,s,r){const p=this.authService.getFullNameFromToken(),d=(0,_.p6)(new Date(r),"YYYY-MM-dd HH:mm:ss","en_US"),g=(0,_.p6)(new Date,"YYYY-MM-dd HH:mm:ss","en_US");return this.http.post(`${o.N.apiUrl}/UpdateMaintenance`,{mid:e,data:[`reason='${a}'`,`description='${s}'`,`updatedbyid=${p.uid}`,`updateddate='${g}'`,`issuecreateddate='${d}'`]})}deleteMaintenance(e){return this.http.post(`${o.N.apiUrl}/deleteMaintenance`,{mid:e})}createNote(e,a,s,r,p){const g={uid:this.authService.getFullNameFromToken().uid,projectid:e,testno:a,remarks:s,updateddate:p,createddate:r};return this.http.post(`${o.N.apiUrl}/CreateNote`,{data:g})}createFav(e,a,s,r){const d={uid:this.authService.getFullNameFromToken().uid,projectid:e,testno:a,favremark:s,updatedate:r,status:!0};return this.http.post(`${o.N.apiUrl}/CreateFav`,{data:d})}updateUserNote(e,a){const s=(0,_.p6)(new Date,"YYYY-MM-dd HH:mm:ss","en_US");return this.http.post(`${o.N.apiUrl}/UpdateNote`,{id:e,data:[`remarks='${a}'`,`updateddate='${s}'`]})}deleteUserNote(e){return this.http.post(`${o.N.apiUrl}/deleteNote`,{id:e})}deleteFav(e){return this.http.post(`${o.N.apiUrl}/deleteFav`,{fid:e})}getAttach(e,a,s,r,p,d){return this.http.post(`${o.N.apiUrl}/getSeriesReport`,{projectId:e,headers:a,value:s,match:r,fromDate:p,toDate:d},{responseType:"blob"})}getAmbientData(e,a,s){return this.http.post(`${o.N.apiUrl}/getAmbiantData`,{data:s,start:e,end:a})}getAmbientReport(e,a,s){return this.http.post(`${o.N.apiUrl}/getAmbiantReport`,{data:s,start:e,end:a},{responseType:"blob"})}getGroupCReport(e,a){return this.http.post(`${o.N.apiUrl}/getGroupCReport`,{start:e,end:a},{responseType:"blob"})}getAlarmReport(e,a){return this.http.post(`${o.N.apiUrl}/getAlarmReport`,{start:e,end:a},{responseType:"blob"})}getTankReport(e,a,s){return this.http.post(`${o.N.apiUrl}/getTankReport`,{data:s,start:e,end:a},{responseType:"blob"})}getAlarmData(e,a){return this.http.post(`${o.N.apiUrl}/getAlarmData`,{start:e,end:a})}getGroupCData(e,a){return this.http.post(`${o.N.apiUrl}/getAllGroupC`,{start:e,end:a})}static#t=this.\u0275fac=function(a){return new(a||c)(n.LFG(T.eN),n.LFG(t.u))};static#e=this.\u0275prov=n.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},239:(O,D,i)=>{i.d(D,{A:()=>E});var o=i(6814),_=i(7818),n=i(9468),T=i(5399),t=i(589),M=i(7911),c=i(6223);let E=(()=>{class e{constructor(s,r,p){this.activeModal=s,this.projectService=r,this.toastService=p,this.remark=""}ngOnInit(){console.log(this.inputData)}selectDataAndClose(){console.log(this.inputData,"inpurt data"),this.remark?this.activeModal.close({isSearch:!0,data:"successs"}):this.toastService.show({template:"Please enter the reason",classname:"bg-danger",delay:3e3})}stopRemote(){const s=new Date,r=(0,o.p6)(s,"YYYY-MM-dd HH:mm:ss","en_US");this.projectService.getUpdatePanelStatus(this.inputData.group,!1,r,this.remark,this.inputData.projectId,this.inputData.testId).subscribe(p=>{localStorage.setItem("data",JSON.stringify({group:this.inputData.group,date:s})),this.toastService.show({template:"Please wait while we update your command",classname:"bg-info",delay:3e3}),this.closeModal()})}closeModal(){this.activeModal.dismiss({isSearch:!1})}static#t=this.\u0275fac=function(r){return new(r||e)(n.Y36(T.Kz),n.Y36(t.Y),n.Y36(M.k))};static#e=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-remote-stop-modal"]],inputs:{inputData:"inputData"},standalone:!0,features:[n.jDz],decls:22,vars:1,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],[1,"form-group"],["for",""],["name","remark",1,"form-control",3,"ngModel","ngModelChange"],[1,"row","justify-content-end"],[1,"col-xl-2","col-md-2"],["type","button","ngbAutofocus","",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-check"],["type","button",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-times"]],template:function(r,p){1&r&&(n.TgZ(0,"div",0)(1,"h6",1),n._uU(2,"Remote Stop"),n.qZA(),n.TgZ(3,"button",2),n.NdJ("click",function(){return p.closeModal()}),n.TgZ(4,"span",3),n._uU(5,"\xd7"),n.qZA()()(),n.TgZ(6,"div",4)(7,"div",5)(8,"form")(9,"div",6)(10,"label",7),n._uU(11,"Remarks:"),n.qZA(),n.TgZ(12,"textarea",8),n.NdJ("ngModelChange",function(g){return p.remark=g}),n.qZA()()()(),n.TgZ(13,"div",9)(14,"div",10)(15,"button",11),n.NdJ("click",function(){return p.stopRemote()}),n._UZ(16,"i",12),n._uU(17," Submit "),n.qZA()(),n.TgZ(18,"div",10)(19,"button",13),n.NdJ("click",function(){return p.closeModal()}),n._UZ(20,"i",14),n._uU(21," Cancel "),n.qZA()()()()),2&r&&(n.xp6(12),n.Q6J("ngModel",p.remark))},dependencies:[o.ez,_.m,c._Y,c.Fj,c.JJ,c.JL,c.On,c.F]})}return e})()}}]);