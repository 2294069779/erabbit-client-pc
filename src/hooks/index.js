// 封装全局需要用的钩子，提供复用

import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

// hooks 封装逻辑，提供响应式数据。
/**
 *
 * 数据懒加载函数
 * @param{ element} target - dom对象
 * @param{ function } apifn- API函数
 */
export const useLazyData = (target, apiFn) => {
  const result = ref([])
  //    stop 停止观察
  const { stop } = useIntersectionObserver(
    // 监听目标,  // isIntersecting 是否进入可视区域，true是进入 false是移出
  // observerElement 被观察的dom
    target, ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        stop()
        apiFn().then((data) => {
          result.value = data.result
        })
      }
    },
    {
      // 控制容器和可视区相交比例，滚动到什么比例时触发
      threshold: 0
    }
  )
  return result
}
