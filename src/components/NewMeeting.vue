<template lang="html">
    <div class="col-md-6 center-block">
          <h3>New meeting</h3><br>
            <form>
                <div class="form-group">
                    <label for="title">Title</label>
                    <input class="form-control" type="text" name="title" id="title">
                </div>
                <div class="form-group">
                      <date-picker></date-picker>
                  </div>
                <div class="form-group">
                    <label for="Description">Description</label>
                    <textarea class="form-control" type="text" name="description" id="description">
                    </textarea>
                </div>
                <a class="btn btn-default" role="button">Submit</a>
            </form>
        </div>
</template>

<script>
import DatePicker from './DatePicker.vue'
export default {
  data() {
    return {}
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
