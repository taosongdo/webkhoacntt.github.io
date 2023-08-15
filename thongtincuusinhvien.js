window.onload=function(){
    fetch("thongtincuusinhvien.json").then(res => res.json()).then(data=>{
        let a = document.querySelector("div.than");
        let z ="";
        for(let b of data)
        {
            z+=
            `
                <div>
                    <div class="hinh"><img src="${b.hinh}"/></div>
                    <div class="tt">${b.tt}</div>
                </div>
            `
        }
        a.innerHTML+=z;
    });
}