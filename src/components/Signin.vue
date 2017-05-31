<template lang="html">
  <div class="col-md-6 center-block">
           <h3>Sign In</h3>
           <form>
               <div class="form-group">
                   <label for="email">Your E-Mail</label>
                   <input class="form-control" type="text" name="email" id="email" v-model="email">
               </div>
               <div class="form-group">
                   <label for="password">Your Password</label>
                   <input class="form-control" type="password" name="password" id="password" v-model="password">
               </div>
                 <a  class="btn btn-default" role="button" @click="signin">Submit</a>
                 <p class="pull-right">Don't have an account? <router-link to="/signup">Sign up then!</router-link></p>
           </form>
       </div>
</template>

<script>
import axios from 'axios'
import {
  bus
} from '../main'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signin() {
      axios.post('http://localhost:8080/api/v1/user/signin', {
          email: this.email,
          password: this.password
        }, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
        .then(
          (response) => {
            const token = response.data.token
            sessionStorage.setItem('token', token)
            console.log(sessionStorage.getItem('token'))
            this.$swal('Welcome back!', 'Successfully signed in', 'success')
            bus.$emit('logIn')
            this.$router.push('/')
          }
        )
        .catch(
          (error) => {
            this.$swal('Oops!', 'Something happened, please check your credentials', 'error')
          }
        );
    }
  }
}
</script>

<style scoped>
.center-block {
  float: none;
}
</style>
