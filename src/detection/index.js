export default {
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
     * @desc 检测是否是数字
     * @param num 要检测内容
     * @param type 是否只检测数字（默认为true）,传false会对字符串进行转换后检测
     * @param reg 检测正则
     */
    testDecimals: function (num, type = true, reg = /^\d+|\d+\.\d{1,2}$/) {
        if (type)
            return reg.test(num)
        else
            return reg.test(Number(num))
    },
    /**
     * @desc 检测是否是身份证号
     * @param idCard 要检测内容
     * @param reg 检测正则
     */
    testIdCard: function (idCard, reg = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0[1-9]|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/) {
        return reg.test(idCard)
    },
}