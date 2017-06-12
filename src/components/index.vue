<template>
  <div id="index">
    <div class="menu">
      <ul>
        <li><span>美白</span></li>
        <li><span>补水</span></li>
        <li><span>控油</span></li>
        <li><span>祛痘</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {XInput, Group} from 'vux'
  export default {
    components: {
      XInput,
      Group
      // Cell
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .menu
    width: 80px
</style>
