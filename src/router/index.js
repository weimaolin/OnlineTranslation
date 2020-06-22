import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '../components/HelloWorld.vue'
const Translation = () => import('../components/Translation.vue')
const Output = () => import('../components/Output.vue')





Vue.use(VueRouter)

const routes = [
  {
  path: '/translation',
  name: 'Translation',
  component: Translation
},
{
  path: '/output',
  name: 'Output',
  component: Output
},

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router