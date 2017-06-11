<template>
  <div class="">
    <button-tab v-model="demo01" class="tab vux-1px-t">
      <button-tab-item class="tab-item" href="/index">
          <i class="fa fa-home fa-fw tab-item-icon"></i>
          <span class="tab-item-text">首页</span>
      </button-tab-item>
      <button-tab-item class="tab-item" href="/shoppcart">
          <i class="fa fa-shopping-cart fa-fw tab-item-icon"></i>
          <span class="tab-item-text">购物车</span>
      </button-tab-item>
      <button-tab-item class="tab-item" href="/usercenter">
          <i class="fa fa-user-circle fa-fw tab-item-icon"></i>
          <span class="tab-item-text">我的</span>
      </button-tab-item>
    </button-tab>
  </div>
</template>

<script>
  import {ButtonTab, ButtonTabItem, Divider} from 'vux'
  export default {
    components: {
      ButtonTab,
      ButtonTabItem,
      Divider
    },
    data () {
      return {
        demo01: 0
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    position: fixed !important
    width: 100%
    height: 40px
    bottom: 0
    left: 0
    .tab-item
      border-radius: 0 !important
      height: 40px
      line-height: 1
      text-decoration: none
      color: #ccc
    & ::after
       border: none !important
      .tab-item-icon
        padding-top: 5px
        font-size: 18px
      .tab-item-text
        display: block
    .vux-button-group-current
      background: none !important
      color: red !important
</style>
