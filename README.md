# 工具函数库

## 目录结构：

       dist ------------------------- 打包文件
       src  ------------------------- 主要代码
              --date ---------------- 时间类工具
              --detection ----------- 验证类工具
              --tools --------------- 其他通用工具
              --index.js  ----------- 入口文件
       test ------------------------- 测试打包文件
       .babelrc --------------------- babel配置(不需要)
       index.html ------------------- 网页测试文件
       test.js ---------------------- node环境测试文件
       webpack.config.js ------------ 打包配置
       webpack.config.test.js ------- 测试配置

## 引入方式：

- 全部导入:

       import ToolJs from './dist/main.bundle'
       ToolJs.testNum(11)
       ToolJs.testName(11)

- 按工具类型导入:

       import { Detection, Other } from './dist/muTools'
       Detection.testNum(11)
       Other.debounce(fun)

- 单个方法导入:

       import { testNum, testName } from './dist/muTools'
       testNum(11)
       testName('Tools')

## 函数介绍
- detection类:  

    * 检测是否是整数:
       testInteger(num,type,reg)  
       * num:要检测内容  
       * type 是否只检测数字（默认为true）,传false会对字符串进行转换后检测  
       * reg 检测正则(默认为/^[-+]?\d{1,}$/)  
  
    * 检测是否是正整数:
       testPositiveInteger(num,type,reg)   
       * num:要检测内容  
       * type 是否只检测数字（默认为true）,传false会对字符串进行转换后检测  
       * reg 检测正则(默认为/^[+]?\d{1,}$/)

    * 检测是否是小数:
       testDecimals(num,type,reg)   
       * num:要检测内容  
       * type 是否只检测数字（默认为true）,传false会对字符串进行转换后检测  
       * reg 检测正则(默认为/^[-+]?\d+\.\d+$/)  

    * 检测是否是正小数:
       testPositiveDecimals(num,type,reg)   
       * num:要检测内容  
       * type 是否只检测数字（默认为true）,传false会对字符串进行转换后检测  
       * reg 检测正则(默认为/^[+]?\d+\.\d+$/) 

    * 检测是否是数字:
       testNum(num,type,reg)   
       * num:要检测内容  
       * type 是否只检测数字（默认为true）,传false会对字符串进行转换后检测  
       * reg 检测正则(默认为[/^[-+]?\d{1,}$/, /^[-+]?\d+\.\d+$/]) 

    * 检测是否是正数字:
       testPositiveNum(num,type,reg)   
       * num:要检测内容  
       * type 是否只检测数字（默认为true）,传false会对字符串进行转换后检测  
       * reg 检测正则(默认为[/^[+]?\d{1,}$/, /^[+]?\d+\.\d+$/]) 

    * 检测是否是身份证号:
       testIdCard(idCard,reg)  
       * idCard:要检测内容  
       * reg 检测正则(默认为/ (^\d{ 8 } (0\d | 10 | 11 | 12) ([0 - 2]\d | 30 | 31) \d{ 3 } $)| (^\d{ 6 } (18 | 19 | 20) \d{ 2 } (0[1 - 9] | 10 | 11 | 12)([0 - 2]\d | 30 | 31) \d{ 3 } (\d | X | x) $) /) 

    * 检测是否是手机号(2019工信部):
       testPhone2019(phone,reg)  
       * phone:要检测内容  
       * reg 检测正则(默认为/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/) 

    * 检测是否是手机号:
       testPhone(phone,reg)  
       * phone:要检测内容  
       * reg 检测正则(默认为/^(?:(?:\+|00)86)?1\d{10}$/) 

    * 检测是否是车牌号:
       testPlateNumber(plateNumber,reg)  
       * plateNumber:要检测内容  
       * reg 检测正则(默认为/^(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(?:(?:[0-9]{5}[DF])|(?:[DF](?:[A-HJ-NP-Z0-9])[0-9]{4})))$|(?:[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9 挂学警港澳]{1})$/)  

    * 检测是否是银行卡号(微信支付):
       testCankCard(bankCard,reg)  
       * bankCard:要检测内容  
       * reg: 检测正则(默认为/^[1-9]\d{9,29}$/) 
  
    * 检测是否是中文名字:
       testName(name,reg)  
       * name: 要检测内容  
       * reg: 检测正则(默认为/^(?:[\u4e00-\u9fa5·]{2,})$/)   

    * 检测是否是货币格式:
       testCurrency(currency,reg)  
       * currency: 要检测内容  
       * reg: 检测正则(默认为/^-?\d+(,\d{3})*(\.\d{1,2})?$/)    
 
- other类:  
    * 防抖:
       debounce(func,sleep,immediate)  
       * func: 需要包装的函数  
       * sleep: 毫秒数  
       * immediate: true 立即执行，false 到达时间后执行 默认为false  

    * 节流:
       throttle(func,sleep,type)  
       * func: 需要包装的函数  
       * sleep: 毫秒数  
       * type: 1 表时间戳版，2 表定时器版  

    * 简易版深拷贝:
       easyClone(obj)  
       * obj: 需要浅拷贝的对象  
    
    * 流转文件下载:
       streamDown(blob,name)  
       * blob: 文件流  
       * name: 文件名(后端设置的文件名称在res.headers的"content-disposition": "form-data; name=\"attachment\"; filename=\"***.zip\"")  
