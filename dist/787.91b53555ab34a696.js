"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[787],{787:(C,u,o)=>{o.r(u),o.d(u,{default:()=>E});var p=o(6814),h=o(7818),e=o(9468),g=o(9074),v=o(5738),f=o(7911),m=o(6686),R=o(6223),d=o(220);const _=function(n,c){return{"bg-info":n,"bg-trans":c}};function A(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"tr",11),e.NdJ("click",function(s){const r=e.CHM(t).index,l=e.oxw();return e.KtG(l.handleRoleRowClick(s,r))}),e.TgZ(1,"td"),e._UZ(2,"i",12),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"date"),e.qZA(),e.TgZ(8,"td")(9,"div",13)(10,"input",14),e.NdJ("ngModelChange",function(s){const r=e.CHM(t).$implicit;return e.KtG(r.status=s)}),e.qZA()()()()}if(2&n){const t=c.$implicit,a=c.index,s=e.oxw();e.Q6J("ngClass",e.WLB(9,_,a===s.activeRow,a!==s.activeRow)),e.xp6(4),e.Oqu(t.rolename),e.xp6(2),e.Oqu(e.Dn7(7,5,t.createddatetime,"dd/MM/yyyy HH:mm:ss","UTC")),e.xp6(4),e.Q6J("checked",t.status)("ngModel",t.status)}}function b(n,c){if(1&n){const t=e.EpF();e.TgZ(0,"div",18)(1,"input",19),e.NdJ("change",function(s){e.CHM(t);const i=e.oxw().$implicit,r=e.oxw();return e.KtG(r.handleAccessChange(s,i.title))}),e.qZA(),e.TgZ(2,"label",20),e._uU(3),e.qZA()()}if(2&n){const t=c.$implicit;e.xp6(1),e.s9C("id",t.apiname),e.Q6J("checked",t.isActive),e.xp6(1),e.s9C("for",t.apiname),e.xp6(1),e.hij(" ",t.name," ")}}function D(n,c){if(1&n&&(e.TgZ(0,"app-card",15)(1,"div",16),e.YNc(2,b,4,4,"div",17),e.qZA()()),2&n){const t=c.$implicit;e.s9C("cardTitle",t.title),e.Q6J("options",!1),e.xp6(2),e.Q6J("ngForOf",t.properties)}}function T(n,c){1&n&&e._uU(0," Updated Successfully!!\n")}let E=(()=>{class n{constructor(t,a,s,i){this.headerService=t,this.baseService=a,this.toastService=s,this.idleTimerService=i,this.roles=[],this.acessDetails=[],this.tbRole="",this.roleAdded=!1,this.activeRow=-1,t.setHeaderName("User Access and Role")}updateAccessDetails(){this.acessDetails=[{title:"Dashboard Access",properties:[{name:"NPD Lab",apiname:"labdash",isActive:-1!=this.activeRow&&this.roles[this.activeRow].labdash},{name:"Running Project",apiname:"runningprojectdash",isActive:-1!=this.activeRow&&this.roles[this.activeRow].runningprojectdash},{name:"History Project",apiname:"historicalprojects",isActive:-1!=this.activeRow&&this.roles[this.activeRow].historicalprojects}]},{title:"Analysis",properties:[{name:"Project Analysis",apiname:"dataanalysis",isActive:-1!=this.activeRow&&this.roles[this.activeRow].dataanalysis},{name:"Project Report",apiname:"logreport",isActive:-1!=this.activeRow&&this.roles[this.activeRow].logreport},{name:"Environment Report",apiname:"envreport",isActive:-1!=this.activeRow&&this.roles[this.activeRow].envreport},{name:"Process Report",apiname:"processreport",isActive:-1!=this.activeRow&&this.roles[this.activeRow].processreport}]},{title:"Maitenance Access",properties:[{name:"User Management",apiname:"usermanagment",isActive:-1!=this.activeRow&&this.roles[this.activeRow].usermanagment},{name:"Remote Op.",apiname:"remoteoperation",isActive:-1!=this.activeRow&&this.roles[this.activeRow].remoteoperation},{name:"Maintenance Log",apiname:"maintenancetool",isActive:-1!=this.activeRow&&this.roles[this.activeRow].maintenancetool},{name:"User Note",apiname:"usernote",isActive:-1!=this.activeRow&&this.roles[this.activeRow].usernote}]}]}ngOnInit(){this.getAllRoles(),this.idleTimerService.setupIdle(),this.idleTimerService.resetIdleTimer()}getAllRoles(){this.baseService.getRoles().subscribe(t=>{this.roles=t,this.updateAccessDetails()})}handleRoleChange(t){this.tbRole=t.target.value}handleAddRole(){if(""===this.tbRole||this.roleAdded)return;if(this.roles.some(i=>i.rolename===this.tbRole))return void this.toastService.show({template:"Role already exist in system",delay:5e3,classname:"bg-danger"});const a=(new Date).toLocaleDateString("ko-kr").slice(0,-1).replaceAll(". ","-"),s={roleid:this.roles.length+1,rolename:this.tbRole,createddatetime:a,status:!0,createdbyid:1,labdash:!1,runningprojectdash:!1,historicalprojects:!1,dataanalysis:!1,logreport:!1,maintenancetool:!1,remoteoperation:!1,alarmaccess:!1,usermanagment:!1,envreport:!1,groupcreport:!1,usernote:!1,processreport:!1,eodd:!1,aodd:!1};this.roles.push(s),this.roleAdded=!0,this.tbRole="",this.activeRow=s.roleid-1,this.updateAccessDetails()}handleRoleRowClick(t,a){this.activeRow=a,this.updateAccessDetails()}handleAccessChange(t,a){const s=t.target,i=s.id;if(-1===this.activeRow)return;const r=this.acessDetails.map(l=>(l.title==a&&(l.properties=l.properties.map(M=>(M.apiname==i&&(M.isActive=s.checked),M))),l));this.acessDetails=r}handleSubmit(){const t=this.acessDetails.map(i=>i.properties.map(l=>`${l.apiname}=${l.isActive}`));if(console.log(this.roleAdded,"this.roleAdded"),this.roleAdded){var a={id:1,labdash:!1,running:!1,historical:!1,datananlysis:!1,logreport:!1,maintenancetool:!1,remoteoperation:!1,alarmaccess:!1,usermanagment:!1,groupcreport:!1,eodd:!1,aodd:!1};return this.acessDetails.map(i=>{i.properties.map(r=>{if(r.apiname){let l=r.apiname;"runningprojectdash"==l?l="running":"historicalprojects"==l?l="historical":"dataanalysis"==l&&(l="datananlysis"),a[l]=r.isActive}})}),a.name=this.roles[this.activeRow].rolename,a.status=!0,a.date=(new Date).toLocaleString(),void this.baseService.insertRole(a).subscribe(i=>{this.getAllRoles(),"Found Duplicate"==i.message?this.toastService.show({template:i.message,delay:3e3,classname:"bg-danger"}):(this.toastService.show({template:i.message,delay:3e3,classname:"bg-success"}),this.roleAdded=!1)})}const s=t.flat();s.push(`status=${this.roles[this.activeRow].status}`),this.baseService.updateRole(this.roles[this.activeRow].roleid,s).subscribe(i=>{this.getAllRoles(),this.toastService.show({template:i.message,delay:3e3,classname:"bg-success"})})}static#e=this.\u0275fac=function(a){return new(a||n)(e.Y36(g.r),e.Y36(v.b),e.Y36(f.k),e.Y36(m.p))};static#t=this.\u0275cmp=e.Xpm({type:n,selectors:[["app-role-management"]],standalone:!0,features:[e.jDz],decls:15,vars:7,consts:[["cardTitle","Roles Management","blockClass","table-border-style",3,"options","customDate"],[1,"app-card-subheader","mt-3","d-flex","gap-3"],["type","text","placeholder","New Role",1,"form-control","w-25",3,"value","disabled","change"],[1,"btn","btn-success",3,"disabled","click"],[1,"table-responsive"],[1,"table","table-styling"],[3,"ngClass","click",4,"ngFor","ngForOf"],[3,"cardTitle","options",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end"],[1,"btn","btn-primary",3,"click"],["updateSuccess",""],[3,"ngClass","click"],[1,"icon","feather","icon-user"],[1,"form-check","form-switch"],["type","checkbox","role","switch","id","flexSwitchCheckDefault",1,"form-check-input",3,"checked","ngModel","ngModelChange"],[3,"cardTitle","options"],[1,"properties","d-flex","gap-3"],["class","property",4,"ngFor","ngForOf"],[1,"property"],["type","checkbox",1,"d-none",3,"id","checked","change"],[1,"p-4","border","br-4",3,"for"]],template:function(a,s){1&a&&(e.TgZ(0,"app-card",0)(1,"div",1)(2,"input",2),e.NdJ("change",function(r){return s.handleRoleChange(r)}),e.qZA(),e.TgZ(3,"button",3),e.NdJ("click",function(){return s.handleAddRole()}),e._uU(4,"Add Role"),e.qZA()(),e.TgZ(5,"div",4)(6,"table",5)(7,"tbody"),e.YNc(8,A,11,12,"tr",6),e.qZA()()()(),e.YNc(9,D,3,3,"app-card",7),e.TgZ(10,"div",8)(11,"button",9),e.NdJ("click",function(){return s.handleSubmit()}),e._uU(12,"Submit"),e.qZA()(),e.YNc(13,T,1,0,"ng-template",null,10,e.W1O)),2&a&&(e.Q6J("options",!1)("customDate",!0),e.xp6(2),e.Q6J("value",s.tbRole)("disabled",s.roleAdded),e.xp6(1),e.Q6J("disabled",s.roleAdded),e.xp6(5),e.Q6J("ngForOf",s.roles),e.xp6(1),e.Q6J("ngForOf",s.acessDetails))},dependencies:[p.ez,p.mk,p.sg,p.uU,h.m,R.Wl,R.JJ,R.On,d.A],styles:[".properties[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:linear-gradient(45deg,#2ed8b6,#59e0c5)!important}.br-4[_ngcontent-%COMP%]{border-radius:4px}"]})}return n})()},6686:(C,u,o)=>{o.d(u,{p:()=>f});var p=o(8171),h=o(9468),e=o(6497),g=o(2098),v=o(5399);let f=(()=>{class m{constructor(d,_,A,b){this.idle=d,this.keepalive=_,this.router=A,this.modalService=b}setupIdle(){this.idle.setIdle(1200),this.idle.setTimeout(30),this.idle.setInterrupts(p.WO),this.idle.onIdleEnd.subscribe(()=>{this.dismissModal("No Longer Idle"),console.log("No longer idle.")}),this.idle.onTimeout.subscribe(()=>{this.timedOut()}),this.idle.onIdleStart.subscribe(()=>{}),this.idle.onTimeoutWarning.subscribe(d=>{console.log("You will time out in "+d+" seconds!")}),this.keepalive.interval(15),this.keepalive.onPing.subscribe(()=>this.updateLastPing())}resetIdleTimer(){this.idle.watch()}dismissModal(d){this.modalService.dismissAll(d)}timedOut(){console.log("Timed out!"),localStorage.clear(),this.router.navigate(["/"])}StopIdle(){this.idle.stop()}updateLastPing(){console.log("Keepalive ping received.")}static#e=this.\u0275fac=function(_){return new(_||m)(h.LFG(p.hX),h.LFG(e.A),h.LFG(g.F0),h.LFG(v.FF))};static#t=this.\u0275prov=h.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()}}]);