<template>
  <div id="app">
    <el-container v-if="logueado">
      <app-menu :active="active" @showMenu="showMenu"></app-menu>
      <el-container direction="vertical">
        <app-header @cerrarsesion="cerrarSesion" @showMenu="showMenu"></app-header>
        <el-main class="admin-layout">
          <router-view :idUser="idUser"></router-view>
        </el-main>
      </el-container>
    </el-container>
    <div v-else class="content-login">
      <div>
        <h2>TuAsesorLegal.pe</h2>
        <el-form :model="user" :rules="rules" ref="usuario" hide-required-asterisk label-position="top" label-width="120px">
          <el-form-item label="Correo" prop="cuenta">
            <el-input v-model.trim="user.cuenta" placeholder="e-mail"></el-input>
          </el-form-item>
          <el-form-item label="Contraseña" prop="clave">
            <el-input v-model.trim="user.clave" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="element-center event-button b-block">
            <el-button type="primary" round @click="validData('usuario')"
              >Ingresar</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
   </div>

</template>

<script>
import AppHeader from './views/Layout/AppHeader.vue'
import AppMenu from './views/Layout/AppMenu.vue'
export default {
  components : {
    AppHeader,
    AppMenu
  },
  data() {
    return {
      idUser: null,
      active: null,
      user : {
        cuenta : "av.wincler2599@gmail.com",
        clave: "123456"
      },
      rules: {
        cuenta: [
          { required: true, message: 'Ingrese cuenta', trigger: 'blur' },
          { type: 'email', message: 'Correo no válido', trigger: ['blur', 'change'] }
        ],
        clave: [
          { required: true, message: 'Ingrese contraseña', trigger: 'blur' }
        ]
      },
      logueado: false,
      nombre: null
    }
  },
  created() {
    if(localStorage.getItem('logueado')) {
      this.logueado = true
    }
  },
  methods : {
    showMenu(val) {
      this.active = val
    },
    cerrarSesion(){
      localStorage.clear()
      this.$router.push('/')
      this.logueado = false
    },
      validData(usuario) {
      this.$refs[usuario].validate((valid) => {
        if (valid) {
            this.sendLogin()
          } else {
            console.log('error submit!!');
            return false;
          }
      })
    },

    sendLogin() {
      const endpoint = "/usuario/getLoginUsuario/" 
      this.$http.post(endpoint, this.user).then((response) => {
        if(response.data.success) {
          this.idUser = {
            usuario: response.data.resultado[0].cuenta,
            id_usuario: response.data.resultado[0].id_usuario
          }
          localStorage.setItem('logueado', JSON.stringify(this.idUser))
          this.logueado = true
          this.user.cuenta = null
          this.user.clave = null
        } else {
          this.$message.error('Usuario o clave incorrecto')
          this.logueado = false
        }
      });
    },

    isMobile() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check
    }
  },
  watch: {
    '$route' (to, from) {
      if(this.isMobile()) {
        this.showMenu(false)
      }
    }
  }
}
</script>

<style lang="scss">
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.el-loading-spinner {
  margin-top: -37px !important
}
.el-loading-spinner i {
  font-size: 70px;
  color: #ddf3ff !important;
}
.el-loading-text {
  color: #0c1937 !important;
  font-size: inherit !important;
}
.border-bottom {
  border-bottom: 1px solid #e2e2e2;
}
.content-login {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  h2 {
    padding: 25px;
    color:#7561E5 !important;
    font-weight: 500;
    font-size: 20px;
  }
  > div {
    width: 300px;
  }
}
// .el-form--label-top .el-form-item__label {
//   float:left !important;
// }
* {
box-sizing: border-box;
}

*:focus {
	outline: none;
}
body {
background-color: #f8f8f8;
padding: 50px;
}
.login {
   justify-content: center;

margin: 20px auto;
width: 300px;
}

.login-form {
text-align: center;
}
.control-group {
margin-bottom: 10px;
}
.top-solid {
  margin-top: 60px;
  padding-top: 30px;
  border-top: solid 1px #d3dce6;
}


.login-header {
  color:#000000;
  text-align:center;
  font-size:300%;
}




input {
text-align: center;
background-color: #ECF0F1;
border: 2px solid transparent;
border-radius: 3px;
font-size: 16px;
font-weight: 200;
padding: 10px 0;
width: 250px;
transition: border .5s;
}

input:focus {
border: 1px solid #2ADBB8;
box-shadow: none;
}

