<template>
<div class="col-md-4">
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="">
        {{mt.title}}
      </div>
      <div class="">
        {{mt.description}}
      </div>
      <div class="">
        {{mt.time}}
      </div>
    </div>
    <div class="panel-footer">
    <router-link :to="{name: 'singleMeeting', params: { id: mt.id } }">  <a class="btn btn-default" role="button">See more</a></router-link>
      <a class="btn btn-default pull-right" role="button">Register</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['mt'],
  data() {
    return {

    }
  }
}
</script>

<style lang="css">
</style>
