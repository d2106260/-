$(function() {
    // 基于Layui自定义表单验证规则
    var form = layui.form;
    form.verify({
        // uname 表示验证规则的名称
        // 第0项表示验证规则,第1项表示验证错误提示信息
        uname: [/^[\S]{6,8}$/, "用户名必须是6-8位字符"],
        // 自定义新的验证规则
        pwd: function(value, item) {
            // value 表示输入域的值 
            // item 表示对应输入框的DOM元素
            var reg = /^\d{6}$/;
            if (!reg.test(value)) {
                // 如果输入的值不是6位数字,就进行提示
                return "密码必须为6位以上的数字"
            }
        }
    })

    // 1. 监听表单提交的事件
    $("#loginForm").submit(function(e) {
        e.preventDefault()
        var formData = $(this).serialize()
        $.ajax({
            type: "post",
            url: "http://ajax.frontend.itheima.net/api/login",
            data: formData,
            success: function(res) {
                if (res.status === 0) {
                    location.href = "index.html"
                } else {
                    confirm(res.message)
                }
            }
        })
    })
    $("#registerForm").submit(function(e) {
        e.preventDefault()
        var formData = $(this).serialize()
        $.ajax({
            type: "post",
            url: "http://ajax.frontend.itheima.net/api/reguser",
            data: formData,
            success: function(res) {

            }
        })
    })


    $("#loginForm a").on("click", function() {
        $("#loginForm").hide();
        $("#registerForm").show();
    })
    $("#registerForm a").on("click", function() {
        $("#registerForm").hide();
        $("#loginForm").show();
    })
})