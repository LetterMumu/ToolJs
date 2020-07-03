/**
 * @debounce 函数防抖
 * @param func 函数
 * @param sleep 延迟执行毫秒数,默认1s
 * @param immediate true 立即执行，false 到达时间后执行 默认为false
 */
export default {
  debounce: function (func, sleep = 1000, immediate = false) {
    let timeout;
    return function () {
      const that = this;
      const args = arguments;

      if (timeout) clearTimeout(timeout);
      if (immediate) {
        var callNow = !timeout;
        timeout = setTimeout(() => {
          timeout = null;
        }, sleep)
        if (callNow) func.apply(that, args)
      } else {
        timeout = setTimeout(function () {
          func.apply(that, args)
        }, sleep);
      }
    }
  },

  a: function () {
    return (() => {
      console.log('1')
    })()
  }
}