<template>
  <div id="index">
    <grid>
      <grid-item :rows="3">最新上市</grid-item>
      <grid-item :rows="3">销量优先</grid-item>
      <grid-item :rows="3">筛选</grid-item>
    </grid>
    <!--<div class="menu">
      <ul>
        <li><span>美白</span></li>
        <li><span>补水</span></li>
        <li><span>控油</span></li>
        <li><span>祛痘</span></li>
      </ul>
    </div>-->
    <div class="products">
      <div class="pro-item" v-for="item in mz">
        <div class="pro-item-img"><img :src="item.src" alt="" /></div>
        <div class="pro-item-detail">
          <h2 class="detail-title" v-text="item.name"></h2>
          <div class="detail-price">
            <span class="detail-price-new" v-text="'￥'+item.price"></span>
            <span class="detail-price-old" v-text="'￥'+item.oldPrice"></span>
          </div>
          <div class="detail-sales">
            <bar :value='item.sellCount' :max='item.count'></bar>
          </div>
          <XButton class="buy" mini text="立即购买"></XButton>
        </div>
      </div>
      <divider>我是有底线的</divider>
    </div>
    
  </div>
</template>

<script>
  import {Grid, GridItem, XButton, Divider} from 'vux'
  import bar from '../components/bar'
  export default {
    components: {
      Grid,
      GridItem,
      XButton,
      Divider,
      bar
    },
    methods: {
      getList () {
        let data = require('../../data.json')
        this.products = data.products
        this.mz = this.products[0].pros
      }
    },
    created () {
      this.getList()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.products
  padding: 1rem
  margin-bottom: 40px
  .pro-item
    display: flex
    padding: 0.5rem
    border: 1px solid rgba(230, 230, 230, 0.5)
    box-shadow: 1px 1px #ddd
    margin-bottom: 1rem
    .pro-item-img
      flex: 0 0 120px
      display: -webkit-box
      -webkit-box-pack: center
      -webkit-box-align: center
      img
        width: 90%
        display: block
    .pro-item-detail
      text-align: left;
      width: 100%
      .detail-title,.detail-price,.detail-sales
        padding-bottom: 0.5rem;
      .detail-title
        // font-size: 1rem;
      .detail-price
        .detail-price-new
          color: #f00
        .detail-price-old
          text-decoration: line-through
      .buy
        background: #f00
        color: #fff
</style>
