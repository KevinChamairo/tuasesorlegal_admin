<template>
    <div>
        <el-card shadow="always">
        <el-table
                v-if="abogados"
                height="800"
                :data="abogados"
                style="width: 100%">
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <p style="color: #3a7bdd">Datos del abogado: </p><p> {{ props.row.persona.nombres }}, {{ props.row.persona.paterno }} {{ props.row.persona.materno }}</p>
                    <p style="color: #3a7bdd">correo: </p> <p>{{ props.row.persona.correo }}</p> 
                    <p style="color: #3a7bdd">Telefono: </p><p> {{ props.row.usuario.telefono1 }}</p>
                  </template>
                </el-table-column>
                <el-table-column
                width="100"
                 align="center"
                  prop="id_abogado"
                  label="N° abogado">
                </el-table-column>
                <el-table-column
                 align="center"
                  prop="numero_colegiatura"
                  label="N° Colegiatura">
                </el-table-column>
               
                <el-table-column
                 align="center"
                  prop="descripción_abogado"
                  label="Descripcion">
                </el-table-column>
               <el-table-column
                align="center"
                  prop="eslogan"
                  label="Eslogan">
                </el-table-column> 
               
              </el-table>
        </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return {
            abogados: null,
        }
    },
    created() {
        this.getListEspecialidad();
    },
    methods: {
       getListEspecialidad() {
      const endpoint = "/listarAbogado/0/0/2";
      this.$http.get(endpoint).then((response) => {
        this.abogados = response.data.body;
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
 
  
</style>