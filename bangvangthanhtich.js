window.onload = function(){
    fetch("bangvangthanhtich(gtquocgia).json").then(res => res.json()).then(data =>{
        let a = document.querySelector("table.gtquocgia");
        a.innerHTML = "";
        let z="";
        z+=
        `
            <tr>
                <th>Năm</th>
                <th>Sinh viên</th>
                <th>Thành tích</th>
                <th>Giảng viên hướng dẫn</th>
            </tr>
        `
        for(let b of data)
        {
            z+=
            `
                <tr>
                    <td>${b.nam}</td>
                    <td>${b.ten}</td>
                    <td>${b.thanhtich}</td>
                    <td>${b.giangvienhuongdan}</td>
                </tr>
            `
        }
        a.innerHTML+=z;
    });
    fetch("bangvangthanhtich(baoquocte).json").then(res => res.json()).then(data =>{
        let a = document.querySelector("table.baoquocte")
        a.innerHTML="";
        z="";
        z+=
        `
            <tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>MSSV</th>
                <th>Tên bài báo</th>
                <th>Tên Hội nghị và nơi tổ chức</th>
                <th>GV hướng dẫn</th>
            </tr>
        `
        let c = 1;
        for(let b of data)
        {
            z+=
            `
                <tr>
                    <td>${c}</td>
                    <td>${b.hovaten}</td>
                    <td>${b.mssv}</td>
                    <td>${b.tenbaibao}</td>
                    <td>${b.thnvntc}</td>
                    <td>${b.gvhd}</td>
                </tr>
            `
            c++;
        }
        a.innerHTML+=z;
    });
    fetch("bangvangthanhtich(tamguong).json").then(res => res.json()).then(data =>{
        let a = document.querySelector("table.TGCSVTD")
        a.innerHTML="";
        z="";
        z+=
        `
            <tr>
                <th>Lãnh vực công tác</th>
                <th>Thông tin cựu sinh viên khoa CNTT</th>
                <th>Hình ảnh cựu sinh viên</th>
            </tr>
        `
        for(let b of data)
        {
            z+=`<tr>`;
            if(b.soluong!==0)
            {
                z+=
                `
                    <th class ="dau" rowspan ="${b.soluong}">${b.lanhvuc}</th>
                `
            }
            z+=
            `
                <td>
                    <div>${b.ten}</div>
                    <ul>
                        <li>${b.tt1}</li>
                        <li>${b.tt2}</li>
            `
            if(b.checktt3===1)
            {
                z+=
                `
                    <li>${b.tt3}</li>
                `
            }
            z+=
            `
                    </ul>
                </td>
                <td>
                    <img src="${b.hinh}"/>
                </td>
            `
            z+=`</tr>`
        }
        a.innerHTML+=z;
    });
} 