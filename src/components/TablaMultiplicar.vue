<template>
  <div>
    <h1>Tabla de multiplicar</h1>
    <label>Introduce numero:</label>
    <input type="number" v-model="numero" />
    <button @click="generarTabla()">Generar Tabla</button>
    <hr />
    <h1>Multiplicacion 1º forma</h1>
    <div v-if="tabla.length > 0">
      <table>
        <thead>
          <tr>
            <th>Multiplicacion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(resultado, index) in tabla" :key="index">
            <td>{{ numero }} x {{ index + 1 }} = {{ resultado }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr/>
    <h1>Multiplicacion de la 2º forma</h1>

    <hr />
    <h1>Multiplicacion 3º forma</h1>
    <table v-if="numero !== null">
      <thead>
        <tr>
          <th>Multiplicacion</th>
        </tr>
      </thead>
      <tbody v-html="$filters.getTablaMultiplicar(numero)">

      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: "TablaMultiplicar",
        data() {
            return {
                numero: null,
                tabla: []
            };
        },
        methods: {
            generarTabla() {
                if (this.numero) {
                    this.tabla = [];
                    for (let i = 1; i <= 10; i++) {
                        this.tabla.push(this.numero * i);
                    }
                }
            },
        }
    }
</script>

<style>
</style>