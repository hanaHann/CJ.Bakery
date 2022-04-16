// 導覽列
window.addEventListener("load",function(){
        
    var newin = document.getElementById("newIn");
    var hot = document.getElementById("hot");
    var dessert = document.getElementById("dessert");
    var story = document.getElementById("story-title");
    var selection = document.getElementById("selection");
    var notice = document.getElementById("notice");
    var activity = document.getElementById("activity");

    function navMouseoverNewin(){
        newin.innerText=("最新甜點");
    }
    function navMouseoutNewin(){
        newin.innerText=("NEW IN");
    }
    function navMouseoverHot(){
        hot.innerText=("熱門甜點");
    }
    function navMouseoutHot(){
        hot.innerText=("HOT");
    }
    function navMouseoverDessert(){
        dessert.innerText=("甜點一覽");
    }
    function navMouseoutDessert(){
        dessert.innerText=("DESSERT");
    }
    function navMouseoverStory(){
        story.innerText=("關於我們");
    }
    function navMouseoutStory(){
        story.innerText=("STORY");
    }
    function navMouseoverSelection(){
        selection.innerText=("食材嚴選");
    }
    function navMouseoutSelection(){
        selection.innerText=("SELECTION");
    }
    function navMouseoverNotice(){
        notice.innerText=("訂購事項");
    }
    function navMouseoutNotice(){
        notice.innerText=("NOTICE");
    }
    function navMouseoverActivity(){
        activity.innerText=("最新活動");
    }
    function navMouseoutActivity(){
        activity.innerText=("ACTIVITY");
    }

    newin.addEventListener("mouseover",navMouseoverNewin);
    newin.addEventListener("mouseout",navMouseoutNewin);
    hot.addEventListener("mouseover",navMouseoverHot);
    hot.addEventListener("mouseout",navMouseoutHot);
    dessert.addEventListener("mouseover",navMouseoverDessert);
    dessert.addEventListener("mouseout",navMouseoutDessert);
    story.addEventListener("mouseover",navMouseoverStory);
    story.addEventListener("mouseout",navMouseoutStory);
    selection.addEventListener("mouseover",navMouseoverSelection);
    selection.addEventListener("mouseout",navMouseoutSelection);
    notice.addEventListener("mouseover",navMouseoverNotice);
    notice.addEventListener("mouseout",navMouseoutNotice);
    activity.addEventListener("mouseover",navMouseoverActivity);
    activity.addEventListener("mouseout",navMouseoutActivity  );

    })


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
        lightboxImg.src="../pic/snow-ori.jpg";
        lightboxPrice.value="320";
        lightboxNum.value = 1;
    })
    flavorOpt[1].addEventListener("click",function(){
        lightboxImg.src="../pic/snow-ch.jpg";
        lightboxPrice.value="360";
        lightboxNum.value = 1;
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

// 我的收藏

window.addEventListener("load",function(){
    let heart = document.getElementsByClassName("heart");   //所有愛心
    console.log(heart)
    let removeHeart = document.getElementById("remove-heart");  //已移除收藏燈箱
    let addHeart = document.getElementById("add-heart");    //已加入收藏燈箱
    let lightboxBcg = document.getElementById("lightbox-bcg");  //背景遮罩

    for(let i=0 ; i<heart.length ; i++){
        heart[i].addEventListener("click",function(){
            console.log(heart[i])
            if(this.title=="加入收藏"){
                addHeart.style.visibility="visible"
                this.src="../texture/heart2.png";        //換圖片
                this.title="取消收藏";
                lightboxBcg.style.display="block";       //背景遮罩
                lightboxBcg.style.opacity=".3"           //背景遮罩
                setTimeout(function(){                      //時間到自動關閉
                    addHeart.style.visibility="hidden"
                    lightboxBcg.style.display="none";
                    
                },800)

            }
            else if (this.title="取消收藏"){
                removeHeart.style.visibility="visible"
                this.src="../texture/heart1.png";         //換圖片
                this.title="加入收藏";
                lightboxBcg.style.display="block";        //背景遮罩
                lightboxBcg.style.opacity=".3"            //背景遮罩
                setTimeout(function(){                      //時間到自動關閉
                    removeHeart.style.visibility="hidden"
                    lightboxBcg.style.display="none";
                },800)
                
            }
            
        })
    }
})


//按鈕切換商品頁面

var dessertBtns = document.getElementsByClassName("btn-2"); //元素們
var dessertContainers = document.getElementsByClassName("container");

for(let i=0; i<dessertBtns.length; i++){
    dessertContainers[i].style.display="none";
    dessertContainers[0].style.display="block";
    dessertBtns[i].addEventListener("click",function(){
        this.style.backgroundColor="white";
        dessertContainers[i].style.display="block";
            for(let j=0; j<dessertBtns.length; j++){
                if( i != j){
                    dessertBtns[j].style.backgroundColor="transparent";
                    dessertContainers[j].style.display="none";
                }

            }
    });
};

// 以下是輪播

var slidePic = document.getElementById("slidepic");
var img = slidePic.querySelector(`.img`);
var imgAll = slidePic.querySelectorAll(`.img`);

// setInterval(function(){
//     slidePic.appendChild(img);

// },500)

var num = 0;
var start = setInterval(function(){
    num++;
    for(let i=0 ; i<imgAll.length ;i++){
    imgAll[i].style.display="none"};
    
    if( num == imgAll.length ){
        num = 0;
    }
    imgAll[num].style.display="block";
},2000)

var slidePic = document.getElementById("slidepic");
var btnControlItems = document.querySelectorAll(".btn-control span");
console.log(btnControlItems[0])

for(let j=0 ; j<btnControlItems.length ; j++){
    //點擊一下時清除輪播
    btnControlItems[j].addEventListener("click",function(){clearInterval(start)});
    //點擊時換按鈕顏色
    btnControlItems[j].addEventListener("click",function(){
        this.style.backgroundColor="white";
    })
   
}





// 手機版footer

window.addEventListener("load",function(){
    let screenWidth = screen.width;

    if (screenWidth < 768){
        console.log("小魚")
        window.addEventListener("scroll",function(){
            console.log("scrollY",window.scrollY)

            document.addEventListener("wheel",function(e){
            wheelDelta =parseInt( e.deltaY )
            console.log("wheelDelta",wheelDelta)

            let footer = document.getElementById("footer")
            if(wheelDelta > 0){ 
                footer.classList.add("footer-hidden");
                }else{
                    footer.classList.remove("footer-hidden");
                }
            
            })
        })

        // document.addEventListener("wheel",function(e){
        //     console.log("hihihih")
        //     wheelDelta = e.deltaY
        //     console.log(wheelDelta)
        //     if(wheelDelta > 0){
        //         console.log(">0")
                
        //         let footer = document.getElementById("footer")
        //         footer.classList.add("footer-hidden");
        //         }else{
        //             footer.classList.remove("footer-hidden");
        //         }

        // } ); 
        
        
    
    
    }


})


