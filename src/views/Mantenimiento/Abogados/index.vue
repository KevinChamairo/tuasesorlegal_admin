<template>
  <el-container>
    
    <el-container>
    
        <div v-if="VRegistradas" class="grid-content bg-purple">
           
           
               <el-table
                :data="abogados"
                style="width: 100%">
                <el-table-column
                  width="120"
                  align="center"
                  prop="id_abogado"
                  label="id abogado">
                </el-table-column>
                <el-table-column
                  width="240"
                  align="center"
                  prop="persona.correo"
                  label="Correo">
                </el-table-column>
                <el-table-column
                  width="100"
                  align="center"
                  prop="persona.nombres"
                  label="Nombres">
                </el-table-column>
                <el-table-column
                  width="100"
                  prop="persona.paterno"
                  label="Apellidos">
                </el-table-column>
                <el-table-column
                  width="100"
                  prop="persona.materno"
                  label="">
                </el-table-column>
                <el-table-column
                  width="150"
                  align="center"
                  prop="fecha_creacion"
                  label="Fecha Creacion">
                </el-table-column>
               <el-table-column
                  width="130"
                  align="center"
                  prop="id_abogado"
                  label="Detalle">
                  <template slot-scope="scope">
                <el-button size="mini" type="info" @click="Detalles(scope.row.id_abogado)">Ver detalle</el-button>
                  </template>
                </el-table-column>
                <el-table-column
                  width="190"
                  align="center"
                  prop="id_003_estado"
                  label="Estado">
                  <template slot-scope="scope">
                    <el-alert v-if="scope.row.id_003_estado == 1"
                      title="Cuenta Activa"
                      type="success"
                      show-icon>
                    </el-alert>
                    <el-alert v-else
                      title="Cuenta Inactiva"
                      type="warning"
                      show-icon>
                    </el-alert>
                  </template>
                </el-table-column>
              </el-table>

        </div>



     
        <div v-if="VDetalles" class="grid-content bg-purple">
        <div>
          <a  @click="volver()">
            <icon class="el-icon-back"></icon>
          <font >Regresar</font>
          </a>
        </div>
        <!-- true -->

        <br><br><br>
        <el-form v-if="estado" :model="abogadoDetalle" ref="abogadoDetalle" label-width="180px" class="demo-ruleForm" size="mini">
        
        <el-form-item v-if="abogadoDetalle.id_003_estado == 1">
             <h1>Desactivar Cuenta</h1> 
            <el-button type="warning" plain @click="actualizar()">DESACTIVAR</el-button>           
        </el-form-item>
        <el-form-item v-else>
             <h1>Activar Cuenta</h1> 
            <el-button type="primary" plain @click="actualizar()">ACTIVAR</el-button>           
        </el-form-item>

        <div style="column-count: 2">  
            <div>

            <el-form-item label="Nombre" prop="nombres">
                <el-input v-model="abogadoDetalle.persona.nombres" style="width: 50%"></el-input>
            </el-form-item>
            <el-form-item label="Apellido Paterno" prop="paterno">
                <el-input v-model="abogadoDetalle.persona.paterno" style="width: 40%"></el-input>
            </el-form-item>
            <el-form-item label="Apellido Materno" prop="materno">
                <el-input v-model="abogadoDetalle.persona.materno" style="width: 40%"></el-input>
            </el-form-item>
            <el-form-item label="Correo" prop="correo">
                <el-input type="email" v-model="abogadoDetalle.persona.correo" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="Descripción" prop="descripción_abogado">
                <el-input type="textarea" v-model="abogadoDetalle.descripción_abogado" style="height: 80px"></el-input>
            </el-form-item>
            <el-form-item label="Eslogan" prop="eslogan">
                <el-input v-model="abogadoDetalle.eslogan" style="width: 70%"></el-input>
            </el-form-item>
            <el-form-item label="Nº colegiatura" prop="numero_colegiatura">
              <el-input  v-model.number="abogadoDetalle.numero_colegiatura" style="width: 30%"></el-input>
            </el-form-item>
            
            </div>   

            <div>


            <el-form-item label="Tipo de documento" prop="documento">
                <el-input disabled v-model="abogadoDetalle.persona.id_004_tipo_documento" style="width: 30%"></el-input>
            </el-form-item>
            <el-form-item label="Nº de documento" prop="numero">
                <el-input disabled prop="numero" v-model="abogadoDetalle.persona.numero_documento" style="width: 40%"></el-input>
            </el-form-item>
            <el-form-item label="Nº de Telefono" prop="telefono1">
                <el-input prop="telefono1" v-model="abogadoDetalle.usuario.telefono1" style="width: 30%"></el-input>
            </el-form-item>
            <el-form-item label="Nº telefono(opcional)" prop="telefono2">
                <el-input prop="telefono2" v-model="abogadoDetalle.usuario.telefono2" style="width: 30%"></el-input>
            </el-form-item>


            </div>
            
        </div>

        <br><br>
      
        </el-form>


        <!-- false -->

        
        <el-form v-if="!estado" :model="abogadoDetalle" ref="abogadoDetalle" label-width="180px" class="demo-ruleForm" size="mini">
        
        <el-form-item v-if="abogadoDetalle.id_003_estado == 1">
             <h1>Desactivar Cuenta</h1> 
            <el-button type="warning" plain @click="actualizar()">DESACTIVAR</el-button>           
        </el-form-item>
        <el-form-item v-else>
             <h1>Activar Cuenta</h1> 
            <el-button type="primary" plain @click="actualizar()">ACTIVAR</el-button>           
        </el-form-item>

        <div style="column-count: 2">  
            <div>

            <el-form-item label="Nombre" prop="nombres">
                <el-input disabled v-model="abogadoDetalle.persona.nombres" style="width: 50%"></el-input>
            </el-form-item>
            <el-form-item label="Apellido Paterno" prop="paterno">
                <el-input disabled v-model="abogadoDetalle.persona.paterno" style="width: 40%"></el-input>
            </el-form-item>
            <el-form-item label="Apellido Materno" prop="materno">
                <el-input disabled v-model="abogadoDetalle.persona.materno" style="width: 40%"></el-input>
            </el-form-item>
            <el-form-item label="Correo" prop="correo">
                <el-input disabled type="email" v-model="abogadoDetalle.persona.correo" style="width: 80%"></el-input>
            </el-form-item>
            <el-form-item label="Descripción" prop="descripción_abogado">
                <el-input disabled type="textarea" v-model="abogadoDetalle.descripción_abogado" style="height: 80px"></el-input>
            </el-form-item>
            <el-form-item label="Eslogan" prop="eslogan">
                <el-input disabled v-model="abogadoDetalle.eslogan" style="width: 70%"></el-input>
            </el-form-item>
            <el-form-item label="Nº colegiatura" prop="numero_colegiatura">
              <el-input disabled v-model.number="abogadoDetalle.numero_colegiatura" style="width: 30%"></el-input>
            </el-form-item>
            </div>   

            <div>


            
            <el-form-item label="Tipo de documento" prop="documento">
                <el-input disabled v-model="abogadoDetalle.persona.id_004_tipo_documento" style="width: 30%"></el-input>
            </el-form-item>
            <el-form-item label="Nº de documento" prop="numero">
                <el-input disabled prop="numero" v-model="abogadoDetalle.persona.numero_documento" style="width: 40%"></el-input>
            </el-form-item>
            <el-form-item label="Nº de Telefono" prop="telefono1">
                <el-input disabled prop="telefono1" v-model="abogadoDetalle.usuario.telefono1" style="width: 30%"></el-input>
            </el-form-item>
            <el-form-item label="Nº telefono(opcional)" prop="telefono2">
                <el-input disabled prop="telefono2" v-model="abogadoDetalle.usuario.telefono2" style="width: 30%"></el-input>
            </el-form-item>


            </div>
            
        </div>

        <br><br>
        <!-- <el-form-item>
                <el-button type="primary"  @click="editar()">Editar</el-button>
                <el-button disabled>Grabar</el-button>
        </el-form-item> -->
       

        </el-form>


        </div>



        <div v-if="VConfirmadas" class="grid-content bg-purple">


        <br><br>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="180px" class="demo-ruleForm" size="mini">
        <el-form-item label="Nombre" prop="usuario.persona.nombres">
            <el-input v-model="ruleForm.usuario.persona.nombres" style="width: 30%"></el-input>
        </el-form-item>
        <el-form-item label="Apellido Paterno" prop="usuario.persona.paterno">
            <el-input v-model="ruleForm.usuario.persona.paterno" style="width: 30%"></el-input>
        </el-form-item>
        <el-form-item label="Apellido Materno" prop="usuario.persona.materno">
            <el-input v-model="ruleForm.usuario.persona.materno" style="width: 30%"></el-input>
        </el-form-item>
        <el-form-item label="Correo" prop="usuario.persona.correo">
            <el-input type="email" v-model="ruleForm.usuario.persona.correo" style="width: 30%"></el-input>
        </el-form-item>
        <el-form-item label="Tipo de documento" prop="usuario.persona.id_004_tipo_documento" style="width: 40%">
            <el-select v-model="ruleForm.usuario.persona.id_004_tipo_documento" placeholder="Elija el tipo de documento">
            <el-option label="DNI" value="3"></el-option>
            <el-option label="RUC" value="4"></el-option>
            <el-option label="CARNET EXTRANJERIA" value="5"></el-option>
            <el-option label="PASAPORTE" value="6"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item v-if="ruleForm.usuario.persona.id_004_tipo_documento == null" label="Nº de documento" prop="usuario.persona.numero_documento">
            <el-input disabled v-model.number="ruleForm.usuario.persona.numero_documento" style="width: 30%"></el-input>
        </el-form-item>
        <el-form-item v-else label="Nº de documento" prop="usuario.persona.numero_documento">
            <el-input v-model.number="ruleForm.usuario.persona.numero_documento" style="width: 30%"></el-input>
        </el-form-item>
        <el-form-item label="Nº de Telefono" prop="usuario.telefono1">
            <el-input v-model.number="ruleForm.usuario.telefono1" style="width: 30%"></el-input>
        </el-form-item>
        <el-form-item label="Nº telefono(opcional)">
            <el-input v-model.number="ruleForm.usuario.telefono2" style="width: 30%"></el-input>
        </el-form-item>
        <el-form-item label="Nº colegiatura" prop="numero_colegiatura">
            <el-input v-model.number="ruleForm.numero_colegiatura" style="width: 30%"></el-input>
        </el-form-item>
        <el-form-item label="Descripción" prop="descripción_abogado">
            <el-input type="textarea" v-model="ruleForm.descripción_abogado" style="width: 50%"></el-input>
        </el-form-item>
        <el-form-item label="Eslogan" prop="eslogan">
            <el-input v-model="ruleForm.eslogan" style="width: 40%"></el-input>
        </el-form-item>
        <!-- <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Crear</el-button>
            <el-button @click="resetForm('ruleForm')">Limpiar</el-button>
        </el-form-item> -->
        </el-form>
        </div>
   

    </el-container>
     
  </el-container>