.btn {
  border: 2px solid transparent;
  background: #2ADBB8;
  color: #ffffff;
  font-size: 16px;
  line-height: 25px;
  padding: 10px 0;
  text-decoration: none;
  text-shadow: none;
  border-radius: 3px;
  box-shadow: none;
  transition: 0.25s;
  display: block;
  width: 250px;
  margin: 0 auto;
}

.btn:hover {
  background-color: #1a8d76;
}

.login-link {
  font-size: 12px;
  color: #444;
  display: block;
	margin-top: 12px;
}


.contenedor_abogados{
position: relative;
width: 320px;
height: auto;
overflow: hidden;
}


.tituloA{
width: 303px;
height: 24px;
left: 570px;
top: 98px;

font-family: Raleway;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 132.2%;

color: #3A7BDD;

}
.menu2{
  float: right;
}
.botonE{
position: right;
width: 156px;
height: 50px;
left: 926px;
top: 1021px;
background: #715ED9;
border-radius: 20px;
}
.avatar{
   /* cambia estos dos valores para definir el tamaño de tu círculo */
    // height: 100px;
    // width: 100px;
    /* los siguientes valores son independientes del tamaño del círculo */
    background-repeat: no-repeat;
    background-position: 50%;
    border-radius: 50%;
    background-size: 100% auto;
}






.el-main.admin-layout {
  padding: 0px;
  background: #fff;
  > .el-row {
    height: 100%;
    .el-col.el-col-6, .el-col.el-col-24:first-child  {
      height: 100% !important;
      background: #d3dce6;
      overflow-y: auto;
      .box-card.active {
        border-color: #3a7bdd;
        h2 {
          font-weight: 600 !important;
        }
      }
      .el-card__body {
        padding: 0;
        display: flex;
        position: relative;
        flex-direction: column;
        a {
          padding: 20px;
          text-decoration: none;
        }
        .el-avatar {
          margin-right: 10px;
          max-width: 80px;
          float: left;
        }
        .text.item {
          font-size: 14px;
          max-width: 165px;
          float: left;
          span {
            color: #3a7bdd;
            overflow: hidden;
            text-overflow: ellipsis;
            display: block;
          }
          h2 {
            margin-bottom: 5px;
            color: #0c1937;
            overflow: hidden;
            font-size: 15px;
            text-overflow: ellipsis;
            font-weight: 500;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            // font-weight: 600;
          }
        }
      }
    }
  }
  .circle-state {
    background: #2adbb8;
    padding: 5px;
    position: absolute;
    left: 5px;
    top: 5px;
    border-radius: 50%;
  }
  .grid-content {
    padding: 20px;
    .sub-head {
      display: flex;
      .el-avatar {
        margin-right: 10px;
        flex: 1;
        // width: 200px;
      }
      .description {
        margin-top: 20px;
        line-height: 22px;
      }
      .text.item {
        font-size: 14px;
        flex: 20;
        h2 {
          margin-bottom: 5px;
          color: #717171;
          font-weight: 600;
        }
        h1 {
          font-size: 14px;
        }
      }
    }
    .form-update {
      // padding-top: 20px;
      padding-left: 20px;
      h3 {
        color: #3a7bdd;
        font-weight: 600;
        margin-bottom: 20px;
      }
      textarea {
        min-height: 80px !important;
      }
      .align-right {
        text-align: right;
      }
    }
  }
}
.logo-admin {
  line-height: 59.5px;
  background: #ddf3ff;
  position: relative;
  display: block;
  text-align: center;
  border-bottom: solid 1px #9adbff;
  text-decoration: none;
  color: #3a7bdd;
  font-weight: 600;
  font-size: 18px;
}
.box-card {
  margin: 15px;
}

.el-menu {
  background-color: transparent !important;
  .el-menu-item {
    color: #3a7bdd;
    font-weight: 600;
    i {
      color: #3a7bdd;
    }
  }
}
.el-header {
  background-color: #ddf3ff;
  color: #333;
  line-height: 60px;
  border-bottom: solid 1px #9adbff;
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

.el-aside {
  color: #333;
}
.el-tabs__header {
  z-index: 1;
}
@media only screen and (max-width: 600px) {
.grid-content {
  .sub-head {
    display: block !important
  }
}
.el-main.admin-layout {
  > .el-row {
    .el-col.el-col-6, .el-col.el-col-24:first-child  {
      background: #fff;
    }
  }
}
.grid-content .form-update {
  padding-left: 0px !important;
  padding-top: 0px !important;
}
}

</style>