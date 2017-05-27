<template>
<div id="app">
  <nav class="navbar navbar-default">
    <div class="container-fluid  container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/">
          <div class="navbar-brand" href="/"><img class="img-responsive" src="/src/assets/logo.png" alt="Vue.js"></div>
        </router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/newmeeting">Create a new meeting</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/signin">Sign in</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/signup">Sign up</router-link>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" v-if="isLoggedIn" aria-expanded="false">Account<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Log out</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</div>
</template>

<script>
import {
  bus
} from '../main'
export default {
  data() {
    return {
      isLoggedIn: false
    }
  },
   created() {
     if (sessionStorage.getItem('token'))
     this.isLoggedIn =  true
    bus.$on('logIn', () => {
      this.isLoggedIn = true
    })
  }
}
</script>

<style scoped>
img {
  max-width: 50px;
  max-height: 50px
}

.navbar-default {
  min-height: 80px;
}

.navbar-nav>li>a {
  padding-top: 0px;
  padding-bottom: 0px;
  line-height: 80px;
}

@media (max-width: 767px) {
  .navbar-nav>li>a {
    line-height: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
</style>
