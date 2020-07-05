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
