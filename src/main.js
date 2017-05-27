import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Meetings from './components/Meetings.vue'
import SingleMeeting from './components/SingleMeeting.vue'
import Signup from './components/Signup.vue'
import Signin from './components/Signin.vue'
import NewMeeting from './components/NewMeeting.vue'
import VueSweetAlert from 'vue-sweetalert'

Vue.use(VueSweetAlert)

Vue.use(VueRouter)

const routes = [
{path: '/', component: Meetings},
{path: '/meeting/:id', name: 'singleMeeting', component: SingleMeeting},
{path: '/signup', component: Signup},
{path: '/signin', component: Signin},
{path: '/newmeeting', component:NewMeeting}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export const bus = new Vue()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
