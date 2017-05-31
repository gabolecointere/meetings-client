<template lang="html">
    <div class="col-md-6 center-block">
          <h3>New meeting</h3><br>
            <form>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input class="form-control" type="text" name="title" id="title">
                </div>
                <div class="form-group">
                      <date-picker v-model="myDate"></date-picker>
                  </div>
                <div class="form-group">
                    <label for="Description">Description</label>
                    <textarea class="form-control" type="text" name="description" id="description">
                    </textarea>
                </div>
                <a class="btn btn-default" v-on:click="newMeeting()" role="button">Submit</a>
            </form>
        </div>
</template>

<script>
import axios from 'axios'
import DatePicker from './DatePicker.vue'
export default {
  data() {
    return {
      title : '',
      myDate: '',
      description : ''
    }
  },computed: {
    computedDate: () => {

    }
  },
  methods: {
    newMeeting() {
      if(!sessionStorage.getItem('token')) {
        this.$swal('Not allowed', 'You have to sign in to post a new meeting', 'error')
      this.$router.push('/signin')
      }
console.log(this.myDate)
    //  axios.post('http://localhost:8080/api/v1/user', {

    //  })

    }
  },
  components: {
    'date-picker': DatePicker
  },
}
</script>

<style lang="css">
.datepickbox{
  margin-left: 12px;
}
.center-block {
  float: none;
}
</style>
