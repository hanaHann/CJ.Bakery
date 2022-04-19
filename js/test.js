// 手機版footer 

window.addEventListener("load",function(){
    let screenWidth = screen.width;

    if (screenWidth < 768){
        console.log("小於768");
        console.log("螢幕寬度" , screenWidth)    

        var lastScrollTop = 0;
        console.log(lastScrollTop)
        window.addEventListener("scroll", function(){
            var st = window.pageYOffset; 

            if (st > lastScrollTop){
                console.log(st)
                footer.classList.add("footer-hidden");
            } else {
                footer.classList.remove("footer-hidden");
            }
            lastScrollTop = st <= 0 ? 0 : st; 

        }, false);

    }
})