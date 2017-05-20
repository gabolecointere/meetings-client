<template lang="html">
  <div class="meetings-view">
  <center>
  <h1>Latest meetings:</h1></center>
  <div class="row  content" v-for="meeting in meetings">
<app-eachmeeting :mt="meet"  v-for="meet in meeting" :key="meet.id"></app-eachmeeting>
  </div>
    </div>
</template>

<script>
import axios from 'axios'
import EachMeeting from './EachMeeting.vue'
export default {
  data(){
    return{
        meetings: []
    }
  },
  methods: {
getIndex(){
  axios.get('http://localhost:8080/api/v1/meeting')
      .then(
        response => {
          let notChunkedArray = response.data.meetings
          let temporalArray = []
          const chunk = 3
          let chunkedArray = []
          for (let i = 0; i<notChunkedArray.length; i+= chunk){
            temporalArray = notChunkedArray.slice(i,i+chunk)
            chunkedArray.push(temporalArray)
          }
         this.meetings = chunkedArray
        console.log(response)
        }
      ).catch(
        error => console.log(error)
      )
}
  },
  mounted(){
    this.getIndex()
  },
  components: {
    'app-eachmeeting': EachMeeting
  }
}
</script>

<style scoped>
.content {
  margin-top: 2em;
}
</style>
