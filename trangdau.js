function down(a,b)
{
    $($(b).eq(a)).slideDown(100) 
}
window.onload = function(){
    $("button.prev").click(function(){
        let a = $(this).parent().siblings("div.img");
        let z = 0;
        for( let b of a)
        {
            if($(b).attr("style")!=="display: none;")
            {
                $(this).parent().siblings("div.img").slideUp(100)
                z--;
                if(z===-1)
                {
                    z=a.length - 1;
                } 
                setTimeout(down,100,z,a)
            }
            z++;
        }
    })
    $("button.next").click(function(){
        let a = $(this).parent().siblings("div.img");
        let z = 0;
        for( let b of a)
        {
            if($(b).attr("style")!=="display: none;")
            {
                $(this).parent().siblings("div.img").slideUp(100)
                z++;
                if(z===a.length)
                {
                    z=0;
                } 
                setTimeout(down,100,z,a)
            }
            z++;
        }
    })
}