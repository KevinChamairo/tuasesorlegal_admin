(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5544752e"],{"0602":function(a,t,e){"use strict";e.r(t);var l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"desk"},[e("el-card",{attrs:{shadow:"always"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:a.citas}},[e("el-table-column",{attrs:{align:"center",prop:"id_cita",label:"N° de Cita"}}),e("el-table-column",{attrs:{align:"center",prop:"fecha_creacion",label:"Fecha Cita"}}),e("el-table-column",{attrs:{align:"center",prop:"hora_inicio",label:"Hora Cita"}}),e("el-table-column",{attrs:{align:"center",prop:"asesoriaAbogado.descripción_asistente",label:"Descripcion de la Cita"}}),e("el-table-column",{attrs:{align:"center",prop:"asesoriaAbogado.descripción_asistente",label:"Voucher"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("a",{attrs:{href:a.urlDescarga+t.row.id_cita,target:"_blank"}},[a._v("Ver Voucher")])]}}])})],1)],1)],1),e("div",{staticClass:"mobile"},[e("el-card",{attrs:{shadow:"always"}},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:a.citas}},[e("el-table-column",{attrs:{type:"expand"},scopedSlots:a._u([{key:"default",fn:function(t){return[e("p",{staticStyle:{color:"#3a7bdd",size:"25px","font-weight":"bold"}},[a._v("Datos de Cita")]),e("p",{staticStyle:{color:"#A0A0A0"}},[a._v("Fecha Cita ")]),e("p",[a._v(" "+a._s(t.row.trazabilidad.fecha_reserva))]),e("p",{staticStyle:{color:"#A0A0A0"}},[a._v("Hora Cita ")]),e("p",[a._v(" "+a._s(t.row.hora_inicio))]),e("a",{attrs:{href:a.urlDescarga+t.row.id_cita,target:"_blank"}},[a._v("Ver Voucher")])]}}])}),e("el-table-column",{attrs:{align:"center",prop:"id_cita",label:"N° de Cita"}}),e("el-table-column",{attrs:{align:"center",prop:"asesoriaAbogado.descripción_asistente",label:"Descripcion de la Cita"}})],1)],1)],1)])},i=[],r={data:function(){return{citas:null,urlDescarga:"http://142.93.14.230:8091/api/abogados/voucher/"}},created:function(){this.Confirmadas()},methods:{Confirmadas:function(){var a=this,t="/listarCitas/0/0/0/25";this.$http.get(t).then((function(t){a.citas=t.data.Body,console.log(a.citas),console.log(t)}))}}},s=r,c=(e("39a2"),e("2877")),o=Object(c["a"])(s,l,i,!1,null,null,null);t["default"]=o.exports},2611:function(a,t,e){},"39a2":function(a,t,e){"use strict";var l=e("2611"),i=e.n(l);i.a}}]);
//# sourceMappingURL=chunk-5544752e.3636b4b8.js.map