import{a as ce,b as _e,c as ke,d as I}from"./chunk-NOF2HH3H.js";import{a as ge,c as fe,e as be,g as he,h as ye,i as xe,k as ve}from"./chunk-HRVTV6JH.js";import{a as de}from"./chunk-CLZYDIPU.js";import{a as ue}from"./chunk-Z6BJ3VAL.js";import{e as P,i as Ce,o as Te}from"./chunk-KCSS7B5E.js";import{A as oe,L as se,O as re,P as le,S as pe,T as me,y as ae}from"./chunk-QAQD3BIS.js";import"./chunk-IFMKWS56.js";import"./chunk-7MJ4RZQ5.js";import{Ha as Y,Ka as Z,Ma as $,Wa as ee,lb as te,mb as ie,na as J,ra as Q,sb as L,ub as ne,va as X}from"./chunk-RCA4OQZM.js";import{Eb as o,F as R,Fb as s,Gb as k,Kb as b,L as U,Mb as u,Nb as g,Pc as z,Qc as q,Rc as G,Va as p,W as j,Yb as A,Zb as _,_b as y,a as F,aa as S,ab as D,b as N,bc as C,cc as T,dc as h,fc as x,gb as E,gc as M,ia as m,ja as d,n as B,nb as f,ra as w,tc as v,vb as c,yb as V}from"./chunk-ZNCIKLRF.js";var O=class i extends ce{constructor(){super("tasks")}getAllTasks(){return this.http.get(`${this.apiBaseUrl}/all`)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=j({token:i,factory:i.\u0275fac,providedIn:"root"})};var Fe=()=>({width:"450px",height:"auto"}),Le=i=>({"ng-invalid ng-dirty":i}),we=i=>({"ng-invalid ng-dirty":i,"w-full":!0}),Pe=i=>({"ng-invalid":i});function Oe(i,t){i&1&&(o(0,"small",15),_(1,"Name is required."),s())}function We(i,t){i&1&&(o(0,"small",15),_(1,"Description is required."),s())}function Ke(i,t){i&1&&(o(0,"small",15),_(1,"Category is required."),s())}function He(i,t){if(i&1){let e=b();o(0,"div",3)(1,"p-floatlabel",4)(2,"p-dropdown",5),h("ngModelChange",function(a){m(e);let r=g();return T(r.task.categoryId,a)||(r.task.categoryId=a),d(a)}),s(),o(3,"label",6),_(4,"Category"),s()(),o(5,"p-floatlabel",4)(6,"input",7),h("ngModelChange",function(a){m(e);let r=g();return T(r.task.name,a)||(r.task.name=a),d(a)}),s(),o(7,"label",8),_(8,"Name"),s()(),f(9,Oe,2,0,"small",9),o(10,"p-floatlabel",4)(11,"input",10),h("ngModelChange",function(a){m(e);let r=g();return T(r.task.description,a)||(r.task.description=a),d(a)}),s(),o(12,"label",11),_(13,"Description"),s()(),f(14,We,2,0,"small",9)(15,Ke,2,0,"small",9),o(16,"div",12)(17,"p-checkbox",13),h("ngModelChange",function(a){m(e);let r=g();return T(r.task.done,a)||(r.task.done=a),d(a)}),s(),o(18,"label",14),_(19,"Done"),s()()()}if(i&2){let e=g();p(2),c("options",e.categories()),C("ngModel",e.task.categoryId),c("ngClass",M(13,Le,e.submitted&&!e.task.categoryId)),p(4),C("ngModel",e.task.name),c("ngClass",M(15,we,e.submitted&&!e.task.name)),p(3),c("ngIf",e.submitted&&!e.task.name),p(2),C("ngModel",e.task.description),c("ngClass",M(17,we,e.submitted&&!e.task.description)),p(3),c("ngIf",e.submitted&&!e.task.description),p(),c("ngIf",e.submitted&&!e.task.categoryId),p(2),C("ngModel",e.task.done),c("binary",!0)("ngClass",M(19,Pe,e.submitted&&e.task.done===void 0))}}function Ne(i,t){if(i&1){let e=b();o(0,"button",16),u("click",function(){m(e);let a=g();return d(a.onHide())}),s(),o(1,"button",17),u("click",function(){m(e);let a=g();return d(a.onSave())}),s()}if(i&2){let e=g();p(),c("loading",e.loading)}}var W=class i{visible=!1;task={name:"",description:"",done:0,categoryId:0};submitted=!1;loading=!1;visibleChange=new w;save=new w;cancel=new w;categoryService=S(_e);categories=D([]);ngOnInit(){this.loadCategories()}loadCategories(){this.categoryService.getAll().subscribe({next:t=>{this.categories.set(t)}})}onHide(){this.visibleChange.emit(!1),this.cancel.emit()}onSave(){this.save.emit(this.task)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=E({type:i,selectors:[["app-task-form"]],inputs:{visible:"visible",task:"task",submitted:"submitted",loading:"loading"},outputs:{visibleChange:"visibleChange",save:"save",cancel:"cancel"},decls:5,vars:5,consts:[["content",""],["footer",""],["header","Task Details",1,"p-fluid",3,"visibleChange","onHide","visible","modal"],[1,"flex","flex-col","gap-4","py-2"],["variant","on"],["id","category","optionLabel","name","optionValue","id",3,"ngModelChange","options","ngModel","ngClass"],["for","category"],["type","text","id","name","pInputText","",3,"ngModelChange","ngModel","ngClass"],["for","name"],["class","p-error",4,"ngIf"],["type","text","id","description","pInputText","",3,"ngModelChange","ngModel","ngClass"],["for","description"],[1,"flex","flex-row"],["id","done",3,"ngModelChange","ngModel","binary","ngClass"],["for","done",1,"ml-2"],[1,"p-error"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click","loading"]],template:function(e,n){if(e&1){let a=b();o(0,"p-dialog",2),h("visibleChange",function(l){return m(a),T(n.visible,l)||(n.visible=l),d(l)}),u("onHide",function(){return m(a),d(n.onHide())}),f(1,He,20,21,"ng-template",null,0,v)(3,Ne,2,1,"ng-template",null,1,v),s()}e&2&&(V(x(4,Fe)),C("visible",n.visible),c("modal",!0))},dependencies:[I,z,G,te,ne,P,ke,fe,Y,Z,$,L,ee],styles:[".field[_ngcontent-%COMP%]{margin-bottom:1.5rem}.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;font-weight:500}.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}.field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-top:.25rem;display:block}.field[_ngcontent-%COMP%]:last-child{margin-bottom:0}[_nghost-%COMP%]     .p-dropdown{width:100%}[_nghost-%COMP%]     .p-checkbox{margin-right:.5rem}"]})};var Be=()=>({width:"800px"}),Re=()=>["done-list"],Ue=()=>["todo-list"];function je(i,t){if(i&1&&(o(0,"div",14)(1,"div",15),_(2),s(),o(3,"div",16),_(4,"\u274C"),s()()),i&2){let e=g().$implicit;p(2),y(e.name)}}function Ae(i,t){if(i&1&&k(0,"p-tag",17),i&2){let e=g().$implicit;c("value","\u{1F3F7}\uFE0F "+e.category)}}function ze(i,t){if(i&1){let e=b();o(0,"p-card",10),u("dblclick",function(){let a=m(e).$implicit,r=g();return d(r.onTaskDoubleClick(a))}),f(1,je,5,1,"ng-template",11),o(2,"p",12),_(3),s(),f(4,Ae,1,1,"ng-template",13),s()}if(i&2){let e=t.$implicit;p(3),y(e.description)}}function qe(i,t){if(i&1&&(o(0,"div",14)(1,"div",15),_(2),s(),o(3,"div",16),_(4,"\u2705"),s()()),i&2){let e=g().$implicit;p(2),y(e.name)}}function Ge(i,t){if(i&1&&k(0,"p-tag",17),i&2){let e=g().$implicit;c("value","\u{1F3F7}\uFE0F "+e.category)}}function Je(i,t){if(i&1){let e=b();o(0,"p-card",10),u("dblclick",function(){let a=m(e).$implicit,r=g();return d(r.onTaskDoubleClick(a))}),f(1,qe,5,1,"ng-template",11),o(2,"p",12),_(3),s(),f(4,Ge,1,1,"ng-template",13),s()}if(i&2){let e=t.$implicit;p(3),y(e.description)}}var K=class i{set visible(t){this._visible=t}get visible(){return this._visible}visibleChange=new w;set tasks(t){this._tasks=t,this.updateTaskLists()}taskUpdated=new w;editTask=new w;_visible=!1;_tasks=[];todoTasks=D([]);doneTasks=D([]);updateTaskLists(){this.todoTasks.set(this._tasks.filter(t=>!t.done)),this.doneTasks.set(this._tasks.filter(t=>t.done))}onHide(){this.visibleChange.emit(!1)}onTaskDoubleClick(t){this.editTask.emit(t)}drop(t){if(t.previousContainer===t.container)he(t.container.data,t.previousIndex,t.currentIndex);else{ye(t.previousContainer.data,t.container.data,t.previousIndex,t.currentIndex);let e=t.container.data[t.currentIndex],n=N(F({},e),{done:t.container.id==="done-list"?1:0});this.taskUpdated.emit(n)}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=E({type:i,selectors:[["app-task-kanban"]],inputs:{visible:"visible",tasks:"tasks"},outputs:{visibleChange:"visibleChange",taskUpdated:"taskUpdated",editTask:"editTask"},decls:11,vars:13,consts:[["todoList","cdkDropList"],["doneList","cdkDropList"],["header","Task Kanban \u{1F4CB}",3,"visibleChange","onHide","visible","modal"],[1,"flex","gap-4"],["header","\u{1F4DD} To Do",1,"flex-1"],["cdkDropList","","id","todo-list",1,"kanban-list",3,"cdkDropListDropped","cdkDropListData","cdkDropListConnectedTo"],["cdkDrag","","class","kanban-item mb-3",3,"dblclick",4,"ngFor","ngForOf"],["layout","vertical"],["header","\u2705 Done",1,"flex-1"],["cdkDropList","","id","done-list",1,"kanban-list",3,"cdkDropListDropped","cdkDropListData","cdkDropListConnectedTo"],["cdkDrag","",1,"kanban-item","mb-3",3,"dblclick"],["pTemplate","header"],[1,"text-gray-600"],["pTemplate","footer"],[1,"flex","justify-content-between","align-items-center"],[1,"font-bold"],[1,"emoji"],["severity","info",3,"value"]],template:function(e,n){if(e&1){let a=b();o(0,"p-dialog",2),h("visibleChange",function(l){return m(a),T(n.visible,l)||(n.visible=l),d(l)}),u("onHide",function(){return m(a),d(n.onHide())}),o(1,"div",3)(2,"p-panel",4)(3,"div",5,0),u("cdkDropListDropped",function(l){return m(a),d(n.drop(l))}),f(5,ze,5,1,"p-card",6),s()(),k(6,"p-divider",7),o(7,"p-panel",8)(8,"div",9,1),u("cdkDropListDropped",function(l){return m(a),d(n.drop(l))}),f(10,Je,5,1,"p-card",6),s()()()()}e&2&&(V(x(10,Be)),C("visible",n.visible),c("modal",!0),p(3),c("cdkDropListData",n.todoTasks())("cdkDropListConnectedTo",x(11,Re)),p(2),c("ngForOf",n.todoTasks()),p(3),c("cdkDropListData",n.doneTasks())("cdkDropListConnectedTo",x(12,Ue)),p(2),c("ngForOf",n.doneTasks()))},dependencies:[I,q,X,ge,P,de,ve,xe,be,Ce],styles:[".kanban-column[_ngcontent-%COMP%]{background:#f8f9fa;border-radius:8px;padding:1rem}.kanban-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.kanban-list[_ngcontent-%COMP%]{min-height:400px;padding:.5rem 0}  .kanban-item{cursor:move}  .kanban-item .p-card{margin-bottom:.5rem;transition:box-shadow .3s}  .kanban-item .p-card:hover{box-shadow:0 2px 8px #0003}  .kanban-item .emoji{font-size:1.2rem}  .p-panel .p-panel-header{font-size:1.25rem;font-weight:700}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.kanban-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .kanban-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]})};var Qe=()=>["name","description","category"],Xe=()=>[10,20,30],Ye=()=>({width:"450px"});function Ze(i,t){if(i&1){let e=b();o(0,"p-button",10),u("click",function(){m(e);let a=g();return d(a.newTask())}),s(),o(1,"p-button",11),u("click",function(){m(e);let a=g();return d(a.showKanban())}),s(),o(2,"p-button",12),u("click",function(){m(e);let a=g();return d(a.deleteSelectedTasks())}),s()}if(i&2){let e=g();p(2),c("disabled",e.selectedTasks.length==0)}}function $e(i,t){i&1&&k(0,"p-button",13)}function et(i,t){if(i&1){let e=b();o(0,"div",14)(1,"h5",15),_(2,"Tasks"),s(),o(3,"p-iconfield"),k(4,"p-inputicon",16),o(5,"input",17),u("input",function(a){m(e);let r=g(),l=A(6);return d(r.onGlobalFilter(l,a))}),s()()()}}function tt(i,t){i&1&&(o(0,"tr")(1,"th",18),k(2,"p-tableHeaderCheckbox"),s(),o(3,"th",19),_(4," Name "),k(5,"p-sortIcon",20),s(),o(6,"th",21),_(7," Description "),k(8,"p-sortIcon",22),s(),o(9,"th",23),_(10," Done "),k(11,"p-sortIcon",24),s(),o(12,"th",25),_(13," Category "),k(14,"p-sortIcon",26),s(),k(15,"th",27),s())}function it(i,t){if(i&1){let e=b();o(0,"tr")(1,"td"),k(2,"p-tableCheckbox",28),s(),o(3,"td"),_(4),s(),o(5,"td"),_(6),s(),o(7,"td"),_(8),s(),o(9,"td"),_(10),s(),o(11,"td")(12,"p-button",29),u("click",function(){let a=m(e).$implicit,r=g();return d(r.editTask(a))}),s()()()}if(i&2){let e=t.$implicit,n=g();p(2),c("value",e),p(2),y(e.name),p(2),y(e.description),p(2),y(n.getDoneEmoji(e.done)),p(2),y(e.category),p(2),c("rounded",!0)("outlined",!0)}}var Se=class i{service=S(O);message=S(Q);confirmationService=S(J);tasks=D([]);selectedTasks=[];task={name:"",description:"",done:0,categoryId:0};taskDialog=!1;kanbanDialog=!1;submitted=!1;formLoading=!1;tableLoading=!1;cols=[{field:"name",header:"Name"},{field:"description",header:"Description"},{field:"done",header:"Done"},{field:"category",header:"Category"}];ngOnInit(){this.fetchTasks()}fetchTasks(){this.tableLoading=!0,this.service.getAllTasks().subscribe({next:t=>{this.tableLoading=!1,this.tasks.set(t)},error:t=>{this.message.add({severity:"error",summary:"Error",detail:t.error.message}),this.tableLoading=!1}})}getDoneEmoji(t){return t?"\u2705":"\u274C"}newTask(){this.task={name:"",description:"",done:0,categoryId:0},this.submitted=!1,this.taskDialog=!0}showKanban(){this.kanbanDialog=!0}onTaskUpdated(t){this.service.update(t.id,t).subscribe({next:()=>{this.fetchTasks(),this.message.add({severity:"success",summary:"Successful",detail:"Task Updated",life:3e3})},error:e=>{this.message.add({severity:"error",summary:"Error",detail:e.error.message})}})}deleteSelectedTasks(){this.confirmationService.confirm({message:"Are you sure you want to delete the selected tasks?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{B(this.selectedTasks).pipe(R(t=>this.service.delete(t.id)),U(()=>{this.selectedTasks=[],this.fetchTasks(),this.message.add({severity:"success",summary:"Successful",detail:"Tasks Deleted",life:3e3})})).subscribe()}})}editTask(t){this.task=F({},t),this.taskDialog=!0}deleteTask(t){this.confirmationService.confirm({message:"Are you sure you want to delete "+t.name+"?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.service.delete(t.id).subscribe({next:()=>{this.fetchTasks(),this.message.add({severity:"success",summary:"Successful",detail:"Task Deleted",life:3e3})}})}})}hideDialog(){this.taskDialog=!1,this.submitted=!1}saveTask(t){this.submitted=!0,this.formLoading=!0,t.name?.trim()&&t.description?.trim()&&t.categoryId&&(t.id?this.service.update(t.id,t).subscribe({next:()=>{this.fetchTasks(),this.message.add({severity:"success",summary:"Successful",detail:"Task Updated",life:3e3}),this.taskDialog=!1,this.task={name:"",description:"",done:0,categoryId:0}},error:e=>{this.message.add({severity:"error",summary:"Error",detail:e.error.message})},complete:()=>{this.formLoading=!1}}):this.service.create(t).subscribe({next:()=>{this.fetchTasks(),this.message.add({severity:"success",summary:"Successful",detail:"Task Created",life:3e3}),this.taskDialog=!1,this.task={name:"",description:"",done:0,categoryId:0}},error:e=>{this.message.add({severity:"error",summary:"Error",detail:e.error.message})},complete:()=>{this.formLoading=!1}}))}onGlobalFilter(t,e){t.filterGlobal(e.target.value,"contains")}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=E({type:i,selectors:[["app-tasks"]],decls:16,vars:21,consts:[["start",""],["end",""],["dt",""],["caption",""],["header",""],["body",""],["styleClass","mb-6"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} tasks",3,"selectionChange","loading","value","rows","columns","paginator","globalFilterFields","selection","rowHover","showCurrentPageReport","rowsPerPageOptions"],[3,"visibleChange","save","cancel","visible","task","submitted","loading"],[3,"visibleChange","taskUpdated","editTask","visible","tasks"],["label","New","icon","pi pi-plus","severity","secondary",1,"mr-2",3,"click"],["label","Kanban","icon","pi pi-th-large","severity","secondary",1,"mr-2",3,"click"],["severity","secondary","label","Delete","icon","pi pi-trash","outlined","",3,"click","disabled"],["label","Export","icon","pi pi-upload","severity","secondary"],[1,"flex","items-center","justify-between"],[1,"m-0"],["styleClass","pi pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],[2,"width","3rem"],["pSortableColumn","name"],["field","name"],["pSortableColumn","description"],["field","description"],["pSortableColumn","done"],["field","done"],["pSortableColumn","category"],["field","category"],[2,"width","5rem"],[3,"value"],["icon","pi pi-pencil",1,"mr-2",3,"click","rounded","outlined"]],template:function(e,n){if(e&1){let a=b();o(0,"p-toolbar",6),f(1,Ze,3,1,"ng-template",null,0,v)(3,$e,1,0,"ng-template",null,1,v),s(),o(5,"p-table",7,2),h("selectionChange",function(l){return m(a),T(n.selectedTasks,l)||(n.selectedTasks=l),d(l)}),f(7,et,6,0,"ng-template",null,3,v)(9,tt,16,0,"ng-template",null,4,v)(11,it,13,7,"ng-template",null,5,v),s(),o(13,"app-task-form",8),h("visibleChange",function(l){return m(a),T(n.taskDialog,l)||(n.taskDialog=l),d(l)}),u("save",function(l){return m(a),d(n.saveTask(l))})("cancel",function(){return m(a),d(n.hideDialog())}),s(),o(14,"app-task-kanban",9),h("visibleChange",function(l){return m(a),T(n.kanbanDialog,l)||(n.kanbanDialog=l),d(l)}),u("taskUpdated",function(l){return m(a),d(n.onTaskUpdated(l))})("editTask",function(l){return m(a),d(n.editTask(l))}),s(),k(15,"p-confirmDialog")}e&2&&(p(5),c("loading",n.tableLoading)("value",n.tasks())("rows",10)("columns",n.cols)("paginator",!0)("globalFilterFields",x(18,Qe)),C("selection",n.selectedTasks),c("rowHover",!0)("showCurrentPageReport",!0)("rowsPerPageOptions",x(19,Xe)),p(8),C("visible",n.taskDialog),c("task",n.task)("submitted",n.submitted)("loading",n.formLoading),p(),C("visible",n.kanbanDialog),c("tasks",n.tasks()),p(),V(x(20,Ye)))},dependencies:[I,ie,ue,ae,oe,L,se,re,le,pe,me,Te,W,K],encapsulation:2})};export{Se as TasksComponent};
