import ToolJs from './tools/index.js'
import Detection from './detection'
export const a = ToolJs.a
export const testInteger = Detection.testInteger
export default {
    ...ToolJs,
    ...Detection
}