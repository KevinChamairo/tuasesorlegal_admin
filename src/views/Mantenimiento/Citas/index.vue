<template>
    <div>
      <div class="desk">
        <el-card shadow="always">
        <el-table
        :data="citas"
        style="width: 100%">
        <el-table-column
            align="center"
            prop="id_cita"
            label="N° de Cita">
        </el-table-column>
        <el-table-column
            align="center"
            prop="fecha_creacion"
            label="Fecha Cita">
        </el-table-column>
        
        <el-table-column
            align="center"
            prop="hora_inicio"
            label="Hora Cita">
        </el-table-column>
            <el-table-column
            align="center"
            prop="asesoriaAbogado.descripción_asistente"
              label="Descripción Asistente">
        </el-table-column>
        <el-table-column
            align="center"
            prop="asesoriaAbogado.descripción_asistente"
            label="Voucher">
            <template slot-scope="scope">
              <a v-bind:href="urlDescarga+ scope.row.id_cita" target="_blank">Ver Voucher</a>
            </template>
        </el-table-column>
        <el-table-column  
            width="250"
            align="center"
            prop="asesoriaAbogado.descripción_asistente"
            label="Validar voucher">
            <template slot-scope="scope">
            <div style="column-count: 2">
            <div><el-button type="primary" @click="Descartar(scope.row.id_cita)">Descartar</el-button></div>
            <div><el-button type="info"  @click="grabarmodal(scope.row.id_cita)">Validar</el-button></div>
            </div>
          </template>
        </el-table-column>
        
        </el-table>
        </el-card>
         </div>
      <div class="mobile">
        <el-card shadow="always">
        <el-table
        :data="citas"
        style="width: 100%">
         <el-table-column type="expand">
                  <template slot-scope="scope"> 
                  <p style="color: #3a7bdd; size:25px;font-weight: bold;">Datos de Cita</p>
                  <p style="color: #A0A0A0">Fecha Cita </p><p> {{ scope.row.trazabilidad.fecha_reserva }}</p>
                  <p style="color: #A0A0A0">Hora Cita </p><p> {{ scope.row.hora_inicio }}</p>

                  <p style="color: #3a7bdd; size:25px; font-weight: bold;">Datos de Voucher</p>
                  <a v-bind:href="urlDescarga+ scope.row.id_cita" target="_blank">Ver Voucher</a>
                  <p style="color: #A0A0A0">
                    Validar Voucher: </p>
                  <div style="column-count: 2">
                  <div><el-button type="primary" @click="Descartar(scope.row.id_cita)">Descartar</el-button></div>
                  <div><el-button type="info"  @click="grabarmodal(scope.row.id_cita)">Validar</el-button></div>
                  </div>
                  </template>
         </el-table-column>
        <el-table-column
            align="center"
            prop="id_cita"
            label="N° de Cita">
        </el-table-column>
            <el-table-column
            align="center"
            prop="asesoriaAbogado.descripción_asistente"
              label="Descripción Asistente">
        </el-table-column>

        
        </el-table>
        </el-card>
         </div>
         <modal-validar-cita v-if="showModalValidar" @grabarmodal="grabarmodal" :enviarDato="enviarDato"/>
    </div>
</template>
<script>
import ModalValidarCita from './ModalValidarCita.vue';
export default {
  components: { ModalValidarCita },
    data(){
       return {
            citas:null,
            descartar:{
              id_cita: null,
              id_011_estado: 26
            },
            validar:{
              id_cita: null,
              id_011_estado: 25
            },
            urlDescarga: "http://142.93.14.230:8091/api/abogados/voucher/",
            showModalValidar: false,
            enviarDato: null
        }
    },
    created() {
        this.Registradas();
        this.verVoucher();
    },
    methods: {
      Descartar(variable){
        this.descartar.id_cita = variable
         const endpoint = "/actualizarCitaAsesoria/";
         this.$http.post(endpoint, this.descartar).then(response => {
        this.$message.error('Se descarto la cita')
      });
        
      },
     grabarmodal(val){
            if(this.showModalValidar == false){
                this.showModalValidar = true
            }
            else{
                this.showModalValidar = false
            }
            this.enviarDato = val,
            this.Registradas()
        },
        
        Registradas(){
            const endpoint = "/listarCitas/0/0/0/24";
            this.$http.get(endpoint).then(response => {
            this.citas = response.data.Body;
            console.log(this.citas)
            console.log(response);
        });
      },
      // verVoucher(){
      //   const endpoint = "/voucher/"; 
      //   this.$http.get(endpoint).then(response => {
      //       console.log(response + "aqui estoy");
      //   });
      // }
    }
    
}
</script>
<style lang="scss">
  
  .logo-admin {
    line-height: 60px;
    background: #ddf3ff;
    position: relative;
    display: block;
    text-align: center;
  }
  
  .el-header {
    background-color: #ddf3ff;
    color: #333;
    line-height: 60px;
    .r-btn {
      > div {
        display: inline-block;
        font-weight: 600;
        color: #3a7bdd;
        span {
          padding-right: 20px;
        }
      }
    }
  }
  .mobile{
  display: none;
}
@media only screen and (max-width: 600px) {
.desk{
  display: none
}
.mobile{
  display: block
}


}
 
  
</style>