// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const router = new VueRouter({
  routes: [
    {
      name: 'guanyu',
      path: '/about',
      component: About,
      meta: {title: '关于'}
    },
    {
      name: 'zhuye',
      path: '/home',
      component: Home,
      meta: {title: '主页'},
      children: [
        {
          name: 'xinwen',
          path: 'news',
          component: News,
          meta: {isAuth: true, title: '新闻'},
          beforeEnter: (to, from, next) => {
            if (to.meta.isAuth) {
              if (localStorage.getItem('school') === 'Hust') {
                next()
              } else {
                alert('学校不对，无权查看')
              }
            } else {
              next()
            }
          }
        },
        {
          name: 'xiaoxi',
          path: 'message',
          component: Message,
          meta: {isAuth: true, title: '消息'},
          children: [
            {
              name: 'xiangqing',
              path: 'detail',
              component: Detail,
              meta: {isAuth: true, title: '详情'},
              props($route) {
                return {id: $route.query.id, title: $route.query.title}
              }
            }
          ]
        },
      ]
    }
  ]
})

// 全局前置路由守卫--初始化及每次路由切换前被调用
// router.beforeEach((to, from, next) => {
  
//   if (to.meta.isAuth) {
//     if (localStorage.getItem('school') === 'Hust') {
//       next()
//     } else {
//       alert('学校不对，无权查看')
//     }
//   } else {
//     next()
//   }
  
// })

// 全局后置路由守卫--初始化及每次路由切换后被调用
router.afterEach((to) => {
  document.title = to.meta.title || 'Vue'
})

export default router