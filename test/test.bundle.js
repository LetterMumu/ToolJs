(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["toolJs"] = factory();
	else
		root["toolJs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_muTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _dist_muTools__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_muTools__WEBPACK_IMPORTED_MODULE_0__);
/**
 * 'bold'          : ['\x1B[1m',  '\x1B[22m'],  
 * 'italic'        : ['\x1B[3m',  '\x1B[23m'],  
 * 'underline'     : ['\x1B[4m',  '\x1B[24m'],  
 * 'inverse'       : ['\x1B[7m',  '\x1B[27m'],  
 * 'strikethrough' : ['\x1B[9m',  '\x1B[29m'],  
 * 'white'         : ['\x1B[37m', '\x1B[39m'],  
 * 'grey'          : ['\x1B[90m', '\x1B[39m'],  
 * 'black'         : ['\x1B[30m', '\x1B[39m'],  
 * 'blue'          : ['\x1B[34m', '\x1B[39m'],  
 * 'cyan'          : ['\x1B[36m', '\x1B[39m'],  
 * 'green'         : ['\x1B[32m', '\x1B[39m'],  
 * 'magenta'       : ['\x1B[35m', '\x1B[39m'],  
 * 'red'           : ['\x1B[31m', '\x1B[39m'],  
 * 'yellow'        : ['\x1B[33m', '\x1B[39m'],  
 * 'whiteBG'       : ['\x1B[47m', '\x1B[49m'],  
 * 'greyBG'        : ['\x1B[49;5;8m', '\x1B[49m'],  
 * 'blackBG'       : ['\x1B[40m', '\x1B[49m'],  
 * 'blueBG'        : ['\x1B[44m', '\x1B[49m'],  
 * 'cyanBG'        : ['\x1B[46m', '\x1B[49m'],  
 * 'greenBG'       : ['\x1B[42m', '\x1B[49m'],  
 * 'magentaBG'     : ['\x1B[45m', '\x1B[49m'],  
 * 'redBG'         : ['\x1B[41m', '\x1B[49m'],  
 * 'yellowBG'      : ['\x1B[43m', '\x1B[49m']  
 */




console.log('\x1B[33m%s\x1b[0m', '\n<--------------------------test-------------------------->\n')

console.log(Object(_dist_muTools__WEBPACK_IMPORTED_MODULE_0__["testNum"])(11))
console.log(_dist_muTools__WEBPACK_IMPORTED_MODULE_0___default.a.testNum(11))
console.log(_dist_muTools__WEBPACK_IMPORTED_MODULE_0__["Detection"].testNum(11))

console.log('\x1B[33m%s\x1b[0m', '\n<--------------------------test-------------------------->')

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testInteger", function() { return testInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testPositiveInteger", function() { return testPositiveInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testDecimals", function() { return testDecimals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testPositiveDecimals", function() { return testPositiveDecimals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testNum", function() { return testNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testPositiveNum", function() { return testPositiveNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testIdCard", function() { return testIdCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testPhone2019", function() { return testPhone2019; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testPhone", function() { return testPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testPlateNumber", function() { return testPlateNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testCankCard", function() { return testCankCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testName", function() { return testName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testCurrency", function() { return testCurrency; });
/* harmony import */ var _other_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Other", function() { return _other_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Detection", function() { return _detection__WEBPACK_IMPORTED_MODULE_1__["default"]; });



// 单个导出
const {
    testInteger,
    testPositiveInteger,
    testDecimals,
    testPositiveDecimals,
    testNum,
    testPositiveNum,
    testIdCard,
    testPhone2019,
    testPhone,
    testPlateNumber,
    testCankCard,
    testName,
    testCurrency
} = { ..._detection__WEBPACK_IMPORTED_MODULE_1__["default"] }
// 按工具类型导出

// 全部导出
/* harmony default export */ __webpack_exports__["default"] = ({
    ..._other_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
    ..._detection__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
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
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const detection = {
    /**
     * @desc 检测是否是整数
     * @param num 要检测内容
     * @param type 是否只检测数字（默认为true）,传false会对字符串进行转换后检测
     * @param reg 检测正则
     */
    testInteger: function (num, type = true, reg = /^[-+]?\d{1,}$/) {
        if (type)
            return reg.test(num)
        else
            return reg.test(Number(num))
    },
    /**
     * @desc 检测是否是正整数
     * @param num 要检测内容
     * @param type 是否只检测数字（默认为true）,传false会对字符串进行转换后检测
     * @param reg 检测正则
     */
    testPositiveInteger: function (num, type = true, reg = /^[+]?\d{1,}$/) {
        if (type)
            return reg.test(num)
        else
            return reg.test(Number(num))
    },
    /**
     * @desc 检测是否是小数
     * @param num 要检测内容
     * @param type 是否只检测数字（默认为true）,传false会对字符串进行转换后检测
     * @param reg 检测正则
     */
    testDecimals: function (num, type = true, reg = /^[-+]?\d+\.\d+$/) {
        if (type)
            return reg.test(num)
        else
            return reg.test(Number(num))
    },
    /**
     * @desc 检测是否是正小数
     * @param num 要检测内容
     * @param type 是否只检测数字（默认为true）,传false会对字符串进行转换后检测
     * @param reg 检测正则
     */
    testPositiveDecimals: function (num, type = true, reg = /^[+]?\d+\.\d+$/) {
        if (type)
            return reg.test(num)
        else
            return reg.test(Number(num))
    },
    /**
     * @desc 检测是否是数字
     * @param num 要检测内容
     * @param type 是否只检测数字（默认为true）,传false会对字符串进行转换后检测
     * @param reg 检测正则[0]:检验数字的正则 [1]:检验小数的正则
     */
    testNum: function (num, type = true, reg = [/^[-+]?\d{1,}$/, /^[-+]?\d+\.\d+$/]) {
        return detection.testInteger(num, type, reg[0]) || detection.testDecimals(num, type, reg[1])
    },
    /**
     * @desc 检测是否是正数字
     * @param num 要检测内容
     * @param type 是否只检测数字（默认为true）,传false会对字符串进行转换后检测
     * @param reg 检测正则[0]:检验数字的正则 [1]:检验小数的正则
     */
    testPositiveNum: function (num, type = true, reg = [/^[+]?\d{1,}$/, /^[+]?\d+\.\d+$/]) {
        return detection.testInteger(num, type, reg[0]) || detection.testDecimals(num, type, reg[1])
    },
    /**
     * @desc 检测是否是身份证号
     * @param idCard 要检测内容
     * @param reg 检测正则
     */
    testIdCard: function (idCard, reg = / (^\d{ 8 } (0\d | 10 | 11 | 12) ([0 - 2]\d | 30 | 31) \d{ 3 } $)| (^\d{ 6 } (18 | 19 | 20) \d{ 2 } (0[1 - 9] | 10 | 11 | 12)([0 - 2]\d | 30 | 31) \d{ 3 } (\d | X | x) $) /) {
        return reg.test(idCard)
    },
    /**
     * @desc 检测是否是身份证号(2019工信部)
     * @param phone 要检测内容
     * @param reg 检测正则
     */
    testPhone2019(phone, reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/) {
        return reg.test(phone)
    },
    /**
     * @desc 检测是否是身份证号
     * @param phone 要检测内容
     * @param reg 检测正则
     */
    testPhone(phone, reg = /^(?:(?:\+|00)86)?1\d{10}$/) {
        return reg.test(phone)
    },
    /**
     * @desc 检测是否是车牌号
     * @param plateNumber 要检测内容
     * @param reg 检测正则
     */
    testPlateNumber(plateNumber, reg = /^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))$|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/) {
        return reg.test(plateNumber)
    },
    /**
     * @desc 检测是否是银行卡号(微信支付)
     * @param bankCard 要检测内容
     * @param reg 检测正则
     */
    testCankCard(bankCard, reg = /^[1-9]\d{9,29}$/) {
        return reg.test(bankCard)
    },
    /**
     * @desc 检测是否是中文名字
     * @param name 要检测内容
     * @param reg 检测正则
     */
    testName(name, reg = /^(?:[\u4e00-\u9fa5·]{2,})$/) {
        return reg.test(name)
    },
    /**
     * @desc 检测是否是货币格式
     * @param currency 要检测内容
     * @param reg 检测正则
     */
    testCurrency(currency, reg = /^-?\d+(,\d{3})*(\.\d{1,2})?$/) {
        return reg.test(currency)
    }


}
/* harmony default export */ __webpack_exports__["default"] = (detection); 

/***/ })
/******/ ]);
});

/***/ })
/******/ ]);
});