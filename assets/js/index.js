$(function() {
    $.ajax({
        type: "get",
        url: "/my/userinfo",
        headers: {
            Authorization: sessionStorage.getItem("mytoken")
        },
        success: function(res) {
            if (res.status === 0) {
                var uname = res.data.username;
                var pic = res.data.user_pic;
                $(".username").html(uname);
                if (pic) {
                    $(".avatar").text("")
                    $(".avatar").html(`<img src="${pic}">`)
                }

            }
        }
    })
})