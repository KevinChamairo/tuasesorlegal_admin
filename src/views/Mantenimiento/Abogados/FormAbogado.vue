<template>
  <div class="grid-content bg-purple">

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
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">Crear</el-button>
            <el-button @click="resetForm('ruleForm')">Limpiar</el-button>
        </el-form-item>
        </el-form> 



        </div>
</template>

<script>
export default {
  data() {
    return {
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
    }
  },
methods: {
   submitForm(arreglo) {
          // console.log(arreglo+'fuera del if')
        this.$refs[arreglo].validate((valid) => {
          if (valid) {
            // alert('si da gaaaa!');
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
       async grabar() {
            const endpoint = "/abogado/";
            await this.$http.post(endpoint, this.ruleForm).then((response) => {
            this.$message.info("Se grabo con exito!!!", {
            duration: 5000
            });
            
            });
            await window.location.reload();

        },
},
}
</script>

<style>

</style>