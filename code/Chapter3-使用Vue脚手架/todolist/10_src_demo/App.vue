<template>
  <div class="app">
    <h1>{{msg}},学生姓名是{{studentName}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(v-on) -->
    <!-- <Student v-on:athust="getStudentName" /> -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(ref) -->
    <Student ref="student" @demo="m1" />
  </div>
</template>

<script>
  import School from './components/School'
  import Student from './components/Student'
  
  export default {
    name: 'App',
    components: {
      School,
      Student
    },
    data() {
      return {
        msg: '你好啊!',
        studentName: ''
      }
    },
    methods: {
      getSchoolName(name) {
        console.log('app收到了学校名', name)
      },
      getStudentName(name) {
        console.log('App收到了学生名', name)
        this.studentName = name
      },
      m1() {
        console.log('demo事件触发')
      }
    },
    mounted() {
      this.$refs.student.$on('athust', this.getStudentName) // 绑定自定义事件
      // this.$refs.student.$once('athust', this.getStudentName) // 绑定自定义事件（一次性)
    },
  }
</script>

<style scoped>
  .app {
    background-color: gray;
    padding: 5px;
  }
</style>