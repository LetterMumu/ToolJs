const other = {
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
          target[i] = other.easyClone(obj[i]);
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
  },
  /**
   * @desc 添加水印
   * @param strArr 水印内容
   * @param style 样式
   * @param width 水印宽
   * @param height 水印高
   * @param rotate 旋转角度
   * @param font 字体样式
   * @param fillStyle 填充样式
   * @param textAlign 文字水平位置
   * @param textBaseline 文字垂直位置
   */
  addWaterMark: function (strArr = '水印', style = {}, width = 400, height = 300, rotate = (-20 * Math.PI) / 180, font = '30px Microsoft YaHei', fillStyle = 'rgba(17, 17, 17, 0.25)', textAlign = 'left', fillText = [0, 10]) {
    let ctx = document.createElement('canvas')
    ctx.width = width
    ctx.height = height
    let obj = Object.keys(style)
    obj.forEach(element => {
      ctx.style[element] = style[element]
    });
    let cans = ctx.getContext('2d')
    cans.rotate(rotate)
    cans.font = font
    cans.fillStyle = fillStyle
    cans.textAlign = textAlign
    cans.textBaseline = 'Middle'
    cans.fillText(strArr, [...fillText])
    cans.save()
    return ctx.toDataURL()
  },
  /**
    * @desc 把 dataURL 转成 blob
    * @param dataurl dataURL
    **/
  dataURLToBlob(dataurl) {
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], { type: mime })
  },
  /**
    * @desc 把 dataURL 转成 file
    * @param dataurl dataURL
    * @param fileName 文件名
    **/
  dataURLToFile(dataurl, fileName) {
    let arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], fileName, { type: mime })
  }
}

export default other