$(document).ready(function () {
    var i = 1;
    var tongtien = 0;
    for (let index = 0; index < 20; index++) {
        if (sessionStorage.getItem('tensp' + index) != null) {
            row = "<tr>";
            row += "<td>" + (i++) + "</td>";
            row += "<td><image style='width='80px'; height='80px'' src='" + sessionStorage.getItem('anh' + index) + "'></image></td>";
            row += "<td>" + sessionStorage.getItem('tensp' + index) + "</td>";
            row += "<td>" + 1 + "</td>";
            row += "<td>" + sessionStorage.getItem('gia' + index) + " VND </td>";
            row += "<td>" + sessionStorage.getItem('gia' + index) + " VND </td>";
            row += "<td>" + "<input class='btn btn-danger' type='submit' id='" + index + "' style='background-color: red;border: red' value='Xóa' />" + "</td>";
            $("table tbody").append(row);
            var g = sessionStorage.getItem('gia' + index);
            var gia = parseFloat(g);
            var k = g.toString().length;
            if (k > 8 && k<11) {
                gia = gia * 1000;
            }
            tongtien += gia;
            // alert(parseInt(sessionStorage.getItem('gia')));
        }

    }
    if (tongtien != 0) {
        $("#tongtien").html(tongtien.toLocaleString() + ".000 VND");
    } else {
        $("#tongtien").html("0 VND");
    }


    $("#xoahetsp").click(function () {
        for (let index = 0; index < 20; index++) {
            sessionStorage.removeItem('anh' + index);
            sessionStorage.removeItem('tensp' + index);
            sessionStorage.removeItem('gia' + index);
        }
        $("table tbody").html(null);
        $("#tongtien").html("0 VND");
    });

    $("table tbody").on("click", "input[type=submit]", function (e) {
        e.preventDefault();
        let index = $(this).attr("id");
        sessionStorage.removeItem('anh' + index);
        sessionStorage.removeItem('tensp' + index);
        sessionStorage.removeItem('gia' + index);
        location.replace("../html/giohang.html");
    });
});