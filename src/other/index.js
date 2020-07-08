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
  throttle: function (func, wait = 1000, type) {
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
   * @param source  对象
   */
  easyClone: function (obj) {
    var target = {};
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        if (typeof obj[i] === 'object') {
          target[i] = easyClone(obj[i]);
        } else {
          target[i] = obj[i];
        }
      }
    }

    return target;
  },
  /**
   * @desc 流转文件下载
   * 后端设置的文件名称在res.headers的 
   * "content-disposition": "form-data; name=\"attachment\"; filename=\"20181211191944.zip\""
   * @param blob 文件流
   * @param name 文件名
   */
  streamDown: function (blob, name) {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = (e) => {
      const a = document.createElement('a');
      a.download = name;
      a.href = e.target.result;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
  }
}