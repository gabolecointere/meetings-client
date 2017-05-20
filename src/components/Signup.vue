<template lang="html">
  <div class="col-md-6 center-block">
          <h3>Sign Up</h3><br>
            <form>
                <div class="form-group">
                    <label for="email">Your E-Mail</label>
                    <input class="form-control" type="text" name="email" id="email">
                </div>
                <div class="form-group">
                    <label for="first_name">Your First Name</label>
                    <input class="form-control" type="text" name="first_name" id="first_name">
                </div>
                <div class="form-group">
                    <label for="password">Your Password</label>
                    <input class="form-control" type="password" name="password" id="password">
                </div>
                <a class="btn btn-default" role="button">Submit</a>
            </form>
        </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.center-block{
  float:none;
}
</style>
