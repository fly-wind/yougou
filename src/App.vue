<template>
  <div id="app">
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
    font-size: 12px
    max-width: 750px
    margin: 0 auto
</style>
