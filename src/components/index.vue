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
    <scroller :on-infinite="infinite" ref="my_scroller" class="v-scroll">
      <div class="products">
        <div class="pro-item row" v-for="item in products" :key="item.goods_id">
          <div class="pro-item-img"><img src="/static/images/20150419215324206738.png" alt="" ></div>
          <div class="pro-item-detail">
            <h2 class="detail-title" v-text="item.goods_name" :title="item.goods_name"></h2>
            <div class="detail-price">
              <span class="detail-price-new" v-text="'￥'+item.goods_price"></span>
              <span class="detail-price-old" v-text="'￥'+item.goods_price"></span>
            </div>
            <div class="detail-sales">
              <bar :value='10' :max='20'></bar>
            </div>
            <XButton class="add" mini text="添加到购物车"></XButton>
          </div>
        </div>
      </div>
      <divider v-show="last">我是有底线的</divider>
     </scroller>
  </div>
</template>

<script>
  import {Grid, GridItem, XButton, Divider} from 'vux'
  import bar from '../components/bar'
  export default {
    data () {
      return { products: [], last: false }
    },
    mounted () {
      this.top = 0
      this.bottom = 10
      this.getList()
    },
    components: {
      Grid,
      GridItem,
      XButton,
      Divider,
      bar
    },
    methods: {
      getList () {
        let data = require('../../test.json')
        this.products = data.RECORDS
        console.log(this.products.length)
        this.max = this.products.length
        this.products = this.products.slice(0, this.bottom)
      },
      infinite (done) {
        if (this.bottom >= this.max) {
          console.log('结束')
          this.last = true
          setTimeout(() => {
            done(true)
          }, 1500)
          return
        }
        setTimeout(() => {
          this.bottom = this.bottom + 10
          this.getList()
          setTimeout(() => {
            done()
          })
        }, 1500)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.v-scroll
  top: 52px !important
  max-width 750px
  left auto !important
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
      flex: 0 0 100px
      padding-right: 10px
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
        margin-bottom: 0.5rem;
      .detail-title
        line-height: 1.5
        overflow : hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      .detail-price
        .detail-price-new
          color: #f00
        .detail-price-old
          text-decoration: line-through
      .add
        background: #f00
        color: #fff
</style>
