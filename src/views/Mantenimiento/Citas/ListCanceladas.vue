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
            label="Descripcion de la Cita">
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
            label="Descripcion de la Cita">
        </el-table-column>
        
        </el-table>
        </el-card>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            citas:null,
        }
    },
    created() {
        this.Canceladas();
    },
    methods: {
        Canceladas(){
            const endpoint = "/listarCitas/0/0/0/26";
            this.$http.get(endpoint).then(response => {
            this.citas = response.data.Body;
            console.log(this.citas)
            console.log(response);
      });
        

    }
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