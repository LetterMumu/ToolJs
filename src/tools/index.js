export default {
  /**
   * @desc 防抖
   * @param func 函数
   * @param sleep 延迟执行毫秒数,默认1s
   * @param immediate true 立即执行，false 到达时间后执行 默认为false
   */
  debounce: function (func, sleep = 1000, immediate = false) {
    let timeout = null;
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

  /**
   * @desc 节流
   * @param func 函数
   * @param wait 延迟执行毫秒数
   * @param type 1 表时间戳版，2 表定时器版
   */
  throttle: function (func, wait, type) {
    if (type === 1) {
      let previous = 0;
    } else if (type === 2) {
      let timeout = null;
    }
    return function () {
      let context = this;
      let args = arguments;
      if (type === 1) {
        let now = Date.now();

        if (now - previous > wait) {
          func.apply(context, args);
          previous = now;
        }
      } else if (type === 2) {
        if (!timeout) {
          timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args)
          }, wait)
        }
      }
    }
  },
  /**
   * @desc 简易版深拷贝
   */
  easyClone: function (source) {
    var target = {};
    for (var i in source) {
      if (source.hasOwnProperty(i)) {
        if (typeof source[i] === 'object') {
          target[i] = easyClone(source[i]);
        } else {
          target[i] = source[i];
        }
      }
    }

    return target;
  }
}