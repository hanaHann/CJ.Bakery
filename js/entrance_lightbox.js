// 入口燈箱-燈箱
window.addEventListener("load",function(){
    let lightboxBcg = document.getElementById("lightbox-bcg");

    if (window.innerWidth < 768){

        let buyLightbox = document.getElementById("lightbox");
        let closeBtn = document.getElementById("closebtn");
   
    
    }
    closeBtn.addEventListener("mouseover",function(){
        this.style.backgroundColor="#BD8B65";
    });
    closeBtn.addEventListener("click",function(){
        buyLightbox.style.display="none";
        lightboxBcg.style.display="none";
    });

});