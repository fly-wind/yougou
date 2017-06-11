<template>
  <div id="app">
    <!--<div class="tab vux-1px-t">
        <a class="tab-item" href="/index">
          <i class="fa fa-home fa-fw tab-item-icon"></i>
          <span class="tab-item-text">首页</span>
        </a>
        <a class="tab-item" href="/shoppcart">
          <i class="fa fa-shopping-cart fa-fw tab-item-icon"></i>
          <span class="tab-item-text">购物车</span>
        </a>
        <a class="tab-item" href="/usercenter">
          <i class="fa fa-user-circle fa-fw tab-item-icon"></i>
          <span class="tab-item-text">我的</span>
        </a>
    </div>-->
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
import tab from './components/tab'
export default {
  name: 'app',
  components: {
    tab
  }
}
</script>

<style lang="less">
  @import '~vux/src/styles/1px.less';
</style>
<style lang="stylus" rel="stylesheet/stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
    font-size: 12px
</style>
