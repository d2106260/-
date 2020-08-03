// 这里进行通用的配置
$(function() {
    // 统一配置请求的接口地址
    var baseURL = "http://ajax.frontend.itheima.net";
    // 如下方法在实际请求发出之前调用
    $.ajaxPrefilter(function(option) {
        // option 表示请求配置选项, $.ajax方法的参数
        option.url = baseURL + option.url;
    })
})