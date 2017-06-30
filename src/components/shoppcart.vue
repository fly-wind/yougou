<template>
  <div id="shoppcart">
    <h1>我的购物车</h1>
    <div class="shopp-pros">
      <div class="pro-item" v-for="item in products" :key="item.goods_id">
        <div class="pro-shop-name vux-1px-b">
          <x-icon type="ios-circle-outline" size="20" class="icon-check"></x-icon>
          <span class="shop-name">{{item.shop_name}}</span>
        </div>
        <div class="pro-list">
          <div class="select-item"><x-icon type="ios-checkmark" size="20" class="icon-check"></x-icon></div>
          <div class="pro-item-img">
            <img src="/static/images/20150419215324206738.png" alt="" >
          </div>
          <div class="pro-item-detail">
            <h2 class="detail-title" v-text="item.goods_name"></h2>
            <div class="detail-style">
              规格：<span class="specifications">未知</span>
            </div>
            <div class="detail-num">
              <group>
                <x-number :title="'￥'+item.goods_price" :value="0" :min="0" @on-change="change"></x-number>
              </group>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Group, XNumber} from 'vux'
  export default {
    components: {
      Group,
      XNumber
    },
    data () {
      return {
        ischeck: false,
        demo01: 1
      }
    },
    methods: {
      getList () {
        let data = require('../../goods.json')
        this.products = data.RECORDS
      },
      change (val) {
        console.log('change', val)
      }
    },
    created () {
      this.getList()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shopp-pros
  padding: 1rem
  margin-bottom: 40px
  .vux-x-icon
    fill: #f00
  .pro-item
    padding: 0.5rem
    border: 1px solid rgba(230, 230, 230, 0.5)
    box-shadow: 1px 1px #ddd
    margin-bottom: 1rem
    .pro-shop-name
      text-align: left
      padding-bottom: 0.5rem
      margin-bottom: 1rem
      .shop-name
        vertical-align: super
    .pro-list
      display: flex;
      .select-item
        flex: 0 0 20px
        height: 100px
        display: -webkit-box
        -webkit-box-pack: center
        -webkit-box-align: center
    .pro-item-img
      flex: 0 0 90px
      display: -webkit-box
      -webkit-box-pack: center
      -webkit-box-align: center
      img
        width: 90%
        display: block
    .pro-item-detail
      text-align: left;
      width: 100%
      .detail-title
        padding-bottom: 0.5rem;
      .detail-style
        color: #ccc
      .detail-num
        .weui-cells
          margin-top: 0
          color: #f00
          .weui-cell
            padding: 10px 0
            .vux-number-selector svg
              fill: #f00
            .vux-number-selector.vux-number-disabled svg
              fill: #ccc !important
        & ::after,& ::before
          border: none
</style>
