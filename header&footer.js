$(document).ready(function()
{
    let b = document.querySelector("header")
    b.innerHTML=
    ` 
        <div class="logo"><img src="header&footer(Logo).jpg" alt="dh mo"/></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div class="iconmenu"><a href="javascript:void(0)"><i class="fas fa-bars"></i></i></a></div>
        <div></div>
        <div class="vedau"><input type="image" src="header&footer(nhaxe).jpg" height="90" width="90" onclick="vedau()"/></div>
    `
    let c = document.querySelector("nav.menu")
    c.innerHTML =
    `
        <ul>
            <li><a href="trangdau.html">Trang chủ</a></li>
            <li class="menu2" ><a href="javascript:void(0)">Giới thiệu &#8744</a>
                <ul>
                    <li><a href="gioithieukhoa.html">Giới thiệu khoa</a></li>
                    <li><a href="cocautochuc.html">Cơ cấu tổ chức</a></li>
                    <li><a href="danhsachgiangvien.html">Danh sách giảng viên</a></li>
                    <li><a href="thongtincuusinhvien.html">Thông tin cựu sinh viên</a></li>
                </ul></li>
            </li>
            <li class="menu2"><a href="javascript:void(0)">Đào tạo &#8744</a>
                <ul>
                    <li><a href="chuandaura.html">Chuẩn đầu ra</a></li>
                    <li><a href="#">Chương trình đạo tạo</a></li>
                    <li><a href="#">Đề cương môn học</a></li>
                </ul></li>
            </li>
            <li class="menu2"><a href="javascript:void(0)">Tin tức - Thông báo &#8744</a>
                <ul>
                    <li><a href="#">Thông báo đào tạo</a></li>
                    <li><a href="#">Thông tin sinh viên</a></li>
                    <li><a href="#">Tin tức - sự kiện</a></li>
                </ul>
            </li>
            <li class="menu2"><a href="javascript:void(0)">Hợp tác doanh nghiệp &#8744</a>
                <ul>
                    <li><a href="#">Hợp tác liên kết</a></li>
                    <li><a href="#">Nghiên cứu khoa học giảng viên</a></li>
                    <li><a href="#">Nghiên cứu khoa học sinh viên</a></li>
                </ul>
            </li>
            <li><a href="#">Hợp tác quốc tế</a></li>
            <li class="menu2"><a href="javascript:void(0)">Nghiên cứu khoa học &#8744</a>  
                <ul>
                    <li><a href="congbogiangvien.html">Công bố của giảng viên</a></li>
                    <li><a href="congbosinhvien.html">Công bố của người học</a></li>
                </ul>
            </li>
            <li><a href="bangvangthanhtich.html">Bảng vàng thành tích</a></li>
            <li><a href="#">Kết quả kiểm định</a></li>
            <li><a href="#">Tuyển sinh đại học 2023</a></li>
            <li><a href="#">Tuyển sinh cao học 2023</a></li>
            <li><a href="#">Quy định - Quy chế</a></li>
            <li><a href="lienhe.html">Liên hệ</a></li>
            <li><a href="bieumau.html">Biểu mẫu</a></li>
        </ul> 
    `
    let d= document.querySelector("footer")
    d.innerHTML=
    `
        <div class="info">
            <div>
                <div>Phòng 604 (Lầu 6), số 35 - 37 Hồ Hảo Hớn, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam</div>
                <div><b>Điện thoại:</b> (84-028) 3838.6603</div>
                <div><b>Email:</b> fcs@ou.edu.vn</div>
                <div><b>Trụ sở chính:</b> 97 Võ Văn Tần P6 Q3 Tp.HCM</div>
                <div><b>Website:</b> www.ou.edu.vn</div>
            </div>
            <div>
                <h2>CƠ SỞ TRỰC THUỘC</h2>
                <div><b>Cơ sở 1:</b> 371 Nguyễn Kiệm quận Gò Vấp, Tp.HCM</div>
                <div><b>Cơ sở 2:</b> 02 Mai Thị Lựu - P.Đakao - Quận 1</div>
                <div><b>Cơ sở 3:</b> 68 Lê Thị Trung - P.Phú Lợi - TX Thủ Dầu 1 - Bình Dương</div>
            </div> 
        </div>
    `
    $("li.menu2").click(function(){
        if($(this).attr("class")==="menu2 hien")
        {
            $($(this).children("ul")).removeClass("hien2")
            $(this).removeClass("hien")
        }
        else
        {
            $($("li.menu2").children("ul")).removeClass("hien2")
            $("li.menu2").removeClass("hien")
            $(this).addClass("hien")
            $($(this).children("ul")).addClass("hien2")
        }
    });           
})
$(document).ready(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() === 0)
        {
            $("div.vedau").css({
                "bottom":"-100px"
            });
        }
        else
        {
            $("div.vedau").css({
                "bottom":"-80px"
            });
        }
    })
    $("header > div.iconmenu > a").click(function(){
        $("nav.menu").toggleClass("menuhien")
    })
});
function vedau(){
    $("body,html").animate({
        scrollTop: 0
    });
}
