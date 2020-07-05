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
export default detection 