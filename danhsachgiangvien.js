window.onload = function(){
    fetch("danhsachgiangvien.json").then(res=>res.json()).then(data=>{
        let a = document.querySelector("main>div");
        let c = "";
        for(b of data)
        {
            if(b.tieude)
            {
            c+=`<h1>${b.tieude}</h1>`
            }
            else
            {
            c+=`<div>`
            c+=`    <div class="hinh"><img src="${b.hinh}"/></div>`
            c+=`    <div class="tt">`
            c+=`        <h2>${b.ten}</h2>`
            if(b.chucdanh!=="")
            {
            c+=`        <div>Chức danh: ${b.chucdanh}</div>`
            }
            if(b.hocvi!=="")
            {
            c+=`        <div>Học vị: ${b.hocvi}</div>`
            }
            if(b.monhocgiangday!=="")
            {
            c+=`        <div>Môn học giảng dạy: ${b.monhocgiangday}</div>`
            }
            if(b.email!=="")
            {
            c+=`        <div>Địa chỉ Email: <a href="mailto:${b.email}">${b.email}</a></div>`
            }
            if(b.llkh!=="")
            {
            c+=`        <div><a href="${b.llkh}">lý lịch khoa học</a></div>`
            }
            c+=`    </div>`
            c+=`</div>`
            }
        }
        a.innerHTML+=c
    })
}