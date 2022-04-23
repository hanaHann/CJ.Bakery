// 我要購買-燈箱
// window.addEventListener("load",function(){
//     let cart = document.querySelectorAll(`.container .cart`);
//     let buyLightbox = document.getElementById("lightbox");
//     let closeBtn = document.getElementById("closebtn");
//     let cartAdd = document.getElementById("lightbox-joincart");
//     let flavorOpt = document.querySelectorAll(`.flavor-opt button`);
//     let lightboxImg = document.getElementById("lightbox-img");
//     let lightboxPrice = document.getElementById("lightbox-price");
//     let minus = document.getElementById("fa-minus");
//     let plus = document.getElementById("fa-plus");
//     let lightboxNum = document.getElementById("lightbox-num");
//     let lightboxBcg = document.getElementById("lightbox-bcg");

//     console.log("hihi");
//     for(let i=0 ; i <cart.length ; i++){
//         cart[i].addEventListener("click",function(){
//             buyLightbox.style.display="block";
//             lightboxBcg.style.display="block";
//         })
//         closeBtn.addEventListener("click",function(){
//             buyLightbox.style.display="none";
//             lightboxBcg.style.display="none";
//         })
//         cartAdd.addEventListener("click",function(){
//             buyLightbox.style.display="none";
//             lightboxBcg.style.display="none";
//         })    
//     }
//     flavorOpt[0].addEventListener("click",function(){
//         lightboxImg.src="./pic/snow-ori.jpg";
//         lightboxPrice.value="320";
//         lightboxNum.value = 1;
//         this.style.backgroundColor="#BD8B65";
//         flavorOpt[1].style.backgroundColor="#d2b48d";
//     })
//     flavorOpt[1].addEventListener("click",function(){
//         lightboxImg.src="./pic/snow-ch.jpg";
//         lightboxPrice.value="360";
//         lightboxNum.value = 1;
//         this.style.backgroundColor="#BD8B65";
//         flavorOpt[0].style.backgroundColor="#d2b48d";
//     })

//     minus.addEventListener("click",function(){
//         if(lightboxNum.value == 1){
//             lightboxNum.value ==1 
//         }else{
//             lightboxNum.value --;
//         }
//     })
//     plus.addEventListener("click",function(){
//         lightboxNum.value ++;
//     })

// })

///////////////////////////////////////////////////////////////////

console.log("hi");
// 我要購買-燈箱測試

window.addEventListener("load",function(){

    let buyLightbox = document.getElementById("lightbox");      //取得燈箱
    let closeBtn = document.getElementById("closebtn");         //取得關閉按鈕
    let cartAdd = document.getElementById("lightbox-joincart");  //取得燈箱內的“加入購物車按鈕”
    // let flavorOpt = document.querySelectorAll(`.flavor-opt button`);    //取得口味
    let minus = document.getElementById("fa-minus");            //取得減號
    let plus = document.getElementById("fa-plus");              //取得加號
    let lightboxNum = document.getElementById("lightbox-num");  //取得數量
    let lightboxBcg = document.getElementById("lightbox-bcg");  //取得燈箱背景

    lightboxNum.value = 1;

    //建立陣列，並把所有商品包成物件
    let dessert =[                              
        {name:`雪Q餅`,
        picURL:["../pic/LINE_ALBUM_220306_10.jpg","../pic/LINE_ALBUM_220306_11.jpg"],
        flavor:["經典蔓越梅","OREO可可"],
        price:["320","360"],
        inf:"酥香厚實不黏牙的口感，讓您一口接著一口都無法停下來。"
        },
        {name:`瑪德蓮`,
        picURL:["../pic/ma.jpg","../pic/LINE_ALBUM_220306_11.jpg"],
        flavor:["基本口味","茶系列","特殊口味"],
        price:["55","60","65"],
        inf:"法國傳統的貝殼形狀小蛋糕，奶油的香氣加上鬆軟的口感，簡單好吃非常受歡迎。"
        },
        {name:`小熊餅乾`,
        picURL:"../pic/LINE_ALBUM_220306_22.jpg",
        flavor:["原味燕麥"],
        price:"60",
        inf:"今年最夯的熊型餅乾，不僅適合當點心也適合當早餐。"
        }
    ]

    //定義按按鈕 秀燈箱的函式
    
    let ClickToShow =function(e){   
        return function(){       
        buyLightbox.style.display="block";
        lightboxBcg.style.display="block";
        document.getElementById("lightbox-title").innerText = e.name;
        document.getElementById("lightbox-inf").innerText = e.inf;
        document.getElementById("lightbox-price").value = e.price[0];
        document.getElementById("lightbox-img").src= e.picURL[0];
            
            //讓有幾個口味就跑出幾個按鈕

            for (let i=0 ; i<e.flavor.length ; i++){
                let flavorOpt =  document.getElementById("flavor-opt")
                
                // flavorOpt.removeChild();      
                console.log("有幾個口味",e.flavor.length);
                console.log("口味", flavorOpt);
                let button = document.createElement("button")   //創造按鈕
                button.textContent = e.flavor[i];    //把文字放入按鈕裡，有i個文字所以i個按鈕
                flavorOpt.appendChild(button); //加入按鈕
                

             
            }
            
        }
        
    }
    
    //定義關燈箱的函式
    let lightboxHide =function(){           
        buyLightbox.style.display="none";
        lightboxBcg.style.display="none";
    }


    let cart = document.querySelectorAll(`.container .cart`); //取得購物車icon

    //註冊每個按鈕
    for(i=0 ; i<cart.length ;i++){

        cart[i].addEventListener("click",ClickToShow(dessert[i]),false)   //按按鈕時呼叫函式，將desseet的所有陣列放入此函式
        closeBtn.addEventListener("click",lightboxHide)  //按xx時呼叫關閉燈箱
        cartAdd.addEventListener("click",lightboxHide)   //按加入購物車時關閉燈箱
   
    }

    // for(let i=0 ; i <cart.length ; i++){    //註冊每個按鈕
    //     cart[i].addEventListener("click",lightboxShow)  //按按鈕時呼叫函式
    //     closeBtn.addEventListener("click",lightboxHide)
    //     cartAdd.addEventListener("click",lightboxHide)
    // }

    // flavorOpt[0].addEventListener("click",function(){
    //     lightboxImg.src=dessert[0].picURL;
    //     lightboxPrice.value=dessert[0].price;
    //     cartTitle="dessert[0].inf";
        
    //     this.style.backgroundColor="#BD8B65";
    //     flavorOpt[1].style.backgroundColor="#d2b48d";
    // })
    // flavorOpt[1].addEventListener("click",function(){
    //     lightboxImg.src=dessert[1].picURL;
    //     lightboxPrice.value=dessert[1].price;
    //     cartTitle=dessert[1].inf;
        
    //     this.style.backgroundColor="#BD8B65";
    //     flavorOpt[0].style.backgroundColor="#d2b48d";
    // })

    // minus.addEventListener("click",function(){
    //     if(lightboxNum.value == 1){
    //         lightboxNum.value ==1 
    //     }else{
    //         lightboxNum.value --;
    //     }
    // })
    // plus.addEventListener("click",function(){
    //     lightboxNum.value ++;
    // })

})