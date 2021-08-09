<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h3>工作种类：{{person.job.type}}</h3>
  <h3>工作薪水：{{person.job.salary}}</h3>
  <h3>爱好:{{person.hobby}}</h3>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {ref,reactive} from 'vue'
export default {
  name: 'App',
  setup() {
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: 'frontend',
        salary: '30k'
      },
      hobby: ['抽烟','喝酒','烫头']
    })

    function changeInfo() {
      person.name = '李四'
      person.age = 48
      person.job.type = 'UI设计师'
      person.job.salary = '60k'
      person.hobby[0] = '学习'
    }

    // 返回一个对象（常用）
    return {
      person,
      changeInfo
    }

    // 返回一个函数（渲染函数）
    // return () => h('h1','hust')
  }
}
</script>

<style>

</style>
