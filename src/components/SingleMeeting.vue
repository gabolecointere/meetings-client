<template lang="html">
  <div class="col-md-6 center-block">
    <div class="panel panel-default">
      <div class="panel-body">
      <div class="">{{meeting.meeting.title}} </div>
      <div class=""> {{meeting.meeting.description}}</div>
      <div class="">{{meeting.meeting.time}} </div>
      </div>
      <div class="panel-footer">
        <div class="row ">
      Created by {{meeting.meeting.users[0].name}}
        <a class="btn btn-default pull-right" role="button">Register</a>
        <a class="btn btn-default pull-right" role="button">Edit</a>
        <a class="btn btn-default pull-right" role="button">Delete</a>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      meeting: []
    }
  },
  methods: {
    getMeeting() {
      axios.get('http://localhost:8080/api/v1/meeting/' + this.$route.params.id)
        .then(
          response => {
            this.meeting = response.data
            console.log(response)
          }
        ).catch(
          error => console.log(error)
        )
    }
  },
  mounted() {
    this.getMeeting()
  }
}
</script>

<style scooped>
.panel {
  margin-top: 2em;
}
.center-block{
  float:none;
}
</style>
