import Other from './other/index.js'
import Detection from './detection'
// 单个导出
export const {
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
} = { ...Detection }
// 按工具类型导出
export {
    Detection,
    Other
}
// 全部导出
export default {
    ...Other,
    ...Detection
}