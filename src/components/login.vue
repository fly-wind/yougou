<template>
  <div id="login">
    <group>
      <x-input type="text" required placeholder="请输入用户名">
        <i class="fa fa-user fa-fw"></i>
      </x-input>
      <x-input type="password" required placeholder="请输入密码"></x-input>
      <x-button id="btnLogin" type="primary">登录</x-button>
    </group>
  </div>
</template>

<script>
  import {XInput, XButton, Group} from 'vux'
  export default {
    components: {
      XInput,
      XButton,
      Group
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #btnLogin
    margin-top: 10px
</style>
