$(document).ready(function () {
    $("#dangky").click(function (e) {
        e.preventDefault();
        var phone = $("#txtSDT").val().trim();
        var email = $("#email").val().trim();
        var password = $("#txtMatKhau").val().trim();
        var repassword = $("#txtNhapLaiMatKhau").val().trim();
        if (phone != "" && email != "" && password != "" && repassword != "" && password === repassword) {
            $("#nhapLaiMatKhauError").html("Đăng ký thành công !")
            sessionStorage.setItem('sdt', phone);
            sessionStorage.setItem('mk', password);
            location.replace("../html/thongtinuser.html");
        }
        else {
            $("#nhapLaiMatKhauError").html("Vui lòng nhập đầy đủ thông tin !!");
        }
    });

    $("#dangnhap").click(function (e) {
        e.preventDefault();
        location.replace("../html/dangnhap.html");
    });
});

