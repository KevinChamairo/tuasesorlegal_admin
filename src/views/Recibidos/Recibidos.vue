<template>
  <el-row class="apprecibidos">
    <bandeja :variable="variable" :active="active" v-if="eventMobileLeft" ref="bandejaRef" @mostrar="mostrar"/>
    <el-col :md="18" :xs="24" v-loading.lock="loading" v-if="eventMobileRight" element-loading-spinner="el-icon-message" element-loading-text="Cargando Información...">
      <div class="btn-back" v-if="isMobile" @click="selectDetail=null"><i class="el-icon-back"></i></div>
      <bandeja-detail :selectDetail="selectDetail" />
      <div class="grid-content bg-purple" v-if="selectDetail">
        <div class="form-update">
          <h3>Generar Oportunidad</h3>
          <el-form :model="oportunidad" ref="oportunidad" hide-required-asterisk label-position="top" name ="formulario">
            <el-form-item label="Explicación del caso" prop="descripción_asistente" :rules="[{required: true, message: 'Campo requerido', trigger: 'blur'}]">
              <el-input
                type="textarea"
                :rows="4"
                v-model="oportunidad.descripción_asistente"
                id="texto" ref="texto"
               :autofocus ="true">
              </el-input>
              
            </el-form-item>
            <el-form-item label="Especialidad del caso" prop="id_007_especialidad" :rules="[{required: true, message: 'Campo requerido', trigger: 'blur'}]">
              <el-select
                v-model="oportunidad.id_007_especialidad"
                placeholder="seleccione especialidad"
              >
                <el-option
                  v-for="(item, index) in listEspecialidad"
                  :label="item.nombre"
                  :key="index"
                  :value="item.idParametro"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="top-solid">
              <el-button type="primary" @click="Descartar()">Descartar</el-button>
              <el-button type="info" @click="generarOportunidad('oportunidad')">Generar</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div v-if="!variable.listAsesoria && !selectDetail && !getInfo" class="not-data-div">
        <p class="not-data"><i class="el-icon-message"></i>No hay información</p>
      </div>
      <div v-if="variable.listAsesoria && !selectDetail" class="not-data-div">
        <p class="not-data"><i class="el-icon-message"></i>Seleccione un mensaje</p>
      </div>
      <div v-if="!variable.listAsesoria && getInfo" class="not-data-div">
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Bandeja from '../Shared/Bandeja.vue'
import EventBus from '@/helpers/EventBus'
import BandejaDetail from '../Shared/BandejaDetail.vue'
export default {
  components: {
    Bandeja,
    BandejaDetail
  },
  props: ['idUser'],
  data() {
    return {
      loading: false,
      getInfo: true,
      active: null,
      variable: {
        valor: 2,
        listAsesoria: null,
      },
      listAsesoria: null,
      selectDetail: null,
      listEspecialidad: null,
      oportunidad: {
        id_asesoria: null,
        descripción_asistente: null,
        id_usuario_asistente: null,
        id_007_especialidad: null,
        id_005_estado: 23
      }
   
   }

  },
  created() {
    this.getAsesorias()
    this.getListEspecialidad()
    let usuario = JSON.parse(localStorage.getItem('logueado'))
    this.oportunidad.id_usuario_asistente = usuario.id_usuario
    //this.ponleFocus()
    
  },
  
  methods: {
// focos(){
// Vue.nextTick().then(()=> this.$refs.input.focus());
//   },
  Descartar() {
      this.oportunidad.id_005_estado = 11;
      const endpoint = "/asesoria/UpdateAsesoria/";
      this.$http.post(endpoint, this.oportunidad).then(response => {
             if(response.data.success) {
              this.loading = false
              this.$message.error({
                message: 'La asesoria se descarto con exito!!!'
              });
              this.getAsesorias()
              this.selectDetail = null
              this.active = null
            } else {
              this.$message.error('Error al generar oportunidad')
            }
        
        
        });
    },
    getListEspecialidad() {
      const endpoint = "/listarParametros/" + 0 + "/" + 7
      this.$http.get(endpoint).then((response) => {
        this.listEspecialidad = response.data.body
      })
    },
     generarOportunidad(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          const endpoint = "/asesoria/UpdateAsesoria/";
          this.$http.post(endpoint, this.oportunidad).then((response) => {
            if(response.data.success) {
              this.loading = false
              this.$message({
                message: 'Se generó oportunidad',
                type: 'success'
              });
              // this.$emit('updateCant', this.variable.listAsesoria.length)
              this.getAsesorias()
              this.selectDetail = null
              this.active = null
            } else {
              this.$message.error('Error al generar oportunidad')
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getAsesorias() {
      this.loading = true
      const endpoint = "/getAsesoria/" + 0 + "/" + 0 + "/" + 0 + "/" + 7
      this.$http.get(endpoint).then((response) => {
        this.variable.listAsesoria = response.data.resultado
        this.updateCount()
        this.getInfo = false
        this.loading = false
      })
    },
    detailAsesoria(id_asesoria) {
      this.loading = true
      const endpoint = "/getAsesoria/" + id_asesoria + "/" + 0 + "/" + 0 + "/" + 7+'?Estado_visto=true'
      this.$http.get(endpoint).then((response) => {
        this.selectDetail = response.data.resultado[0]
        this.loading = false
        this.oportunidad.descripción_asistente = this.selectDetail.descripción_solicitante
        this.$nextTick(()=> this.$refs.texto.focus())
        this.updateCount()
      })
    },
    updateCount () {
      let result = this.variable.listAsesoria.filter(item => !item.estado_visto)
      EventBus.$emit('updateEstadoVisto', result.length)
    },
    mostrar(val) {
      // document.getElementById("texto").focus();
      this.active = val.index
      this.oportunidad.id_asesoria = val.id_asesoria
      // this.oportunidad.id_usuario_asistente = this.idUser
      this.detailAsesoria(val.id_asesoria)
      this.variable.listAsesoria[val.index].estado_visto = true
    }
  },
  computed: {
    eventMobileLeft(){
      if(this.isMobile) {
        if(this.selectDetail) {
          return false
        } else {
          return true
        }
      } else {
        return true
      }
    },
    eventMobileRight() {
      if (this.isMobile) {
        if(this.selectDetail) {
          return true
        } else {
          return false
        }
      } else {
        return true
      }
    },
    isMobile() {
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-back {
  display: block;
  float: right;
  font-size: 34px;
  right: 8px;
  position: relative;
  top: 5px;
}
.not-data-div {
  height: calc(100vh - 100px);
}
.not-data {
  i {
    font-size: 70px;
    color: #ddf3ff;
  }
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
//mobile css//
@media only screen and (max-width: 600px) {
  // .apprecibidos {

  // }
}
</style>