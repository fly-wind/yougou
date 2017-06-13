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
      <div class="pro-item">
        <div class="pro-item-img"><img src="../assets/images/20150419215324206738.png" alt="" /></div>
        <div class="pro-item-detail">
          <h2 class="detail-title">欧莱雅(L'Oreal)复颜年轻立显修颜霜</h2>
          <div class="detail-price">
            <span class="detail-price-new">￥200</span>
            <span class="detail-price-old">￥300</span>
          </div>
          <div class="detail-sales">
            <span class="detail-sales-percent">已售31%</span>
            <span class="detail-sales-bar"></span>
          </div>
          <XButton class="buy" mini text="立即购买"></XButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Grid, GridItem, XButton} from 'vux'
  export default {
    components: {
      Grid,
      GridItem,
      XButton
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.products
  padding: 1rem
  .pro-item
    display: flex
    padding: 0.5rem
    border: 1px solid rgba(230, 230, 230, 0.5)
    box-shadow: 1px 1px #ddd
    .pro-item-img
      flex: 0 0 120px
      img
        width: 100%
    .pro-item-detail
      text-align: left;
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
