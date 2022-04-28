

$(document).ready(function () {
    $("#saveProfile").click(function (e) {
        e.preventDefault();
        var name = $("#txtHoTen").val().trim();
        var sex = $('input[name="radioGT"]:checked').val();
        var ngay = $("#ngay").val();
        var thang = $("#thang").val();
        var nam = $("#nam").val();

        if (name != "" && ngay != "" && thang != "" && nam != "") {
            if ((2022 - parseInt(nam)) > 18) {
                $("#profileError").html("Hồ sơ lưu thành công !!");
                sessionStorage.setItem('name', name);
                location.replace("../html/dangnhap.html");
            } else {
                $("#profileError").html("Tuổi phải lớn hơn 18 !!");
            }


        }
        else {
            $("#profileError").html("Vui lòng nhập đầy đủ thông tin !!");
        }
    });
});

