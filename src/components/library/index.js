//  扩展vue原有的功能,全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器。
// 这就是插件
// vue2.0插件写法要素,导出一个对象有install函数，默认传入了Vue构造函数，Vue基础之上扩展
// vue3.0插件写法要素,导出一个对象，有install函数，默认传入了app应用实例，app基础之上扩展
// 在app上进行扩展,app提供 component directive 函数
// 如果要挂载原型 app.config.globalProperties 方式

// import XtxSkeleton from './xtx-skeleton.vue'
// import XtxCarousel from './xtx-carousel.vue'
// import XtxMore from './xtx-more.vue'
import defaultImg from '@/assets/images/200.png'
// import XtxBread from './xtx-bread.vue'
// import XtxBreadItem from './xtx-bread-item.vue'
// 导入library文件夹下的所有组件
// 批量导入需要使用一个函数 require.context(dir,deep,matching)
// 参数：1. 目录  2. 是否加载子目录  3. 加载的正则匹配
const importFn = require.context('./', false, /\.vue$/) // 返回一个函数，里面包含文件
// console.log(importFn()) // 文件名称数组

export default {
  install (app) {
    defineDirective(app)
    // 批量注册全局组件
    importFn.keys().forEach(key => { // key()可以得到路径
      // 导入组件
      const component = importFn(key).default // 得到文件中的默认导出
      // 注册组件
      app.component(component.name, component)
    })
  }
}
// 设置图片懒加载
const defineDirective = (app) => {
  // 原理：先存储图片地址不能在src上，当图片进入可视区，将存储的图片给图片元素即可
  app.directive('lazy', {
    // vue2.0 监听指令的DOM员是否创建好，钩子函数:inserted
    // vue3.0 监听指令的DOM员是否创建好，钩子函数和组件的函数一样，mounted
    mounted (el, binding) {
      // isIntersecting 判断进入或离开
      const observer = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          // unobserve 停止观察
          observer.unobserve(el)
          // onerror 为图片失败触发函数
          el.onerror = () => {
            el.src = defaultImg
          }
          el.src = binding.value
        }
      }, {
        threshold: 0.01
      }
      )
      observer.observe(el)
      // observe 开始监听
    }
  })
}
