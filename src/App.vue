<template>
<div id="app">
    <app-header></app-header>
  <div class="container">
    <transition name="fade">
    <router-view></router-view>
    </transition>
  </div>
</div>
</template>

<script>
import header from './components/Header.vue'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    'app-header': header,
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .15s;
}

.fade-enter-active {
  transition-delay: .15s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
.btn {
  margin: 5px;
  background: #42b883;
  color: white;
  border: none;
}
.btn:hover {
  background: #42b883;
  color: white;
  border: none;
}
btn:active {
  background: #42b883;
  color: white;
  border: none;
}
</style>
