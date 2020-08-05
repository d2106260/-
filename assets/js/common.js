// 这里进行通用的配置
$(function() {
    // 统一配置请求的接口地址
    var baseURL = "http://ajax.frontend.itheima.net";
    // 如下方法在实际请求发出之前调用
    $.ajaxPrefilter(function(option) {
        // 接口开始发送请求时,显示进度条
        option.beforeSend = function() {
            NProgress && NProgress.start();
        }

        // 统一处理请求头
        // option.headers.Authorization = sessionStorage.getItem("mytoken")
        if (option.url.indexOf("my/") !== -1) {
            option.headers = {
                Authorization: sessionStorage.getItem("mytoken")
            }
        }
        // option 表示请求配置选项, $.ajax方法的参数
        option.url = baseURL + option.url;

        // 统一处理token失效的问题
        // 该方法何时出发?请求结束后自动触发
        option.complete = function(res) {
            // 接口调用返回结果后,结束进度条
            NProgress && NProgress.done();

            var info = res.responseJSON;
            if (info.status === 1 && info.message === "身份认证失败！") {
                sessionStorage.removeItem("mytoken")
                location.href = "./login.html"
            }
        }
    })
})