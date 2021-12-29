<template>
  <el-row>
    <el-tabs v-model="viewActive" @tab-click="handleClick" v-if="viewTab">
      <el-tab-pane :label="titlePorAsignar" name="por-asignar" key="por-asignar" >
        <por-asignar @updateCant="updateCant" v-if="viewTab == 'por-asignar'"/>
      </el-tab-pane>
      <el-tab-pane label="Por Responder" name="por-responder" key="por-responder" >
        <por-responder v-if="viewTab =='por-responder'"/>
      </el-tab-pane>
      <el-tab-pane :label="titlePorPublicar" name="por-publicar" key="por-publicar">
        <por-publicar @updateCant1="updateCant1" v-if="viewTab =='por-publicar'"/>
      </el-tab-pane>
      <el-tab-pane label="Publicados" name="publicados" key="publicados" >
        <publicados v-if="viewTab == 'publicados'"/>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script>
import PorAsignar from './PorAsignar.vue'
import PorPublicar from './PorPublicar.vue'
import PorResponder from './PorResponder.vue'
import Publicados from './Publicados.vue'
export default {
  components: {
    PorAsignar,
    PorPublicar,
    PorResponder,
    Publicados
  },
  data() {
    return {
      viewTab: "por-asignar",
      listaAsesoriaAbo: null,
      viewActive : 'por-asignar',
      titlePorAsignar : 'Por asignar (0)',
      titlePorPublicar : 'Por Publicar (0)'
    }
  },
  methods: {
   handleClick(obj, e) {
     this.viewTab =null
  this.viewTab = obj.$vnode.key 
  },
    updateCant(val) {
      this.titlePorAsignar = 'Por asignar  ('+(val ? val : 0) +')'
    },
    updateCant1(val) {
      this.titlePorPublicar = 'Por Publicar ('+(val ? val : 0) +')'
    },
    //asdasdasd
    
  }
}
</script>

<style>
.el-tabs__content, .el-tabs.el-tabs--top, .el-tab-pane, .el-tab-pane > div, .el-tab-pane .el-row {
  height: 100%;
}
.el-tabs__item.is-active, .el-tabs__item:hover, .el-tabs__item:focus {
  color: #3a7bdd;
  font-weight: 600;
}
.el-tabs__active-bar {
  background-color: #3a7bdd;
}
.el-tabs--top .el-tabs__item.is-top {
  padding: 0 20px !important;
}
.el-tabs__header {
  margin-bottom: 0px;
}
</style>