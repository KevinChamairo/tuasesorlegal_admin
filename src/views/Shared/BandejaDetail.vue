<template>
  <div class="grid-content bg-purple border-bottom" v-if="selectDetail">
    <div class="sub-head">
      <ul>
        <li>
          <i class="el-icon-document"></i>
          <span> Número: </span> {{ formato(selectDetail.id_asesoria,6) }}
        </li>
        <li>
          <i class="el-icon-user"></i>
          <span> Usuario: </span> {{ selectDetail.usuario.cuenta || "Usuario" }}
        </li>
      </ul>
      <ul>
        <li>
          <i class="el-icon-location-outline"></i>
          <span> Ubicación: </span>{{ selectDetail.ubigeo.nombre +", " +selectDetail.ubigeo1.nombre +", " +selectDetail.ubigeo2.nombre}}
        </li>
        <li>
          <i class="el-icon-date"></i><span> Fecha: </span>{{ selectDetail.fecha_solicitud }}
        </li>
      </ul>
      <!-- <el-avatar icon="el-icon-user-solid"></el-avatar>
      <div class="text item">
        <div class="div-flex">
          <h1>{{ selectDetail.usuario.cuenta || "Usuario" }}</h1>
          <p class="fecha-hora"> 
            <i class="el-icon-date"></i>
            <span> Fecha:</span>
            {{ selectDetail.fecha_solicitud }} {{ selectDetail.hora_solicitud }}
          </p>
          <p>
            <span> Número:</span>
            {{selectDetail.id_asesoria}}
          <p class="id-asesoria">
            <span> Caso N°:</span>
            {{formato(selectDetail.id_asesoria,6)}}
          </p>
        </div>
        <p class="div-span">
          <i class="el-icon-location-outline"></i><span> Ubicación:</span>
          {{
            selectDetail.ubigeo.nombre +
            ", " +
            selectDetail.ubigeo1.nombre +
            ", " +
            selectDetail.ubigeo2.nombre
          }}
        </p>
        <p class="description div-span">
          <span>Descripción:</span>
          {{ selectDetail.descripción_solicitante }}
        </p>
      </div> -->
    </div>
      <div class="description"><i class="el-icon-chat-dot-square"></i><span> Problema del usuario: </span><br> {{selectDetail.descripción_solicitante}}</div>
  </div>
</template>
<script>
export default {
  props: ['selectDetail'],

methods: {
   formato(number, width) {
      var numberOutput = Math.abs(number); /* Valor absoluto del número */
      var length = number.toString().length; /* Largo del número */ 
      var zero = "0"; /* String de cero */  
      
      if (width <= length) {
          if (number < 0) {
              return ("-" + numberOutput.toString()); 
          } else {
              return numberOutput.toString(); 
          }
      } else {
          if (number < 0) {
              return ("-" + (zero.repeat(width - length)) + numberOutput.toString()); 
          } else {
              return ((zero.repeat(width - length)) + numberOutput.toString()); 
          }
      }
    },
}
};
</script>

<style lang="scss" scoped>
.border-bottom {
  font-size: 14px;
  .sub-head {
    ul {
      width: 50%;
        li {
          line-height: 20px;
        span {
          font-weight: 600;
        }
      }
    }
}
}
.id-asesoria{
right: 40px;
font-size: 15px;
}

.fecha-hora{
position: absolute;
right: 20px;
top: 40px;
color: #9D9D9D;
}
.div-flex {
  display: flex;
  justify-content: space-between;
  span {
    font-weight: 600;
  }
}
.description {
  margin-top: 30px;
  margin-bottom: 30px;
  line-height: 20px;
  span {
    font-weight: 600;
  }
}

//mobile css//
@media only screen and (max-width: 600px) {
  .border-bottom .sub-head ul{
    width: 100%;
    li {
      line-height: normal;
      margin-bottom: 14px;
    }
  }
}
</style>