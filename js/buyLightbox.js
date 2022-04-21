// 我要購買-燈箱
window.addEventListener("load",function(){
    let cart = document.querySelectorAll(`.container .cart`);
    let buyLightbox = document.getElementById("lightbox");
    let closeBtn = document.getElementById("closebtn");
    let cartAdd = document.getElementById("lightbox-joincart");
    let flavorOpt = document.querySelectorAll(`.flavor-opt button`);
    let lightboxImg = document.getElementById("lightbox-img");
    let lightboxPrice = document.getElementById("lightbox-price");
    let minus = document.getElementById("fa-minus");
    let plus = document.getElementById("fa-plus");
    let lightboxNum = document.getElementById("lightbox-num");
    let lightboxBcg = document.getElementById("lightbox-bcg");


    for(let i=0 ; i <cart.length ; i++){
        cart[i].addEventListener("click",function(){
            buyLightbox.style.display="block";
            lightboxBcg.style.display="block";
        })
        closeBtn.addEventListener("click",function(){
            buyLightbox.style.display="none";
            lightboxBcg.style.display="none";
        })
        cartAdd.addEventListener("click",function(){
            buyLightbox.style.display="none";
            lightboxBcg.style.display="none";
        })    
    }
    flavorOpt[0].addEventListener("click",function(){
        lightboxImg.src="./pic/snow-ori.jpg";
        lightboxPrice.value="320";
        lightboxNum.value = 1;
        this.style.backgroundColor="#BD8B65";
        flavorOpt[1].style.backgroundColor="#d2b48d";
    })
    flavorOpt[1].addEventListener("click",function(){
        lightboxImg.src="./pic/snow-ch.jpg";
        lightboxPrice.value="360";
        lightboxNum.value = 1;
        this.style.backgroundColor="#BD8B65";
        flavorOpt[0].style.backgroundColor="#d2b48d";
    })

    minus.addEventListener("click",function(){
        if(lightboxNum.value == 1){
            lightboxNum.value ==1 
        }else{
            lightboxNum.value --;
        }
    })
    plus.addEventListener("click",function(){
        lightboxNum.value ++;
    })

})