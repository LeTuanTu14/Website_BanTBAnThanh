$(document).ready(function () {

    var name  = sessionStorage.getItem('name');
    $("#user").html(name);
    var user= $("#user").html();

    if(user==""){
        $("#dangxuat").html("Đăng nhập");
    }else{
        $("#dangxuat").html("Đăng xuất");
    }

    $("#dangBL").click(function (e) {
        e.preventDefault();
        var bl= $("#binhluan").val().trim();
        if(bl != "")
            $("#listBL").append("<span>"+name+": "+bl+"</span> <br>");
    });

    $("#themgiohang").click(function () {
        let i=0;
        for (i; i < 20; i++) {
            if(sessionStorage.getItem('tensp'+i) != null){
                
            }else{
                sessionStorage.setItem('anh'+i, $("#avatar").attr("src"));
                sessionStorage.setItem('tensp'+i, $("#tensp").html());
                sessionStorage.setItem('gia'+i, $("#giasp").html());
                location.replace("../html/giohang.html");
                return;
            }
        }
        
        
    });

    const img = document.getElementById("carousel");
    const rightBtn = document.getElementById("right-btn");
    const leftBtn = document.getElementById("left-btn");

    // Images are from unsplash
    let pictures = [
        "../image/banner1.jpg",
        "../image/banner2.jpg",
        "../image/banner3.jpg",
        "../image/banner4.jpg",
    ];

    img.src = pictures[0];
    let position = 0;

    const moveRight = () => {
        if (position >= pictures.length - 1) {
            position = 0;
            img.src = pictures[position];
            return;
        }
        img.src = pictures[position + 1];
        position++;
    };

    const moveLeft = () => {
        if (position < 1) {
            position = pictures.length - 1;
            img.src = pictures[position];
            return;
        }
        img.src = pictures[position - 1];
        position--;
    };

    rightBtn.addEventListener("click", moveRight);
    leftBtn.addEventListener("click", moveLeft);
    var x = setInterval(function () {
        if (position >= pictures.length - 1) {
            position = 0;
            img.src = pictures[position];
            return;
        }
        img.src = pictures[position + 1];
        position++;
    }, 5000);

    // $("#dangxuat").click(function () {
    //     var result = confirm("Bạn có chắc chắn muốn đăng xuất ?");
    //     if (result == true) {
    //         localStorage.clear();
    //         location.replace("../html/dangnhap.html");
    //     } else {
    //     }
    // });

    
});