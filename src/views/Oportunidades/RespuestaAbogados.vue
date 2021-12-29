<template>
  <div class="grid-content bg-purple">
    <h1 style="color:#3a7bdd">Respuesta de Abogados </h1>
    <div class="form-update">
      <el-checkbox-group v-model="UpdateAsesoriaAbogado">      
      <el-card
          v-for="(item, index) in selectAsesoriaAbogado"
          :key="index"
          :class="{ checkeado: isCheck(item.id_asesoria_abogado) }"
          shadow="hover"
        >
          <el-checkbox :label="item"> </el-checkbox>
          <div style="column-count: 1">
              <div class="text item, centrar">
                <br />
                <!-- <font style="color:#3a7bdd; font-size: 16px ">Asesoria numero:</font> <font style="font-size: 16px "> {{ item.asesoria.id_asesoria }}</font><br><br>
                <font style="color:#3a7bdd; font-size: 16px ">Fecha de envio:</font> <font style="font-size: 16px "> {{ item.fecha_creacion }}</font><br><br> -->
                <font style="color:#3a7bdd; font-size: 16px ">Fecha de respuesta:</font> <font style="font-size: 16px "> {{ item.fecha_modificacion }}</font><br><br>
                <font style="color:#3a7bdd; font-size: 16px ">Nombres:</font> <font style="font-size: 16px ">{{ item.persona.nombres }} {{item.persona.paterno}} {{item.persona.materno}}</font><br><br>
                <font style="color:#3a7bdd; font-size: 16px ">Respuesta del abogado:</font> <font style="font-size: 16px "> {{ item.respuesta }}</font><br><br>
      
                <h3 style="font-size: 16px ">Ingrese su respuesta :</h3>
                <br />
        
                <el-input
                  type="textarea"
                  v-model="
                    item.sendAsesoriaAbogado.descripción_asistente
                  "
                  id="fname"
                  name="fname"
                  :autosize="{ minRows: 7, maxRows: 9 }"
                ></el-input>

              </div>
          </div>
        </el-card>
        </el-checkbox-group>
    </div>
    <el-form label-position="top">
        <el-form-item class="top-solid">
          <el-button
                  type="primary"
                  style="float:left"
                  @click="UpdateAseAbo()"
                  >Enviar Respuesta y Notificar</el-button
                >
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  props: ["selectAsesoriaAbogado"],
  data(){
    return {
      user: null,
      UpdateAsesoriaAbogado: [],
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem('logueado'))
  },
  methods: {
    isCheck(val) {
      return this.UpdateAsesoriaAbogado.includes(val);
    },
    UpdateAseAbo() {
    this.$emit("UpdateAseAbo", this.dataSend);
    },
  },
  computed: {
    dataSend() {
      const newarray = this.UpdateAsesoriaAbogado.map((item) => ({
        id_asesoria_abogado: item.id_asesoria_abogado,
        descripción_asistente: item.sendAsesoriaAbogado.descripción_asistente,
        id_asistente_modificador: this.user.id_usuario,
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
.el-checkbox__label {
  display: none;
}
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