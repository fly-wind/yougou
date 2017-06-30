<template>
  <div id="usercenter">
    <div class="user-top">
      <img src="static/images/20150508161047430286.jpg" alt="" class="user-top-img">
      <div class="user-info">
        <p class="user-name">ziyan</p>
        <p class="user-username">账号：xixixihahahahha</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    components: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.user-top
  background: #f00
  display: flex
  padding: 2rem
  .user-top-img
    width: 40px
    height: 40px
    border-radius: 50%
    margin-right: 1rem
  .user-info
    color: #fff
    text-align: left
    line-height: 20px
    .user-name
      font-size 1.2rem
</style>
