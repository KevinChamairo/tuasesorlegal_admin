<template>
  <el-header style="text-align: right" class="appheader">
    <div class="appicon" @click="$emit('showMenu', true)">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <div class="r-btn">
      <div><i class="el-icon-user"></i> <span>Hola, admin</span></div>
      <el-button type="primary" @click="$emit('cerrarsesion')" round
        >Cerrar Sesión</el-button
      >
    </div>
  </el-header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.appheader {
  .appicon {
    display: none !important;
  }
}
//mobile css//
@media only screen and (max-width: 600px) {
  header {
    display: flex !important;
    align-items: center;
    .r-btn {
        width: 100%;
    }
  }
  .appheader {
    .appicon {
      display: inline-block !important;
      float: left;

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
    }
  }
}
</style>