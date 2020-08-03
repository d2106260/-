$(function() {
    // 登录表单的底部链接
    $("#loginForm a").on("click", function() {
        $("#loginForm").hide()
        $("#registerForm").show()
    })

    // 注册表单的底部链接
    $("#registerForm a").on("click", function() {
        $("#loginForm").show()
        $("#registerForm").hide()
    })


    // 控制登录表单的提交
    $("#loginForm").submit(function(e) {
        e.preventDefault()
        var formData = $(this).serialize()
        $.ajax({
            type: "post",
            url: "http://ajax.frontend.itheima.net/api/login",
            formData,
            success: function() {
                if (res.status === 0) {
                    localStorage.setItem("mytoken", res.token)
                    location.href = "./index.html"
                } else {
                    layer.msg(res.message)
                }
            }
        })
    })



    // 控制注册表单的提交
    $("#registerForm").submit(function(e) {
        e.preventDefault()
        var formData = $(this).serialize()
        $.ajax({
            type: "post",
            url: "http://ajax.frontend.itheima.net/api/reguser",
            formData,
            success: function() {
                if (res.status === 0) {
                    $('#registerForm a').click()
                    layer.msg(res.message)
                } else {
                    layer.msg(res.message)
                }
            }
        })
    })
})