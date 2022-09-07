// 热门品牌
<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a @click="toggle(-1)" :class="{disabled:index===0}" href="javascript:;" class="iconfont icon-arrow-double-left prev"></a>
      <a @click="toggle(1)" :class="{disabled:index===1}"  href="javascript:;" class="iconfont icon-arrow-double-right next"></a>
    </template>
    <div class="box" ref="target">
         <Transition name="fade">
      <ul v-if="brands.length" class="list" :style="{transform:`translateX(${-index*1240}px)`}">
        <li v-for="item in brands " :key="item.id">
          <RouterLink to="/">
            <img v-lazy="item.picture" alt="">
          </RouterLink>
        </li>
      </ul>
      <div v-else class="skeleton">
         <XtxSkeleton class="item" v-for="i in 5" :key="i" animated bg="#e4e4e4" width="240px" height="305px"/>
       </div>
       </Transition >
    </div>
  </HomePanel>
</template>

<script>
import HomePanel from './components-panel/home-panel.vue'
import { findBrand } from '@/api/home'
import { ref } from 'vue'
import { useLazyData } from '@/hooks'
export default {
  name: 'HomeBrand',
  components: { HomePanel },
  setup () {
    // 获取数据
    // const brands = ref([])
    // findBrand(10).then(data => {
    //   brands.value = data.result
    // })
    // 切换
    // 切换效果，前提只有 0 1 两页
    const index = ref(0)
    const toggle = (step) => {
      const newindex = index.value + step
      if (newindex < 0 || newindex > 1) return
      index.value = newindex
    }
    // 图片懒加载
    const target = ref(null)
    const result = useLazyData(target, () => findBrand(10))
    return { brands: result, index, toggle, target }
  }
}
</script>

<style scoped lang='less'>
.home-panel {
  background:#f5f5f5
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
  .skeleton {
    width: 100%;
    display: flex;
    .item {
      margin-right: 10px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
</style>
