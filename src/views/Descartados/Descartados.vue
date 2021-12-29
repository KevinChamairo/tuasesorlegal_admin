<template>
 <div class="grid-content bg-purple">
                 <el-card shadow="always">
              <el-table
              height="800"
                :data="Descartados"
                style="width: 100%">
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <p style="color: #3a7bdd">Descripción: </p><p> {{ props.row.descripción_solicitante }}</p><br>
                 <form style="color: #3a7bdd">Ubicación: </form> <font style="font-size: 120%;"
                    >{{ props.row.ubigeo2.nombre }},
                    {{ props.row.ubigeo1.nombre }},
                    {{props.row.ubigeo.nombre }}</font
                  > 
                  </template>
                </el-table-column>
                <el-table-column
                width="100"
                 align="center"
                  prop="id_asesoria"
                  label="N° Asesoria">
                </el-table-column>
                <el-table-column
                 align="center"
                  prop="usuario.cuenta"
                  label="Usuario">
                </el-table-column>
               
                <el-table-column
                 align="center"
                  prop="fecha_creacion"
                  label="Fecha de asignacion">
                </el-table-column>
               
              </el-table>
        </el-card>
    </div>
</template>

<script>
export default {
data() {
    return {
         Descartados: null,
    }
},
created() {
    this.getDescartados();
},
methods: {
    

getDescartados() {
      const endpoint = "/getAsesoria/" + 0 + "/" + 0 + "/" + 0 + "/" + 11;
      this.$http.get(endpoint).then(response => {
        this.Descartados = response.data.resultado;
        console.log(this.Descartados)
       
      });
    }

},
}
</script>

<style>

</style>