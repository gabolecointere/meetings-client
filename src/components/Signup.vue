<template lang="html">
  <div class="col-md-6 center-block">
          <h3>Sign Up</h3><br>
            <form>
                <div class="form-group">
                    <label for="username">Your User Name</label>
                    <input class="form-control" type="text" name="username" id="username" v-model="name">
                </div>
                <div class="form-group">
                    <label for="email">Your E-Mail</label>
                    <input class="form-control" type="text" name="email" id="email" v-model="email">
                </div>
                <div class="form-group">
                    <label for="password">Your Password</label>
                    <input class="form-control" type="password" name="password" id="password" v-model="password">
                </div>
                <a class="btn btn-default" role="button" @click="signup">Submit</a>
            </form>
        </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup() {
      axios.post('http://localhost:8080/api/v1/user', {
          name: this.name,
          email: this.email,
          password: this.password
        }, {
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        })
        .then(
          (response) => {
            console.log(response)
              this.$swal('Welcome!', 'Successfully signed up! Please, sign in', 'success')
            this.$router.push('/signin')
          }
        )
        .catch( (error) =>  {
          console.log(error)
          this.$swal('Oops!', 'Something happened, please check your data', 'error')
        }
        )
    }
  }
}

</script>

<style scoped>
.center-block {
  float: none;
}
</style>
