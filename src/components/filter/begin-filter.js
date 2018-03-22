import Vue from 'vue';

Vue.filter('firstFilter', function(input) {
    if (input !== undefined) {
        var strOutput = "",
            strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分';
        input += "00";
        var intPos = input.indexOf('.');
        if (intPos >= 0) {
            input = input.substring(0, intPos) + input.substr(intPos + 1, 2);
        }
        strUnit = strUnit.substr(strUnit.length - input.length);
        for (var i = 0; i < input.length; i++) {
            strOutput += '零壹贰叁肆伍陆柒捌玖'.substr(input.substr(i, 1), 1) + strUnit.substr(i, 1);
        }
        return strOutput.replace(/^零角零分$/, '').replace(/零角零分$/, '整').replace(/^零元零角/, '').replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/零+元/, '元').replace(/亿零{0,3}万/, '亿').replace(/^元/, "零元").replace(/零角/, '零').replace(/零元/, '').replace(/零分$/, "");
    }
    return input;
});


Vue.filter('numberChineseFtr', function(input, flag) {
    if (input != undefined && input <= 999999999999) {
        input += "";
        var singleChinese = "零壹贰叁肆伍陆柒捌玖";
        var singleNum = "仟佰拾亿仟佰拾万仟佰拾点";
        if (flag) {
            singleChinese = "零一二三四五六七八九";
            singleNum = "千百十亿千百十万千百十点";
        }
        var intPos = input.indexOf('.');
        var leftNum = "";
        var rightNum = "";
        if (intPos == -1) {
            leftNum = input;
        } else {
            leftNum = input.substring(0, intPos);
            rightNum = input.substring(intPos + 1);
        }
        var rightChinese = "";
        for (flag = 0; flag < rightNum.length; flag++) {
            rightChinese += singleChinese.substr(rightNum.substr(flag, 1), 1);
        }
        var leftChinese = "";
        singleNum = singleNum.substr(singleNum.length - leftNum.length);
        for (flag = 0; flag < leftNum.length; flag++) {
            leftChinese += singleChinese.substr(leftNum.substr(flag, 1), 1) + singleNum.substr(flag, 1);
        }
        var resultNum = leftChinese + rightChinese;
        if ("" == rightNum) {
            resultNum = resultNum.substr(0, resultNum.length - 1);
        }
        if (flag) {
            return resultNum.replace(/零[千百十]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/亿零{0,3}万/, '亿').replace(/^零$/, '零零').replace(/零$/, '').replace(/一十/, "十").replace(/([亿万千百十])零点/, "$1点");
        }
        return resultNum.replace(/零[仟佰拾]/g, '零').replace(/零{2,}/g, '零').replace(/零([亿|万])/g, '$1').replace(/亿零{0,3}万/, '亿').replace(/^零$/, '零零').replace(/零$/, '').replace(/壹拾/, "拾").replace(/([亿万仟佰拾])零点/, "$1点");

    } else {
        //如果为undefined或超过最大范围，直接返回
        return input;
    }
});
