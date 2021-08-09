<template>
  <Demo @hello="showHelloMsg" msg="hello" school='hust'>
    <template v-slot:"qwe">
      <span>hust</span>
    </template>
  </Demo>
</template>

<script>
import Demo from './components/Demo'
export default {
  name: 'App',
  components: {
    Demo
  },
  setup() {
    function showHelloMsg(value) {
      alert(`你触发了hello事件，我收到的参数是${value}`)
    }
    return {
      showHelloMsg
    }
  }
}
</script>

<style>

</style>