</template>
<script>
  export default {

     data() {
    return {
      abogados:null,
      estado: false,
      abogadoDetalle: {
          usuario:{
              telefono1: '',
              telefono2: ''
          },
          persona: {
              nombres: '',
              paterno: '',
              materno: '',
              correo: '',
              id_004_tipo_documento: '',
		          numero_documento: ''
          },
          numero_colegiatura: '',
          eslogan: '',
          descripción_abogado: ''
      },

      actualizarActivo: {
        numero_colegiatura: null,
        id_003_estado: null
      },
        VRegistradas: true,
        VConfirmadas:false,
        VCanceladas:false,
        VDetalles: false,

        ///////////////////////////////////


        ruleForm: {
          usuario: {
            persona: {
              nombres: '',
              paterno: '',
              materno: '',
              correo: '',
              id_004_tipo_documento: null,
              numero_documento: ''
            },
            id_008_tipo: 16,
	          id_usuario_creador: 6,
            telefono1: '',
            telefono2: ''
          },
          numero_colegiatura: '',
          id_003_estado: 1,
          descripción_abogado: '',
          eslogan: ''
        },
        rules: {
          usuario: {
            persona: {
              nombres: [
               { required: true, message: 'Falto ingresar el nombre', trigger: 'blur' },
              ],
              paterno: [
                { required: true, message: 'Falto ingresar el apellido Paterno', trigger: 'blur' },
              ],
              materno: [
                { required: true, message: 'Falto ingresar el apellido Materno', trigger: 'blur' },
              ],
              correo: [
                { required: true, message: 'Falto ingresar el correo', trigger: 'blur' },
              ],
              id_004_tipo_documento : [
                { required: true, message: 'Intregue el tipo de documento', trigger: 'change' }
              ],
              numero_documento: [
                { required: true, message: 'Ingrese el Nº del documento', trigger: 'blur' },
                { type: 'number', message: 'Ingrese numeros'},
              ]
              },
              telefono1: [
                { required: true, message: 'Ingrese el Nº de celular', trigger: 'blur' },
                { type: 'number', message: 'Ingrese numeros'},
              ],
          },
          numero_colegiatura: [
            { required: true, message: 'Ingrese el Nº del documento', trigger: 'blur' },
            { type: 'number', message: 'Ingrese numeros'},
          ],
          descripción_abogado: [
            { required: true, message: 'Ingrese una descripcion de usted', trigger: 'blur' }
          ],
          eslogan: [
            { required: true, message: 'Falto ingresar el eslogan', trigger: 'blur' },
            { min: 15, max: 40, message: 'debe tener minimo 15 caracteres', trigger: 'blur' }
          ],
        }



        ///////////////////////////////////
    }
    },
    created() {
    this.Registradas();
    },
    methods: {
        ///////////////////////////////////////////////
        volver(){
            this.VDetalles = false;
            this.VRegistradas = true;
        },

        ///////////////////////////////////////////////

        submitForm(arreglo) {
          console.log(arreglo+'fuera del if')
        this.$refs[arreglo].validate((valid) => {
          if (valid) {
            alert('si da gaaaa!');
            console.log(this.arreglo+'dentro del if')
            this.grabar();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(arreglo) {
        this.$refs[arreglo].resetFields();
      },



        /////////////////////////////////////////////////
    
        editar() {
            if(this.estado == true){
                this.estado = false
            }else{
                this.estado = true
            }
        },
        grabar() {
            const endpoint = "/abogado/";
            this.$http.post(endpoint, this.ruleForm).then((response) => {
            console.log(response)
            });
        },
        actualizar() {
            const endpoint = "/actualizarAbogado/";
            this.actualizarActivo.numero_colegiatura = this.abogadoDetalle.numero_colegiatura;
            if(this.abogadoDetalle.id_003_estado == 1){
              this.actualizarActivo.id_003_estado = 2
            }else{
              this.actualizarActivo.id_003_estado = 1
            }
            this.$http.post(endpoint, this.actualizarActivo).then((response) => {
            console.log(response)
            });
            this.Registradas();
        },

    Registradas(){  
       
        const endpoint = "listarAbogado/0/0/0";
        this.$http.get(endpoint).then(response => {
        this.abogados = response.data.body
        console.log(this.abogados);
        this.VRegistradas = true,
        this.VConfirmadas = false,
        this.VCanceladas = false,
        this.VDetalles = false
      });


    },
    Confirmadas(){
        this.VRegistradas = false,
        this.VConfirmadas = true,
        this.VCanceladas = false,
        this.VDetalles = false
    },
    Canceladas(){
        this.VRegistradas = false,
        this.VConfirmadas = false,
        this.VCanceladas = true,
        this.VDetalles = false

    },
    Detalles(valor){
        const endpoint = "listarAbogado/"+valor+"/0/0";
        this.$http.get(endpoint).then(response => {
        this.abogadoDetalle = response.data.body[0]
        console.log(this.abogadoDetalle);
      });
        this.VRegistradas = false,
        this.VConfirmadas = false,
        this.VCanceladas = false,
        this.VDetalles = true
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