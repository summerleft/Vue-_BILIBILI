<template>
  <input type="text" v-model="keyWord">
  <h3>{{keyWord}}</h3>
</template>

<script>
import {ref, customRef} from 'vue'
export default {
  name: 'App',
  setup() {
    // 自定义一个ref
    function myRef(value) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            track() // 通知Vue追踪value的变化（提前和getter商量，让它认为这个value游泳）
            return value
          },
          set(newValue) {
            clearTimeout(timer)
            setTimeout(() => {
              value = newValue
              trigger() 
            }, 500)
          }
        }
      })      
    }
    
    
    // let keyWord = ref('hello') // 使用Vue提供的ref
    let keyWord = myRef('hello') // 使用程序员自定义的ref
    return {
      keyWord
    }
  }
}
</script>

<style>

</style>
