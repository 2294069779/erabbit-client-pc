<template>
<!-- vue2.0 需要根元素，vue3.0可以是代码片段 Fragment -->
  <div>app
    {{$store.state.user.profile.account}}
    <button @click="$store.commit('user/setuser',{account:'ls'})">设置用户信息</button>
  </div>
  <p>p</p>
</template>

<script>
export default {
  name: 'APP'

}
</script>

<style>

</style>
