(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd8e9fa8"],{"2cca":function(e,o,a){"use strict";var t=a("990c"),l=a.n(t);l.a},"990c":function(e,o,a){},a32a:function(e,o,a){"use strict";a.r(o);var t=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("el-container",[a("el-container",[e.VRegistradas?a("div",{staticClass:"grid-content bg-purple"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.abogados}},[a("el-table-column",{attrs:{width:"120",align:"center",prop:"id_abogado",label:"id abogado"}}),a("el-table-column",{attrs:{width:"240",align:"center",prop:"persona.correo",label:"Correo"}}),a("el-table-column",{attrs:{width:"100",align:"center",prop:"persona.nombres",label:"Nombres"}}),a("el-table-column",{attrs:{width:"100",prop:"persona.paterno",label:"Apellidos"}}),a("el-table-column",{attrs:{width:"100",prop:"persona.materno",label:""}}),a("el-table-column",{attrs:{width:"150",align:"center",prop:"fecha_creacion",label:"Fecha Creacion"}}),a("el-table-column",{attrs:{width:"130",align:"center",prop:"id_abogado",label:"Detalle"},scopedSlots:e._u([{key:"default",fn:function(o){return[a("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(a){return e.Detalles(o.row.id_abogado)}}},[e._v("Ver detalle")])]}}],null,!1,3722852413)}),a("el-table-column",{attrs:{width:"190",align:"center",prop:"id_003_estado",label:"Estado"},scopedSlots:e._u([{key:"default",fn:function(e){return[1==e.row.id_003_estado?a("el-alert",{attrs:{title:"Cuenta Activa",type:"success","show-icon":""}}):a("el-alert",{attrs:{title:"Cuenta Inactiva",type:"warning","show-icon":""}})]}}],null,!1,2340433685)})],1)],1):e._e(),e.VDetalles?a("div",{staticClass:"grid-content bg-purple"},[a("div",[a("a",{on:{click:function(o){return e.volver()}}},[a("icon",{staticClass:"el-icon-back"}),a("font",[e._v("Regresar")])],1)]),a("br"),a("br"),a("br"),e.estado?a("el-form",{ref:"abogadoDetalle",staticClass:"demo-ruleForm",attrs:{model:e.abogadoDetalle,"label-width":"180px",size:"mini"}},[1==e.abogadoDetalle.id_003_estado?a("el-form-item",[a("h1",[e._v("Desactivar Cuenta")]),a("el-button",{attrs:{type:"warning",plain:""},on:{click:function(o){return e.actualizar()}}},[e._v("DESACTIVAR")])],1):a("el-form-item",[a("h1",[e._v("Activar Cuenta")]),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(o){return e.actualizar()}}},[e._v("ACTIVAR")])],1),a("div",{staticStyle:{"column-count":"2"}},[a("div",[a("el-form-item",{attrs:{label:"Nombre",prop:"nombres"}},[a("el-input",{staticStyle:{width:"50%"},model:{value:e.abogadoDetalle.persona.nombres,callback:function(o){e.$set(e.abogadoDetalle.persona,"nombres",o)},expression:"abogadoDetalle.persona.nombres"}})],1),a("el-form-item",{attrs:{label:"Apellido Paterno",prop:"paterno"}},[a("el-input",{staticStyle:{width:"40%"},model:{value:e.abogadoDetalle.persona.paterno,callback:function(o){e.$set(e.abogadoDetalle.persona,"paterno",o)},expression:"abogadoDetalle.persona.paterno"}})],1),a("el-form-item",{attrs:{label:"Apellido Materno",prop:"materno"}},[a("el-input",{staticStyle:{width:"40%"},model:{value:e.abogadoDetalle.persona.materno,callback:function(o){e.$set(e.abogadoDetalle.persona,"materno",o)},expression:"abogadoDetalle.persona.materno"}})],1),a("el-form-item",{attrs:{label:"Correo",prop:"correo"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{type:"email"},model:{value:e.abogadoDetalle.persona.correo,callback:function(o){e.$set(e.abogadoDetalle.persona,"correo",o)},expression:"abogadoDetalle.persona.correo"}})],1),a("el-form-item",{attrs:{label:"Descripción",prop:"descripción_abogado"}},[a("el-input",{staticStyle:{height:"80px"},attrs:{type:"textarea"},model:{value:e.abogadoDetalle.descripción_abogado,callback:function(o){e.$set(e.abogadoDetalle,"descripción_abogado",o)},expression:"abogadoDetalle.descripción_abogado"}})],1),a("el-form-item",{attrs:{label:"Eslogan",prop:"eslogan"}},[a("el-input",{staticStyle:{width:"70%"},model:{value:e.abogadoDetalle.eslogan,callback:function(o){e.$set(e.abogadoDetalle,"eslogan",o)},expression:"abogadoDetalle.eslogan"}})],1),a("el-form-item",{attrs:{label:"Nº colegiatura",prop:"numero_colegiatura"}},[a("el-input",{staticStyle:{width:"30%"},model:{value:e.abogadoDetalle.numero_colegiatura,callback:function(o){e.$set(e.abogadoDetalle,"numero_colegiatura",e._n(o))},expression:"abogadoDetalle.numero_colegiatura"}})],1)],1),a("div",[a("el-form-item",{attrs:{label:"Tipo de documento",prop:"documento"}},[a("el-input",{staticStyle:{width:"30%"},attrs:{disabled:""},model:{value:e.abogadoDetalle.persona.id_004_tipo_documento,callback:function(o){e.$set(e.abogadoDetalle.persona,"id_004_tipo_documento",o)},expression:"abogadoDetalle.persona.id_004_tipo_documento"}})],1),a("el-form-item",{attrs:{label:"Nº de documento",prop:"numero"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{disabled:"",prop:"numero"},model:{value:e.abogadoDetalle.persona.numero_documento,callback:function(o){e.$set(e.abogadoDetalle.persona,"numero_documento",o)},expression:"abogadoDetalle.persona.numero_documento"}})],1),a("el-form-item",{attrs:{label:"Nº de Telefono",prop:"telefono1"}},[a("el-input",{staticStyle:{width:"30%"},attrs:{prop:"telefono1"},model:{value:e.abogadoDetalle.usuario.telefono1,callback:function(o){e.$set(e.abogadoDetalle.usuario,"telefono1",o)},expression:"abogadoDetalle.usuario.telefono1"}})],1),a("el-form-item",{attrs:{label:"Nº telefono(opcional)",prop:"telefono2"}},[a("el-input",{staticStyle:{width:"30%"},attrs:{prop:"telefono2"},model:{value:e.abogadoDetalle.usuario.telefono2,callback:function(o){e.$set(e.abogadoDetalle.usuario,"telefono2",o)},expression:"abogadoDetalle.usuario.telefono2"}})],1)],1)]),a("br"),a("br")],1):e._e(),e.estado?e._e():a("el-form",{ref:"abogadoDetalle",staticClass:"demo-ruleForm",attrs:{model:e.abogadoDetalle,"label-width":"180px",size:"mini"}},[1==e.abogadoDetalle.id_003_estado?a("el-form-item",[a("h1",[e._v("Desactivar Cuenta")]),a("el-button",{attrs:{type:"warning",plain:""},on:{click:function(o){return e.actualizar()}}},[e._v("DESACTIVAR")])],1):a("el-form-item",[a("h1",[e._v("Activar Cuenta")]),a("el-button",{attrs:{type:"primary",plain:""},on:{click:function(o){return e.actualizar()}}},[e._v("ACTIVAR")])],1),a("div",{staticStyle:{"column-count":"2"}},[a("div",[a("el-form-item",{attrs:{label:"Nombre",prop:"nombres"}},[a("el-input",{staticStyle:{width:"50%"},attrs:{disabled:""},model:{value:e.abogadoDetalle.persona.nombres,callback:function(o){e.$set(e.abogadoDetalle.persona,"nombres",o)},expression:"abogadoDetalle.persona.nombres"}})],1),a("el-form-item",{attrs:{label:"Apellido Paterno",prop:"paterno"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{disabled:""},model:{value:e.abogadoDetalle.persona.paterno,callback:function(o){e.$set(e.abogadoDetalle.persona,"paterno",o)},expression:"abogadoDetalle.persona.paterno"}})],1),a("el-form-item",{attrs:{label:"Apellido Materno",prop:"materno"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{disabled:""},model:{value:e.abogadoDetalle.persona.materno,callback:function(o){e.$set(e.abogadoDetalle.persona,"materno",o)},expression:"abogadoDetalle.persona.materno"}})],1),a("el-form-item",{attrs:{label:"Correo",prop:"correo"}},[a("el-input",{staticStyle:{width:"80%"},attrs:{disabled:"",type:"email"},model:{value:e.abogadoDetalle.persona.correo,callback:function(o){e.$set(e.abogadoDetalle.persona,"correo",o)},expression:"abogadoDetalle.persona.correo"}})],1),a("el-form-item",{attrs:{label:"Descripción",prop:"descripción_abogado"}},[a("el-input",{staticStyle:{height:"80px"},attrs:{disabled:"",type:"textarea"},model:{value:e.abogadoDetalle.descripción_abogado,callback:function(o){e.$set(e.abogadoDetalle,"descripción_abogado",o)},expression:"abogadoDetalle.descripción_abogado"}})],1),a("el-form-item",{attrs:{label:"Eslogan",prop:"eslogan"}},[a("el-input",{staticStyle:{width:"70%"},attrs:{disabled:""},model:{value:e.abogadoDetalle.eslogan,callback:function(o){e.$set(e.abogadoDetalle,"eslogan",o)},expression:"abogadoDetalle.eslogan"}})],1),a("el-form-item",{attrs:{label:"Nº colegiatura",prop:"numero_colegiatura"}},[a("el-input",{staticStyle:{width:"30%"},attrs:{disabled:""},model:{value:e.abogadoDetalle.numero_colegiatura,callback:function(o){e.$set(e.abogadoDetalle,"numero_colegiatura",e._n(o))},expression:"abogadoDetalle.numero_colegiatura"}})],1)],1),a("div",[a("el-form-item",{attrs:{label:"Tipo de documento",prop:"documento"}},[a("el-input",{staticStyle:{width:"30%"},attrs:{disabled:""},model:{value:e.abogadoDetalle.persona.id_004_tipo_documento,callback:function(o){e.$set(e.abogadoDetalle.persona,"id_004_tipo_documento",o)},expression:"abogadoDetalle.persona.id_004_tipo_documento"}})],1),a("el-form-item",{attrs:{label:"Nº de documento",prop:"numero"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{disabled:"",prop:"numero"},model:{value:e.abogadoDetalle.persona.numero_documento,callback:function(o){e.$set(e.abogadoDetalle.persona,"numero_documento",o)},expression:"abogadoDetalle.persona.numero_documento"}})],1),a("el-form-item",{attrs:{label:"Nº de Telefono",prop:"telefono1"}},[a("el-input",{staticStyle:{width:"30%"},attrs:{disabled:"",prop:"telefono1"},model:{value:e.abogadoDetalle.usuario.telefono1,callback:function(o){e.$set(e.abogadoDetalle.usuario,"telefono1",o)},expression:"abogadoDetalle.usuario.telefono1"}})],1),a("el-form-item",{attrs:{label:"Nº telefono(opcional)",prop:"telefono2"}},[a("el-input",{staticStyle:{width:"30%"},attrs:{disabled:"",prop:"telefono2"},model:{value:e.abogadoDetalle.usuario.telefono2,callback:function(o){e.$set(e.abogadoDetalle.usuario,"telefono2",o)},expression:"abogadoDetalle.usuario.telefono2"}})],1)],1)]),a("br"),a("br")],1)],1):e._e(),e.VConfirmadas?a("div",{staticClass:"grid-content bg-purple"},[a("br"),a("br"),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"180px",size:"mini"}},[a("el-form-item",{attrs:{label:"Nombre",prop:"usuario.persona.nombres"}},[a("el-input",{staticStyle:{width:"30%"},model:{value:e.ruleForm.usuario.persona.nombres,callback:function(o){e.$set(e.ruleForm.usuario.persona,"nombres",o)},expression:"ruleForm.usuario.persona.nombres"}})],1),a("el-form-item",{attrs:{label:"Apellido Paterno",prop:"usuario.persona.paterno"}},[a("el-input",{staticStyle:{width:"30%"},model:{value:e.ruleForm.usuario.persona.paterno,callback:function(o){e.$set(e.ruleForm.usuario.persona,"paterno",o)},expression:"ruleForm.usuario.persona.paterno"}})],1),a("el-form-item",{attrs:{label:"Apellido Materno",prop:"usuario.persona.materno"}},[a("el-input",{staticStyle:{width:"30%"},model:{value:e.ruleForm.usuario.persona.materno,callback:function(o){e.$set(e.ruleForm.usuario.persona,"materno",o)},expression:"ruleForm.usuario.persona.materno"}})],1),a("el-form-item",{attrs:{label:"Correo",prop:"usuario.persona.correo"}},[a("el-input",{staticStyle:{width:"30%"},attrs:{type:"email"},model:{value:e.ruleForm.usuario.persona.correo,callback:function(o){e.$set(e.ruleForm.usuario.persona,"correo",o)},expression:"ruleForm.usuario.persona.correo"}})],1),a("el-form-item",{staticStyle:{width:"40%"},attrs:{label:"Tipo de documento",prop:"usuario.persona.id_004_tipo_documento"}},[a("el-select",{attrs:{placeholder:"Elija el tipo de documento"},model:{value:e.ruleForm.usuario.persona.id_004_tipo_documento,callback:function(o){e.$set(e.ruleForm.usuario.persona,"id_004_tipo_documento",o)},expression:"ruleForm.usuario.persona.id_004_tipo_documento"}},[a("el-option",{attrs:{label:"DNI",value:"3"}}),a("el-option",{attrs:{label:"RUC",value:"4"}}),a("el-option",{attrs:{label:"CARNET EXTRANJERIA",value:"5"}}),a("el-option",{attrs:{label:"PASAPORTE",value:"6"}})],1)],1),null==e.ruleForm.usuario.persona.id_004_tipo_documento?a("el-form-item",{attrs:{label:"Nº de documento",prop:"usuario.persona.numero_documento"}},[a("el-input",{staticStyle:{width:"30%"},attrs:{disabled:""},model:{value:e.ruleForm.usuario.persona.numero_documento,callback:function(o){e.$set(e.ruleForm.usuario.persona,"numero_documento",e._n(o))},expression:"ruleForm.usuario.persona.numero_documento"}})],1):a("el-form-item",{attrs:{label:"Nº de documento",prop:"usuario.persona.numero_documento"}},[a("el-input",{staticStyle:{width:"30%"},model:{value:e.ruleForm.usuario.persona.numero_documento,callback:function(o){e.$set(e.ruleForm.usuario.persona,"numero_documento",e._n(o))},expression:"ruleForm.usuario.persona.numero_documento"}})],1),a("el-form-item",{attrs:{label:"Nº de Telefono",prop:"usuario.telefono1"}},[a("el-input",{staticStyle:{width:"30%"},model:{value:e.ruleForm.usuario.telefono1,callback:function(o){e.$set(e.ruleForm.usuario,"telefono1",e._n(o))},expression:"ruleForm.usuario.telefono1"}})],1),a("el-form-item",{attrs:{label:"Nº telefono(opcional)"}},[a("el-input",{staticStyle:{width:"30%"},model:{value:e.ruleForm.usuario.telefono2,callback:function(o){e.$set(e.ruleForm.usuario,"telefono2",e._n(o))},expression:"ruleForm.usuario.telefono2"}})],1),a("el-form-item",{attrs:{label:"Nº colegiatura",prop:"numero_colegiatura"}},[a("el-input",{staticStyle:{width:"30%"},model:{value:e.ruleForm.numero_colegiatura,callback:function(o){e.$set(e.ruleForm,"numero_colegiatura",e._n(o))},expression:"ruleForm.numero_colegiatura"}})],1),a("el-form-item",{attrs:{label:"Descripción",prop:"descripción_abogado"}},[a("el-input",{staticStyle:{width:"50%"},attrs:{type:"textarea"},model:{value:e.ruleForm.descripción_abogado,callback:function(o){e.$set(e.ruleForm,"descripción_abogado",o)},expression:"ruleForm.descripción_abogado"}})],1),a("el-form-item",{attrs:{label:"Eslogan",prop:"eslogan"}},[a("el-input",{staticStyle:{width:"40%"},model:{value:e.ruleForm.eslogan,callback:function(o){e.$set(e.ruleForm,"eslogan",o)},expression:"ruleForm.eslogan"}})],1)],1)],1):e._e()])],1)},l=[],r={data:function(){return{abogados:null,estado:!1,abogadoDetalle:{usuario:{telefono1:"",telefono2:""},persona:{nombres:"",paterno:"",materno:"",correo:"",id_004_tipo_documento:"",numero_documento:""},numero_colegiatura:"",eslogan:"","descripción_abogado":""},actualizarActivo:{numero_colegiatura:null,id_003_estado:null},VRegistradas:!0,VConfirmadas:!1,VCanceladas:!1,VDetalles:!1,ruleForm:{usuario:{persona:{nombres:"",paterno:"",materno:"",correo:"",id_004_tipo_documento:null,numero_documento:""},id_008_tipo:16,id_usuario_creador:6,telefono1:"",telefono2:""},numero_colegiatura:"",id_003_estado:1,"descripción_abogado":"",eslogan:""},rules:{usuario:{persona:{nombres:[{required:!0,message:"Falto ingresar el nombre",trigger:"blur"}],paterno:[{required:!0,message:"Falto ingresar el apellido Paterno",trigger:"blur"}],materno:[{required:!0,message:"Falto ingresar el apellido Materno",trigger:"blur"}],correo:[{required:!0,message:"Falto ingresar el correo",trigger:"blur"}],id_004_tipo_documento:[{required:!0,message:"Intregue el tipo de documento",trigger:"change"}],numero_documento:[{required:!0,message:"Ingrese el Nº del documento",trigger:"blur"},{type:"number",message:"Ingrese numeros"}]},telefono1:[{required:!0,message:"Ingrese el Nº de celular",trigger:"blur"},{type:"number",message:"Ingrese numeros"}]},numero_colegiatura:[{required:!0,message:"Ingrese el Nº del documento",trigger:"blur"},{type:"number",message:"Ingrese numeros"}],"descripción_abogado":[{required:!0,message:"Ingrese una descripcion de usted",trigger:"blur"}],eslogan:[{required:!0,message:"Falto ingresar el eslogan",trigger:"blur"},{min:15,max:40,message:"debe tener minimo 15 caracteres",trigger:"blur"}]}}},created:function(){this.Registradas()},methods:{volver:function(){this.VDetalles=!1,this.VRegistradas=!0},submitForm:function(e){var o=this;console.log(e+"fuera del if"),this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("si da gaaaa!"),console.log(o.arreglo+"dentro del if"),o.grabar()}))},resetForm:function(e){this.$refs[e].resetFields()},editar:function(){1==this.estado?this.estado=!1:this.estado=!0},grabar:function(){var e="/abogado/";this.$http.post(e,this.ruleForm).then((function(e){console.log(e)}))},actualizar:function(){var e="/actualizarAbogado/";this.actualizarActivo.numero_colegiatura=this.abogadoDetalle.numero_colegiatura,1==this.abogadoDetalle.id_003_estado?this.actualizarActivo.id_003_estado=2:this.actualizarActivo.id_003_estado=1,this.$http.post(e,this.actualizarActivo).then((function(e){console.log(e)})),this.Registradas()},Registradas:function(){var e=this,o="listarAbogado/0/0/0";this.$http.get(o).then((function(o){e.abogados=o.data.body,console.log(e.abogados),e.VRegistradas=!0,e.VConfirmadas=!1,e.VCanceladas=!1,e.VDetalles=!1}))},Confirmadas:function(){this.VRegistradas=!1,this.VConfirmadas=!0,this.VCanceladas=!1,this.VDetalles=!1},Canceladas:function(){this.VRegistradas=!1,this.VConfirmadas=!1,this.VCanceladas=!0,this.VDetalles=!1},Detalles:function(e){var o=this,a="listarAbogado/"+e+"/0/0";this.$http.get(a).then((function(e){o.abogadoDetalle=e.data.body[0],console.log(o.abogadoDetalle)})),this.VRegistradas=!1,this.VConfirmadas=!1,this.VCanceladas=!1,this.VDetalles=!0}}},n=r,i=(a("2cca"),a("2877")),s=Object(i["a"])(n,t,l,!1,null,null,null);o["default"]=s.exports}}]);
//# sourceMappingURL=chunk-fd8e9fa8.70ac3f25.js.map