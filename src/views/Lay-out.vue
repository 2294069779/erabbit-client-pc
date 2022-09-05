<template>
<!-- 顶部 -->
<AppTopnav></AppTopnav>
 <!-- 头部 -->
<AppHeader></AppHeader>
<AppHeaderSticky></AppHeaderSticky>
<main class="app-body">
    <!-- // 二级路由 -->
    <router-view></router-view>
</main>

    <!-- 底部 -->
<app-footer></app-footer>

</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: 'XtxLayout',
  components: {
    AppTopnav,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang='less'>
.app-body{
  min-height: 600px;
}

</style>
