<template>
  <div class="main-container">
    <h1>Vue Temperature convertor</h1>
    <div class="card degree">
      {{ celcius }}<span>&#176; C </span><br />
      {{ fahrenheit ? fahrenheit : "" }}<span>&#176; F </span> <br />
    </div>
    <div class="form">
      <span class="form-label">Enter the temperature in Celcius </span>
      <br />
      <br />
      <input
        type="text"
        v-model="celcius"
        class="input-class"
        placeholder="Temperature in Celcius"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "HealthPlugin",
  props: {
    msg: String,
  },
  data() {
    return {
      celcius: 0,
    };
  },
  computed: {
    fahrenheit() {
      const degree = (parseInt(this.celcius) * 9) / 5 + 32;
      return degree;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  justify-items: center;
}
.form {
  margin-top: 20px;
}
.form-label {
  color: #2c3e50;

  margin: 4px 0px;
}

.card {
  box-shadow: 0px 2px 7px;
  width: 200px;
  padding: 20px;
  border-radius: 86px;
}
.input-class {
  padding: 10px 4px;
  border-radius: 4px;
  color: #2c3e50;

  font-size: 32px;
}
.degree {
  font-weight: 600;
  font-size: 32px;
}
</style>
