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
    })
    flavorOpt[1].addEventListener("click",function(){
        lightboxImg.src="./pic/snow-ch.jpg";
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

// 入口燈箱-燈箱
window.addEventListener("load",function(){
    let screenWidth = screen.width;
    if (screenWidth < 768){
        let buyLightbox = document.getElementById("lightbox");
        let closeBtn = document.getElementById("closebtn");
        let lightboxBcg = document.getElementById("lightbox-bcg");
        console.log(lightboxBcg);
        closeBtn.addEventListener("click",function(){
            buyLightbox.style.display="none";
            lightboxBcg.style.display="none";
        });
    }

});

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
                this.src="./texture/heart2.png";        //換有愛心的圖片
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
                this.src="./texture/heart1.png";         //換空心的圖片
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
window.addEventListener("load",function(){
    var dessertBtns = document.getElementsByClassName("btn-item"); //元素們
    var dessertContainers = document.getElementsByClassName("container");
    
    for(let i=0; i<dessertBtns.length; i++){
        dessertContainers[i].style.display="none";
        dessertContainers[0].style.display="block";
        dessertBtns[i].addEventListener("click",function(){
            this.style.backgroundColor="white";
            this.style.border="2px solid #BD8B65";
            dessertContainers[i].style.display="block";
                for(let j=0; j<dessertBtns.length; j++){
                    if( i != j){
                        dessertBtns[j].style.backgroundColor="transparent";
                        dessertBtns[j].style.border="1px solid #d2b48d";
                        dessertContainers[j].style.display="none";
                    }
    
                }
        });
    };
})

// 以下是輪播

window.addEventListener("load",function(){
    let slidePic = document.getElementById("slidepic");
    let imgAll = slidePic.querySelectorAll(`.img`);
    let introduce = document.querySelectorAll(".introduce .inf");
    let num = 0; //宣告當前次數是0
    imgAll[0].style.display="block"; //初始只有第一張圖
    introduce[0].style.display="block"; //初始只有第一份文字
    let start = setInterval(function(){
        num++;
        for(let i=0 ; i<imgAll.length ;i++){
        imgAll[i].style.display="none";
        introduce[i].style.display="none";
        btnControlItems[i].style.backgroundColor="#AF6E4D";
        }; //所有圖片文字都消失

        if( num == imgAll.length ){
            num = 0;
        }
        imgAll[num].style.display="block"; //時間到的圖片出現
        introduce[num].style.display="block"//時間到的文字出現
        btnControlItems[num].style.backgroundColor="white";
        imgAll[num].classList.add("opacity");
    },2000)

    let btnControlItems = document.querySelectorAll(".btn-control span");
    按鈕事件
    for(let a=0 ; a<btnControlItems.length ; a++){
        for(let j=0 ; j<btnControlItems.length ; j++){
            //點擊一下時清除輪播
            btnControlItems[j].addEventListener("click",function(){clearInterval(start)});
            btnControlItems[j].addEventListener("click",function(){
                imgAll[j].style.display="block";  //點到對應按鈕的圖片顯示
                introduce[j].style.display="block"; //點到對應按鈕的文字顯示
                if( a != j){
                    imgAll[a].style.display="none";  //其他圖片關起來
                    introduce[a].style.display="none"; //其他文字關起來

                }
                console.log(imgAll[a])
            });
            //點擊時換按鈕顏色
            btnControlItems[j].addEventListener("click",function(){
                this.style.backgroundColor="white";
                console.log("點擊按鈕")
                if( a != j){
                    btnControlItems[a].style.backgroundColor="#AF6E4D"; //按鈕以外變回原本顏色
                }
            })
        }


    }

  


})

// 滑鼠


// window.addEventListener("load",function(){
//     let newCursor = document.getElementById("cursor");
//     console.log(cursor);
//     let cursorBear = document.getElementById("cursor-bear");
//     let cursorBearImg = document.getElementById("cursor-bear-img");
//     let allLink = document.querySelectorAll("a")
//     console.log(allLink)

//     $("html").mousemove(function(e){
//         console.log(e.pageX+", "+e.pageY);
//         console.log("位置",cursor.style)
//         // newCursor.style.top=e.pageY + "px";
//         // newCursor.style.left=e.pageX + "px";
//         cursorBear.style.top=e.pageY + 10 + "px";
//         cursorBear.style.left=e.pageX + 10  + "px";
//     })
//     // allLink[i].addEventListener("mouseover",function(){
//     //     console.log("hover囉")
//     //     cursorBear.style.border="2px"
//     // });
 
// })