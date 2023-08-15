window.onload = function(){
    fetch("congbogiangvien.json").then(res=>res.json()).then(data=>{
        z="";
        let nam;
        for(let b of data)
        {
            if(b.nam1)
            { 
                z+=
                `
                    <div class="tua">
                        <h1>NĂM ${b.nam1}</h1>
                    </div>
                `
                nam = b.nam1;
            }
            else
            {
                z+=
                `
                    <div class="tt">
                        <div>
                `
                if(b.doi!=="")
                {
                    z+=
                    `
                            <div><h2><a href="${b.doi}">${b.tua}</a></h2></div>
                    `
                }
                else
                {
                    z+=
                    `
                            <div><h2><a href="#">${b.tua}</a></h2></div>
                    `
                }
                z+=
                `
                            <div><b>Tạp chí: </b> ${b.tapchi}</div>
                            <div><b>Tác giả:</b> ${b.tacgia}</div>
                `
                if(b.doi!=="")
                {
                    z+=
                    `
                            <div><b>DOI:</b> <a href="${b.doi}">${b.doi}</a></div>
                        
                    `
                }
                else
                {
                    z+=
                    `
                            <div><b>ISBN:</b> <a href="#">${b.isbn}</a></div>
                    `
                }
                z+=
                `
                            <div><b>Năm: </b>${nam}</div>
                        </div>
                    </div>
                `
            }
        }
        let a=document.querySelector("main")
        a.innerHTML+=z;
    })
}