<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <button @click="test">测试触发Demo组件的hello事件</button>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'Demo',
  props: ['msg', 'school'],
  emits: ['hello'],
  setup(props, context) {
    console.log('---setup---', props, context);
    let person = reactive({
      name: '张三',
      age: 18,
    })
    function test() {
      context.emit('hello', 666)
    }

    // 返回一个对象（常用）
    return {
      person,
      test
    }
  }
}
</script>

<style>

</style>
