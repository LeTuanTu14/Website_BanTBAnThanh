
$(document).ready(function () {

    $("#login").click(function (e) {
        e.preventDefault();
        var phone = $("#txtSDT").val().trim();
        var password = $("#matKhau").val().trim();
        var sdt = sessionStorage.getItem('sdt');
        var mk = sessionStorage.getItem('mk');
        if (phone != "" && password != "") {
            if (phone == sdt && password == mk){
                $("#matKhauError").html("Đăng nhập thành công !");
                location.replace("../html/trangchu.html");
            } else {
                $("#matKhauError").html("Số điện thoại hoặc mật khẩu không chính xác !");
            }

        }else{
            $("#matKhauError").html("Vui lòng nhập điện thoại và mật khẩu !");
        }

    });

    $("#dangky").click(function (e) {
        e.preventDefault();
        location.replace("../html/dangky.html");
    });

});

