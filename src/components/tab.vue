<template>
  <div class="">
    <button-tab v-model="selectIndex" class="tab vux-1px-t">
      <button-tab-item class="tab-item" href="#/index">
          <i class="fa fa-home fa-fw tab-item-icon"></i>
          <span class="tab-item-text">首页</span>
      </button-tab-item>
      <button-tab-item class="tab-item" href="#/shoppcart">
          <i class="fa fa-shopping-cart fa-fw tab-item-icon"></i>
          <span class="tab-item-text">购物车</span>
      </button-tab-item>
      <button-tab-item class="tab-item" href="#/usercenter">
          <i class="fa fa-user-circle fa-fw tab-item-icon"></i>
          <span class="tab-item-text">我的</span>
      </button-tab-item>
    </button-tab>
  </div>
</template>

<script>
  import {ButtonTab, ButtonTabItem} from 'vux'
  export default {
    components: {
      ButtonTab,
      ButtonTabItem
    },
    data () {
      return {
        selectIndex: 0
      }
    },
    mounted: function () {
      this.$nextTick(function (index) {
        console.log('NavBar Init')
        // this.selectIndex = this.$router.currentRoute.path
        let path = this.$router.currentRoute.path
        switch (path) {
          case '/index':
            this.selectIndex = 0
            break
          case '/shoppcart':
            this.selectIndex = 1
            break
          case '/usercenter':
            this.selectIndex = 2
            break
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .vux-1px-t::before
    z-index: 1
  .tab
    position: fixed !important
    width: 100%
    max-width: 750px
    height: 40px
    bottom: 0
    left: 0
    right: 0
    margin: auto
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
      background: #fff !important
      color: red !important
</style>
