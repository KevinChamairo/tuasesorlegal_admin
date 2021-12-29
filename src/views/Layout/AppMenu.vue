<template>
  <el-aside width="200px" class="appmenu" :class="{ active: active }">
    <div class="appicon change" @click="$emit('showMenu', false)">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <a href="#" class="logo-admin">tuasesorlegal.pe</a>

    <el-menu
      :router="true" :default-active="activeLink"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>Asesorias</span>
        </template>
          <el-menu-item-group>
          <el-menu-item index="/">Recibidos ({{mensajes ? mensajes : '0'}})</el-menu-item>
          <el-menu-item index="/oportunidades">Oportunidades</el-menu-item>
          <el-menu-item index="/descartados">Descartados</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>Abogados</span>
        </template>
          <el-menu-item-group>
          <el-menu-item index="/abogados">Registrados</el-menu-item>
          <el-menu-item index="/abogados/nuevo">Agregar</el-menu-item>
          <el-menu-item index="/abogados/deshabilitados">Deshabilitados</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-date"></i>
          <span>Citas</span>
        </template>
          <el-menu-item-group>
          <el-menu-item index="/citas">Registradas</el-menu-item>
          <el-menu-item index="/citas/confirmadas">Confirmadas</el-menu-item>
          <el-menu-item index="/citas/canceladas">Canceladas</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
import EventBus from '@/helpers/EventBus'
export default {
  props: ["active"],
  data() {
    return {
      activeLink: null,
      mensajes: null,
    };
  },
  created() {
    EventBus.$on('updateEstadoVisto', (data) => {
      this.mensajes = data
    })
  },
  mounted() {
    this.activeLink = this.$route.path;
  },
  watch: {
    $route(newVal, oldVal) {
      this.activeLink = newVal.path;
    },
  },
};
</script>

<style lang="scss">
.change {
  display: none;
}
.bar1,
.bar2,
.bar3 {
  width: 30px;
  height: 4px;
  background-color:#3a7bdd;
  margin: 6px 0;
  transition: 0.4s;
}
.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
.el-submenu__title, .el-submenu__title i {
  color: #3a7bdd !important;
  font-weight: 600;
}
.el-submenu {
  border-bottom: solid 1px #ebebeb;
}
.el-menu-item-group__title {
  display: none;
}
.el-menu-item.is-active {
  color: #ffffff !important;
  background: #3a7bdd;
}
.el-menu-item:hover,
.el-menu-item:focus {
  color: #ffffff !important;
  background: #3a7bdd !important;
  i {
    color: #fff !important;
  }
}
//mobile css//
@media only screen and (max-width: 600px) {
  .change {
  display: inline-block;
    position: absolute;
    z-index: 1;
    top: 11px;
    left: 6px;
}
  .appmenu {
    position: absolute;
    z-index: 9999999;
    background: white;
    height: 100%;
    left: -200px;
    &.active {
      left: 0px;
      &:after {
        background: #00000040;
        content: " ";
        height: 100%;
        width: 100%;
        position: fixed;
        right: -200px;
        top: 0;
      }
    }
  }
}
</style>