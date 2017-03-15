import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
import flxible from  './tools/flexible'
//new flxible();

//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from './component/secondcomponent.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
//
//function* gen(x){
//  var y = yield x + 2;
//  return y;
//}
//
//var g = gen(1);
//g.next() // { value: 3, done: false }
//g.next(2) // { value: 2, done: true }