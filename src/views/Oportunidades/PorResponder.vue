<template>
  <div class="grid-content bg-purple">
    <!-- <el-card shadow="always"> -->
      <div class="desk">
              <el-table
                v-if="listaAsesoriaAbo"
                height="800"
                :data="listaAsesoriaAbo"
                style="width: 100%">
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <p style="color: #3a7bdd">Mi Descripción : </p><p> {{ props.row.asesoria.descripción_asistente }}</p>
                    <p style="color: #3a7bdd">Descripción solicitante: </p><p> {{ props.row.asesoria.descripción_solicitante }}</p>
                    <p style="color: #3a7bdd">Datos del abogado: </p><p> {{ props.row.persona.nombres }}, {{ props.row.persona.paterno }} {{ props.row.persona.materno }}</p>
                    <p style="color: #3a7bdd">Ubicación: </p> <p>{{ props.row.ubigeo2.nombre }},
                    {{ props.row.ubigeo1.nombre }},
                    {{props.row.ubigeo.nombre }}</p> 
                  </template>
                </el-table-column>
                <el-table-column
                width="100"
                 align="center"
                  prop="asesoria.id_asesoria"
                  label="N° Asesoria">
                </el-table-column>
                <el-table-column
                 align="center"
                  prop="persona.nombres"
                  label="Abogado Asignado">
                </el-table-column>
               
                <el-table-column
                 align="center"
                  prop="fecha_creacion"
                  label="Fecha de asignacion">
                </el-table-column>
               <el-table-column
                align="center"
                  prop="diasTranscurridos"
                  label="TIEMPO TRANSCURRIDO ">{{listaAsesoriaAbo.diasTranscurridos}} 
                </el-table-column> 
               
              </el-table>
      </div>
      <div class="mobile">
              <el-table
                v-if="listaAsesoriaAbo"
                height="800"
                :data="listaAsesoriaAbo"
                style="width: 100%">
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <p style="color: #3a7bdd">Mi Descripción : </p><p> {{ props.row.asesoria.descripción_asistente }}</p>
                    <p style="color: #3a7bdd">Descripción solicitante: </p><p> {{ props.row.asesoria.descripción_solicitante }}</p>
                    <p style="color: #3a7bdd">Datos del abogado: </p><p> {{ props.row.persona.nombres }}, {{ props.row.persona.paterno }} {{ props.row.persona.materno }}</p>
                    <p style="color: #3a7bdd">Ubicación: </p> <p>{{ props.row.ubigeo2.nombre }},
                    {{ props.row.ubigeo1.nombre }},
                    {{props.row.ubigeo.nombre }}</p> 
                    <p style="color: #3a7bdd">Fecha de asignacion : </p><p> {{ props.row.fecha_creacion }}</p>
                  </template>
                </el-table-column>
                <el-table-column
                width="100"
                 align="center"
                  prop="asesoria.id_asesoria"
                  label="N° Asesoria">
                </el-table-column>
               <el-table-column
                align="center"
                  prop="diasTranscurridos"
                  label="TIEMPO TRANSCURRIDO">{{listaAsesoriaAbo.diasTranscurridos}} 
                </el-table-column> 
               
              </el-table>
      </div>
            <!-- </el-card> -->
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
       listaAsesoriaAbo: null,
    };
  },
  created() {
   
     this.PorResponder();
  },

  methods: {
    PorResponder() {
      const endpoint = "/getAsesoriaAbogado/00/00/00/00";
      this.$http
        .get(endpoint)
        .then((response) => {
          console.log(response);
          let data = response.data.resultado;
          let array = [];
          if (data != null) {
            data.forEach((item) => {
              if (item.respuesta == null) {
                var date3 = moment(new Date(item.fecha_creacion + " 00:00:00"));
                let date4 = moment(new Date());
                item.diasTranscurridos = date4.diff(date3, "days") + " dia(s)";
                array.push(item);
              }
            });
          }
          this.listaAsesoriaAbo = array;
        })
        .catch((e) => {
          console.log(e);
          console.log("error en el servico PorResponder");
        });
    },
  },
};
</script>

<style>
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