import Detection from './detection'
import Other from './other'
const obj = { ...Detection, ...Other }
export * from { ...obj }
单个导出
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
    testCurrency,
    addWaterMark,
    dataURLToBlob,
    dataURLToFile
} = { ...Detection }
export const {
    debounce,
    throttle,
    easyClone,
    streamDown
} = { ...Other }
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