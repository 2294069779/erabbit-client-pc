<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">

        <!-- 左侧分类 -->
        <HomeCategory />
        <!--轮播图-->
        <HomeBanner></HomeBanner>

      </div>
    </div>
    <!-- 新鲜好物 -->
    <HomeNew></HomeNew>
    <!-- 人气推荐 -->
    <HomeHot></HomeHot>
    <!-- 热门品牌 -->
    <HomeBrand />
    <!-- 商品区域 -->
   <HomeProduct />
       <!-- 最新专题 -->
    <HomeSpecial />

  </div>
</template>
<script>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand'
import HomeProduct from './components/home-product'
import HomeSpecial from './components/home-special'

export default {
  name: 'PageHome',
  components: { HomeCategory, HomeBanner, HomeNew, HomeHot, HomeBrand, HomeProduct, HomeSpecial }
}
</script>
<style scoped lang="less"></style>
