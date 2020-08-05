$(function() {
    // 获取用户信息,展示页面
    function loadUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            // 设置请求头放在common
            // headers: {
            //     Authorization: sessionStorage.getItem("mytoken")
            // },
            success: function(res) {
                if (res.status === 0) {
                    var uname = res.data.username
                    var pic = res.data.user_pic
                    $(".username").html(uname)
                    if (pic) {
                        $(".avatar").text("")
                        $(".avatar").html(`<img src="${pic}">`)
                    }

                }
            }
        })
    }
    loadUserInfo()

    // 退出登录
    $("#quit").on("click", function() {
        layer.confirm('确定退出?', { icon: 3, title: '提示' }, function(index) {
            layer.close(index)
            layer.msg('您已退出')
            sessionStorage.removeItem("mytoken")
            setTimeout(function() {
                location.href = "login.html"
            }, 1000)
        })
        $(this).parent().removeClass("layui-this")
    })


})