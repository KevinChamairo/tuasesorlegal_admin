<template>
  <div class="grid-content bg-purple">
    <div class="form-update">
      <h3>Asignar Oportunidad</h3>
      <el-row class="content-item">
        <el-checkbox-group v-model="listAsesoriaAbogado">
          <el-col :span="3" v-for="(item, index) in abogados" :key="index">
            <el-card
              shadow="hover"
              :body-style="{ padding: '0px' }"
              :class="{ checkeado: isCheck(item.id_abogado) }"
            >
              <el-checkbox :label="item.id_abogado"> </el-checkbox>
              <img
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                class="image"
              />
              <div style="padding: 14px">
                <small>{{
                  item.persona.nombres +
                  " " +
                  item.persona.paterno +
                  item.id_abogado
                }}</small>
                <div class="bottom clearfix">
                  <!-- <time class="time">{{ currentDate }}</time> -->
                  <small class="text-especialidad">{{
                    item.descripción_abogado
                  }}</small>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-checkbox-group>
      </el-row>
      <el-form label-position="top">
        <el-form-item class="top-solid">
          <el-button type="primary" @click="deselecionar()"
            >Deseleccionar</el-button
          >
          <el-button type="info" @click="enviar()">Asignar</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["idAsesoria"],
  data() {
    return {
      abogados: null,
      listAsesoriaAbogado: [],

      // cambiarEstado: {
      //   id_asesoria: null,
      //   id_005_estado: 27
      // },
    };
  },
  created() {
    this.getListEspecialidad();
    // this.cambiarEstado.id_asesoria = this.idAsesoria
  },
  methods: {
    deselecionar() {
      this.listAsesoriaAbogado = [];
    },
    isCheck(val) {
      return this.listAsesoriaAbogado.includes(val);
    },
    getListEspecialidad() {
      const endpoint = "/listarAbogado/0/0/0";
      this.$http.get(endpoint).then((response) => {
        this.abogados = response.data.body;
      });
    },
    enviar() {
      this.$emit("enviar", this.dataSend);
      // this.actualizarEstado(this.cambiarEstado);
    },
    // actualizarEstado(val){
    //   const endpoint = "/asesoria/UpdateEstado"
    //   this.$http.post(endpoint, val).then((response) => {
    //     console.log(response)
    //   });
    // }
  },
  computed: {
    dataSend() {
      const newarray = this.listAsesoriaAbogado.map((item) => ({
        id_asesoria: this.idAsesoria,
        id_abogado: item,
      }));
      const datareturn = {
        listAsesoriaAbogado: newarray,
      };
      return datareturn;
    },
  },
};
</script>
<style lang="scss">
.el-checkbox-group {
  font-size: initial !important;
}
.content-item {
  .checkeado {
    border: solid 1px #55e2c6;
  }
  .el-checkbox:last-of-type {
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .el-checkbox__label {
    display: none;
  }
  .el-card__body {
    position: relative;
  }
}
</style>
<style lang="scss" scoped>
.image {
  width: 100%;
}
.content-item .el-col.el-col-3 {
  margin-right: 10px;
  margin-left: 10px;
}
.text-especialidad {
  color: #3a7bdd;
  font-weight: 600;
}
</style>