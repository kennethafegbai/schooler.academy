(self.webpackChunk=self.webpackChunk||[]).push([[2770,549],{2361:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var a=s(3645),n=s.n(a)()((function(t){return t[1]}));n.push([t.id,".btn-loading-effect[data-v-512b9a39]{padding-left:30px}",""]);const o=n},789:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var a=s(3645),n=s.n(a)()((function(t){return t[1]}));n.push([t.id,".dropdown-menu-end[data-v-63e01808]{right:100%}.user-card[data-v-63e01808]{position:relative}.dots[data-v-63e01808]{position:absolute;top:5px;right:10px}",""]);const o=n},2936:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var a=s(3645),n=s.n(a)()((function(t){return t[1]}));n.push([t.id,".fade-enter-active,.fade-leave-active{transition:opacity .3s}.fade-enter,.fade-leave-active{opacity:0}",""]);const o=n},1496:t=>{const e=t=>void 0===t,s=t=>Array.isArray(t),a=t=>t&&"number"==typeof t.size&&"string"==typeof t.type&&"function"==typeof t.slice,n=(t,o,i,r)=>((o=o||{}).indices=!e(o.indices)&&o.indices,o.nullsAsUndefineds=!e(o.nullsAsUndefineds)&&o.nullsAsUndefineds,o.booleansAsIntegers=!e(o.booleansAsIntegers)&&o.booleansAsIntegers,o.allowEmptyArrays=!e(o.allowEmptyArrays)&&o.allowEmptyArrays,i=i||new FormData,e(t)||(null===t?o.nullsAsUndefineds||i.append(r,""):(t=>"boolean"==typeof t)(t)?o.booleansAsIntegers?i.append(r,t?1:0):i.append(r,t):s(t)?t.length?t.forEach(((t,e)=>{const s=r+"["+(o.indices?e:"")+"]";n(t,o,i,s)})):o.allowEmptyArrays&&i.append(r+"[]",""):(t=>t instanceof Date)(t)?i.append(r,t.toISOString()):!(t=>t===Object(t))(t)||(t=>a(t)&&"string"==typeof t.name&&("object"==typeof t.lastModifiedDate||"number"==typeof t.lastModified))(t)||a(t)?i.append(r,t):Object.keys(t).forEach((e=>{const a=t[e];if(s(a))for(;e.length>2&&e.lastIndexOf("[]")===e.length-2;)e=e.substring(0,e.length-2);n(a,o,i,r?r+"["+e+"]":e)}))),i);t.exports={serialize:n}},5463:(t,e,s)=>{"use strict";var a=s(538);a="default"in a?a.default:a;var n="2.2.2";/^2\./.test(a.version)||a.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+a.version);var o="_vue_clickaway_handler";function i(t,e,s){r(t);var a=s.context,n=e.value;if("function"==typeof n){var i=!1;setTimeout((function(){i=!0}),0),t[o]=function(e){var s=e.path||(e.composedPath?e.composedPath():void 0);if(i&&(s?s.indexOf(t)<0:!t.contains(e.target)))return n.call(a,e)},document.documentElement.addEventListener("click",t[o],!1)}}function r(t){document.documentElement.removeEventListener("click",t[o],!1),delete t[o]}var l={bind:i,update:function(t,e){e.value!==e.oldValue&&i(t,e)},unbind:r},c={directives:{onClickaway:l}};e.jB=c},6805:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});var a=s(3379),n=s.n(a),o=s(2361),i={insert:"head",singleton:!1};n()(o.Z,i);o.Z.locals;const r=(0,s(1900).Z)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-icon d-inline-block"},[s("span",{staticClass:"input-icon-addon"},[s("div",{staticClass:"spinner-border spinner-border-sm text-light mr-3",attrs:{role:"status"}})]),t._v(" "),s("input",{staticClass:"btn btn-primary btn-loading-effect",attrs:{type:"button",value:"Processing..."}})])}],!1,null,"512b9a39",null).exports},549:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});const a={data:function(){return{notFound:"/images/not-found.svg"}},props:{word:{type:String,default:"user",required:!1},route:{type:String,required:!1},btnShow:{type:Boolean,required:!1,default:!0}}};const n=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"empty"},[s("div",{staticClass:"empty-img"},[s("img",{attrs:{src:t.notFound,height:"128",alt:"not found"}})]),t._v(" "),s("p",{staticClass:"empty-title"},[t._v(t._s(t.$t("no_results_found")))]),t._v(" "),s("p",{staticClass:"empty-subtitle text-muted"},[t._v("\n        "+t._s(t.$t("there_is_no"))+" "+t._s(t.word)+" "+t._s(t.$t("found_in_this_page"))+".\n    ")]),t._v(" "),t.route&&t.btnShow?s("div",{staticClass:"empty-action"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:t.route}}},[s("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),s("line",{attrs:{x1:"12",y1:"5",x2:"12",y2:"19"}}),t._v(" "),s("line",{attrs:{x1:"5",y1:"12",x2:"19",y2:"12"}})]),t._v("\n            "+t._s(t.$t("add_your_first"))+" "+t._s(t.word)+"\n        ")])],1):t._e()])}),[],!1,null,null,null).exports},9566:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});const a={mixins:[s(5463).jB],props:{data:{type:Object,required:!0},canEdit:{type:Boolean,default:!1},canDelete:{type:Boolean,default:!1}},data:function(){return{showDots:!1}},methods:{toggleDots:function(){this.showDots=!this.showDots},closeDropdown:function(){this.showDots=!1},editData:function(){this.$emit("edit-data",this.data)},deleteData:function(){this.$emit("delete-data",this.data.id)}}};var n=s(3379),o=s.n(n),i=s(789),r={insert:"head",singleton:!1};o()(i.Z,r);i.Z.locals;const l=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closeDropdown,expression:"closeDropdown"}],staticClass:"dots dropdown"},[s("a",{staticClass:"link-secondary",attrs:{href:"javascript:void(0)","data-bs-toggle":"dropdown","aria-expanded":"false"},on:{click:t.toggleDots}},[s("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),s("circle",{attrs:{cx:"5",cy:"12",r:"1"}}),t._v(" "),s("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),t._v(" "),s("circle",{attrs:{cx:"19",cy:"12",r:"1"}})])]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-end right-100",class:{show:t.showDots}},[t.canEdit?s("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"},on:{click:t.editData}},[t._v("\n            "+t._s(t.$t("edit"))+"\n        ")]):t._e(),t._v(" "),t.canDelete?s("a",{staticClass:"dropdown-item",attrs:{href:"javascript:void(0)"},on:{click:t.deleteData}},[t._v("\n            "+t._s(t.$t("delete"))+"\n        ")]):t._e()])])}),[],!1,null,"63e01808",null).exports},9194:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});const a={mixins:[s(5463).jB],props:{isShow:{type:Boolean,default:!1,required:!1}},methods:{closeModal:function(){this.$emit("close-modal")},deleteData:function(){this.$emit("delete-data")}}};var n=s(3379),o=s.n(n),i=s(2936),r={insert:"head",singleton:!1};o()(i.Z,r);i.Z.locals;const l=(0,s(1900).Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[t.isShow?s("div",{staticClass:"modal modal-blur fade show modal-hidee",attrs:{id:"modal-danger",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-sm modal-dialog-centered",attrs:{role:"document"}},[s("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closeModal,expression:"closeModal"}],staticClass:"modal-content"},[s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:t.closeModal}}),t._v(" "),s("div",{staticClass:"modal-status bg-danger"}),t._v(" "),s("div",{staticClass:"modal-body text-center py-4"},[s("svg",{staticClass:"icon mb-2 text-danger icon-lg",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"}},[s("path",{attrs:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}}),t._v(" "),s("path",{attrs:{d:"M12 9v2m0 4v.01"}}),t._v(" "),s("path",{attrs:{d:"M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"}})]),t._v(" "),s("h3",[t._v(t._s(t.$t("are_you_sure")))]),t._v(" "),s("div",{staticClass:"text-muted"},[t._v(t._s(t.$t("delete_message")))])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("div",{staticClass:"w-100"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-white w-100",attrs:{"data-bs-dismiss":"modal"},on:{click:t.closeModal}},[t._v("\n                                    "+t._s(t.$t("cancel"))+"\n                                ")])]),t._v(" "),s("div",{staticClass:"col"},[s("button",{staticClass:"btn btn-danger w-100",attrs:{"data-bs-dismiss":"modal"},on:{click:t.deleteData}},[t._v("\n                                    "+t._s(t.$t("delete"))+"\n                                ")])])])])])])])]):t._e()])}),[],!1,null,null,null).exports},2770:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>g});var a=s(7757),n=s.n(a),o=s(1496),i=s(6805),r=s(9566),l=s(9194),c=s(549),d=s(629);function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){m(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function m(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function v(t,e,s,a,n,o,i){try{var r=t[o](i),l=r.value}catch(t){return void s(t)}r.done?e(l):Promise.resolve(l).then(a,n)}function f(t){return function(){var e=this,s=arguments;return new Promise((function(a,n){var o=t.apply(e,s);function i(t){v(o,a,n,i,r,"next",t)}function r(t){v(o,a,n,i,r,"throw",t)}i(void 0)}))}}const h={mixins:[s(5463).jB],components:{ButtonLoading:i.Z,CardDropdown:r.Z,DeleteModal:l.Z,NotFound:c.default},data:function(){return{isModalShow:!1,isDeleteModalShow:!1,selectedId:"",isEditMode:!1,form:new Form({name:"",image:""})}},methods:{onImageChange:function(t){this.form.image=t.target.files[0]},toggleModalShow:function(){this.isModalShow=!this.isModalShow,this.form.clear()},toggleDeleteModal:function(){this.isDeleteModalShow=!this.isDeleteModalShow,this.selectedId=""},save:function(){var t=this;return f(n().mark((function e(){var s,a,i,r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.isEditMode){e.next=12;break}return e.next=4,t.form.post("/api/expensetypes",{transformRequest:[function(t,e){return(0,o.serialize)(t)}]});case 4:return s=e.sent,a=s.data,e.next=8,t.$store.commit("expense/ADD_EXPENSE_TYPE",a.expensetype);case 8:t.toastSuccess(a.message),t.reset(),e.next=19;break;case 12:return e.next=14,t.form.post("/api/expensetypes/".concat(t.selectedId,"/update"),{transformRequest:[function(t,e){return(0,o.serialize)(t)}]});case 14:i=e.sent,r=i.data,t.$store.commit("expense/UPDATE_EXPENSE_TYPE",r.expensetype),t.toastSuccess(r.message),t.reset();case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),t.toastError();case 24:case"end":return e.stop()}}),e,null,[[0,21]])})))()},editData:function(t){this.isEditMode=!0,this.toggleModalShow(),this.selectedId=t.id,this.form.fill(t)},deleteConfirmation:function(t){this.selectedId=t,this.isDeleteModalShow=!0},deleteData:function(){var t=this;return f(n().mark((function e(){var s;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.post("/api/expensetypes/".concat(t.selectedId));case 3:s=e.sent,t.$store.commit("expense/REMOVE_EXPENSE_TYPE",t.selectedId),t.reset(),t.toggleDeleteModal(),t.toastSuccess(s.data.message),e.next=18;break;case 10:if(e.prev=10,e.t0=e.catch(0),409!=e.t0.status){e.next=17;break}return t.toastError("Delete failed, please delete all related items first."),t.reset(),t.toggleDeleteModal(),e.abrupt("return");case 17:t.toastError();case 18:case"end":return e.stop()}}),e,null,[[0,10]])})))()},reset:function(){this.isEditMode=!1,this.isModalShow=!1,this.selectedId="",this.form.reset(),this.form.clear()},loadExpenseType:function(){var t=this;return f(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("expense/fetchExpenseType");case 2:case"end":return e.stop()}}),e)})))()}},computed:p(p({},(0,d.Se)({expenseTypes:"expense/expenseType"})),{},{emptyData:function(){return this.sessions.length}}),created:function(){var t=this;return f(n().mark((function e(){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.hasPermisssion("expense-type-list");case 2:t.loadExpenseType();case 3:case"end":return e.stop()}}),e)})))()}};const g=(0,s(1900).Z)(h,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page-header d-print-none"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col"},[s("h2",{staticClass:"page-title"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),s("h2",{staticClass:"page-pretitle"},[t._v(t._s(t.$t("fees")))])]),t._v(" "),t.checkPermission("expense-type-create")?s("div",{staticClass:"col-auto ms-auto d-print-none"},[s("div",{staticClass:"d-flex"},[s("a",{staticClass:"btn btn-primary btn-outline",attrs:{href:"#"},on:{click:t.toggleModalShow}},[s("icon-plus"),t._v("\n                        "+t._s(t.$t("create"))+"\n                    ")],1)])]):t._e()])]),t._v(" "),s("div",{staticClass:"row row-cards mt-2"},[t.expenseTypes&&t.expenseTypes.length?t._l(t.expenseTypes,(function(e){return s("div",{key:e.id,staticClass:"col-md-4 col-xl-3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-img-top img-responsive img-responsive-16by9",style:{backgroundImage:"url("+e.image_url+")"}}),t._v(" "),s("div",{staticClass:"card-body d-flex justify-content-between"},[s("h3",{staticClass:"card-title"},[t._v(t._s(e.name))]),t._v(" "),t.checkPermission("fee-type-delete")||t.checkPermission("fee-type-edit")?s("div",[t.checkPermission("fee-type-edit")?s("span",{staticClass:"cursor-pointer",on:{click:function(s){return t.editData(e)}}},[s("icon-edit")],1):t._e(),t._v(" "),t.checkPermission("fee-type-delete")?s("span",{staticClass:"cursor-pointer",on:{click:function(s){return t.deleteConfirmation(e.id)}}},[s("icon-trash")],1):t._e()]):t._e()])])])})):s("div",{staticClass:"d-flex justify-content-center py-3"},[s("NotFound",{attrs:{word:"fee type"}})],1)],2),t._v(" "),s("transition",{attrs:{name:"fade"}},[t.isModalShow?s("div",{staticClass:"modal modal-blur fade show modal-hidee",attrs:{id:"modal-danger",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-md modal-dialog-centered",attrs:{role:"document"}},[s("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.reset,expression:"reset"}],staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[t.isEditMode?s("h5",{staticClass:"modal-title"},[t._v(t._s(t.$t("update_type")))]):s("h5",{staticClass:"modal-title"},[t._v("\n                            "+t._s(t.$t("create_type"))+"\n                        ")]),t._v(" "),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"},on:{click:function(e){return e.preventDefault(),t.reset(e)}}})]),t._v(" "),s("form",{attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.save(e)}}},[s("div",{staticClass:"modal-body py-4"},[s("div",{staticClass:"row"},[s("div",{staticClass:"mb-3"},[s("label",{staticClass:"form-label"},[t._v(t._s(t.$t("name")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",placeholder:t.$t("enter_name")},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),s("has-error",{attrs:{form:t.form,field:"name"}})],1),t._v(" "),s("div",{staticClass:"mb-3"},[s("base-label",{attrs:{title:t.isEditMode?t.$t("change_image"):t.$t("image")}}),t._v(" "),s("input",{staticClass:"form-control",class:{"is-invalid":t.form.errors.has("image")},attrs:{type:"file",accept:"image/png, image/jpeg, image/jpg"},on:{change:t.onImageChange}})],1)])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn me-auto",attrs:{type:"button","data-bs-dismiss":"modal"},on:{click:t.reset}},[t._v("\n                                "+t._s(t.$t("cancel"))+"\n                            ")]),t._v(" "),t.form.busy?s("button-loading"):s("button",{staticClass:"btn btn-primary",attrs:{type:"submit","data-bs-dismiss":"modal"}},[t._v("\n                                "+t._s(t.$t("save"))+"\n                            ")])],1)])])])]):t._e()]),t._v(" "),s("DeleteModal",{attrs:{isShow:t.isDeleteModalShow},on:{"close-modal":t.toggleDeleteModal,"delete-data":t.deleteData}})],1)}),[],!1,null,null,null).exports}}]);