<template>
  <div class="app">
    <h3>我是App组件（祖）,{{name}}--{{price}}</h3>
    <Child />
  </div>
</template>

<script>
import {reactive, toRefs, provide} from 'vue'
import Child from './components/Child'

export default {
  name: 'App',
  components: {
    Child
  },
  setup() {
    let car = reactive({
      name: 'benchi',
      price: '40W'
    })
    provide('car', car)
    return {
      ...toRefs(car)
    }
  }
}
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>