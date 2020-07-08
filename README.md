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
       testPositiveInteger  

    * 检测是否是小数:
       testDecimals  

    * 检测是否是正小数:
       testPositiveDecimals  
    * 检测是否是数字
       testNum  
    * 检测是否是正数字
       testPositiveNum  
    * 检测是否是身份证号
       testIdCard  
    * 检测是否是身份证号(2019工信部)
       testPhone2019  
    * 检测是否是手机号
       testPhone  
    * 检测是否是车牌号
       testPlateNumber  
    * 检测是否是银行卡号(微信支付)
       testCankCard  
    * 检测是否是中文名字
       testName  
    * 检测是否是货币格式
       testCurrency  
