(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-129fdd7c"],{"0198":function(t,a,e){},"0da2":function(t,a,e){"use strict";var i=e("0198"),r=e.n(i);r.a},"1e49":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"desk"},[e("el-card",{attrs:{shadow:"always"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.citas}},[e("el-table-column",{attrs:{align:"center",prop:"id_cita",label:"N° de Cita"}}),e("el-table-column",{attrs:{align:"center",prop:"fecha_creacion",label:"Fecha Cita"}}),e("el-table-column",{attrs:{align:"center",prop:"hora_inicio",label:"Hora Cita"}}),e("el-table-column",{attrs:{align:"center",prop:"asesoriaAbogado.descripción_asistente",label:"Descripción Asistente"}}),e("el-table-column",{attrs:{align:"center",prop:"asesoriaAbogado.descripción_asistente",label:"Voucher"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("a",{attrs:{href:t.urlDescarga+a.row.id_cita,target:"_blank"}},[t._v("Ver Voucher")])]}}])}),e("el-table-column",{attrs:{width:"250",align:"center",prop:"asesoriaAbogado.descripción_asistente",label:"Validar voucher"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticStyle:{"column-count":"2"}},[e("div",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.Descartar(a.row.id_cita)}}},[t._v("Descartar")])],1),e("div",[e("el-button",{attrs:{type:"info"},on:{click:function(e){return t.grabarmodal(a.row.id_cita)}}},[t._v("Validar")])],1)])]}}])})],1)],1)],1),e("div",{staticClass:"mobile"},[e("el-card",{attrs:{shadow:"always"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.citas}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("p",{staticStyle:{color:"#3a7bdd",size:"25px","font-weight":"bold"}},[t._v("Datos de Cita")]),e("p",{staticStyle:{color:"#A0A0A0"}},[t._v("Fecha Cita ")]),e("p",[t._v(" "+t._s(a.row.trazabilidad.fecha_reserva))]),e("p",{staticStyle:{color:"#A0A0A0"}},[t._v("Hora Cita ")]),e("p",[t._v(" "+t._s(a.row.hora_inicio))]),e("p",{staticStyle:{color:"#3a7bdd",size:"25px","font-weight":"bold"}},[t._v("Datos de Voucher")]),e("a",{attrs:{href:t.urlDescarga+a.row.id_cita,target:"_blank"}},[t._v("Ver Voucher")]),e("p",{staticStyle:{color:"#A0A0A0"}},[t._v(" Validar Voucher: ")]),e("div",{staticStyle:{"column-count":"2"}},[e("div",[e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.Descartar(a.row.id_cita)}}},[t._v("Descartar")])],1),e("div",[e("el-button",{attrs:{type:"info"},on:{click:function(e){return t.grabarmodal(a.row.id_cita)}}},[t._v("Validar")])],1)])]}}])}),e("el-table-column",{attrs:{align:"center",prop:"id_cita",label:"N° de Cita"}}),e("el-table-column",{attrs:{align:"center",prop:"asesoriaAbogado.descripción_asistente",label:"Descripción Asistente"}})],1)],1)],1),t.showModalValidar?e("modal-validar-cita",{attrs:{enviarDato:t.enviarDato},on:{grabarmodal:t.grabarmodal}}):t._e()],1)},r=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content-modal message"},[e("div",{staticClass:"mask"}),e("div",{staticClass:"modal"},[t._m(0),e("div",[e("el-form",{ref:"form"},[e("el-form-item",{staticClass:"element-center event-button"},[e("div",{staticStyle:{"column-count":"2"}},[e("div",[e("router-link",{attrs:{to:"/lawyer"}},[e("el-button",{attrs:{type:"primary",round:""},on:{click:function(a){return t.Validar(t.enviarDato)}}},[t._v("Ok")])],1)],1),e("div",[e("el-button",{attrs:{type:"primary",round:""},on:{click:function(a){return t.$emit("grabarmodal",null)}}},[t._v("Cancelar")])],1)])])],1)],1)])])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",{staticClass:"text-blue"},[t._v("¿Estás seguro validar la cita?")])])}],s={props:["enviarDato"],data:function(){return{validar:{id_cita:null,id_011_estado:25}}},methods:{close2:function(){window.location.reload()},Validar:function(t){var a=this;this.validar.id_cita=t;var e="/actualizarCitaAsesoria/";this.$http.post(e,this.validar).then((function(t){a.$message({message:"Se generó oportunidad",type:"success"})})),this.$emit("grabarmodal",null)},created:function(){}}},n=s,c=(e("0da2"),e("2877")),d=Object(c["a"])(n,o,l,!1,null,"63cab1dd",null),u=d.exports,p={components:{ModalValidarCita:u},data:function(){return{citas:null,descartar:{id_cita:null,id_011_estado:26},validar:{id_cita:null,id_011_estado:25},urlDescarga:"http://142.93.14.230:8091/api/abogados/voucher/",showModalValidar:!1,enviarDato:null}},created:function(){this.Registradas(),this.verVoucher()},methods:{Descartar:function(t){var a=this;this.descartar.id_cita=t;var e="/actualizarCitaAsesoria/";this.$http.post(e,this.descartar).then((function(t){a.$message.error("Se descarto la cita")}))},grabarmodal:function(t){0==this.showModalValidar?this.showModalValidar=!0:this.showModalValidar=!1,this.enviarDato=t,this.Registradas()},Registradas:function(){var t=this,a="/listarCitas/0/0/0/24";this.$http.get(a).then((function(a){t.citas=a.data.Body,console.log(t.citas),console.log(a)}))}}},h=p,v=(e("f579"),Object(c["a"])(h,i,r,!1,null,null,null));a["default"]=v.exports},"8f4e":function(t,a,e){},f579:function(t,a,e){"use strict";var i=e("8f4e"),r=e.n(i);r.a}}]);
//# sourceMappingURL=chunk-129fdd7c.4917b04e.js.map