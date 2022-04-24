// 入口燈箱-燈箱
window.addEventListener("load",function(){
    let lightboxBcg = document.getElementById("lightbox-bcg");
    let screenWidth = screen.width;
    let entranceLightbox = document.getElementById("lightbox");
    let closeBtn = document.getElementById("closebtn");


    if (screenWidth < 600 || window.innerWidth <600){
        console.log="hi";
    }

    closeBtn.addEventListener("mouseover",function(){
        this.style.backgroundColor="#BD8B65";
    });
    closeBtn.addEventListener("click",function(){
        
        entranceLightbox.style.display="none";
        lightboxBcg.style.display="none";
    });
   

});