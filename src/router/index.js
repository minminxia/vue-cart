import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cart from '@/page/cart/CartMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
      // childrens:{
      //
      // }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
