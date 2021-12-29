<template>
  <el-col :md="6" :xs="24">
    <el-card
      v-for="(item, index) in listAsesoriaComputed"
      :key="index"
      class="box-card"
      :class="{ active: activeComputed == index }"
      shadow="hover"
    >
      <a
        href="javascript:;"
        @click="
          $emit('mostrar', { index: index, id_asesoria: item.id_asesoria })
        "
      >
        <span
          class="circle-state"
          v-if="!item.estado_visto"
        ></span>
        <p class="fecha-hora">{{ item.fecha_solicitud }} {{ item.hora_solicitud }}</p>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>

        <div v-if="variable.valor==1" class="text item">
         <br><br> <span align="left">{{ item.usuario.cuenta }}</span>
          <h2 align="left">{{ item.descripción_asistente }}</h2>
        </div>

        <div v-else class="text item">
         <br><br> <span align="left">{{ item.usuario.cuenta }}</span>
          <h2 align="left">{{ item.descripción_solicitante }}</h2>
        </div>

      </a>
    </el-card>
  </el-col>
</template>

<script>
export default {
  props: ["variable", "active"],
  data() {
    return {
      
    }
  },
  created() {
   
    console.log(this.variable.valor)
  },
  computed: {
    listAsesoriaComputed() {
      return this.variable.listAsesoria
    },
    activeComputed() {
      return this.active
    },
  },
};
</script>

<style lang="scss">
.fecha-hora{
position: absolute;
right: 10px;
top: 2px;
color: #9D9D9D;
}
</style>