// 我要購買

window.addEventListener("load",function(){

    let buyLightbox = document.getElementById("lightbox");      //取得燈箱
    let closeBtn = document.getElementById("closebtn");         //取得關閉按鈕
    let cartAdd = document.getElementById("lightbox-joincart");  //取得燈箱內的“加入購物車按鈕”
    let minus = document.getElementById("fa-minus");            //取得減號
    let plus = document.getElementById("fa-plus");              //取得加號
    let lightboxNum = document.getElementById("lightbox-num");  //取得數量
    let lightboxBcg = document.getElementById("lightbox-bcg");  //取得燈箱背景

    lightboxNum.value = 1;

    let item  = document.querySelectorAll(`.container .list .item`);  


    //建立陣列，並把所有商品包成物件
    let dessert =[                              
        {name:`雪Q餅`,
        picURL:["../pic/snowor.webp","../pic/snow.2.webp"],
        flavor:["經典蔓越梅","OREO可可"],
        price:["320","360"],
        inf:"酥香厚實不黏牙的口感，讓您一口接著一口都無法停下來。"
        },
        {name:`瑪德蓮`,
        picURL:["../pic/matea.webp","../pic/ma.jpg","../pic/matai.webp"],
        flavor:["經典系列","茶茶系列","限定泰奶"],
        price:["55","60","65"],
        inf:"法國傳統的貝殼形狀小蛋糕，奶油的香氣加上鬆軟的口感，簡單好吃非常受歡迎。"
        },
        {name:`小熊餅乾`,
        picURL:["../pic/manyBear.webp"],
        flavor:["原味燕麥"],
        price:["60"],
        inf:"今年最夯的熊型餅乾，不僅適合當點心也適合當早餐。"
        },
        {name:`軟餅乾`,
        picURL:["../pic/softBrown.webp","../pic/softGreen.webp"],
        flavor:["經典原味","抹茶"],
        price:["320","320"],
        inf:"不只有lotus的搭配，也有oreo口味，搭配抹茶的香氣，苦中帶甜。"
        },
        {name:`司康`,
        picURL:["../pic/scon.jpg"],
        flavor:["經典原味"],
        price:["200"],
        inf:"野餐必備甜點，口感滑順不乾澀的司康，小小一個完全沒負擔。"
        },
        {name:`盒子戚風`,
        picURL:["../pic/S__27213829.jpg","../pic/tainaibox.webp","../pic/tirabox.webp"],
        flavor:["葡萄草莓","泰式奶茶","提拉米蘇"],
        price:["250","300","300"],
        inf:"滿滿的奶油搭配新鮮的水果，大口吃好滿足"
        },
        {name:`提拉米蘇`,
        picURL:["../pic/tira.jpg"],
        flavor:["經典原味"],
        price:["800"],
        inf:"注意注意！並非一般的提拉米蘇呦，是提拉米蘇巴斯克，獨家口味。"
        },
        {name:`一口戚風`,
        picURL:["../pic/strasand.jpg","../pic/eco.jpg","../pic/one-straw.jpg"],
        flavor:["三明治","櫻桃巧克力","檸檬草莓"],
        price:["100","100","100"],
        inf:"咕咕霍夫的小可愛，已經擁有一大票粉絲的磅蛋糕。"
        },
        {name:`布朗尼`,
        picURL:["../pic/boorom.jpg"],
        flavor:["經典原味"],
        price:["70"],
        inf:"軟綿又扎實 外酥又內軟的布朗尼。"
        },
        {name:`巴斯克`,
        picURL:["../pic/beautybas.jpg","../pic/beautybas.jpg"],
        flavor:["4吋","6吋"],
        price:["380","580"],
        inf:"近年來夯到不行的巴斯克，是法國、西班牙邊界的巴斯克地區的傳統甜點，被稱為烤焦的起司蛋糕"
        },
        {name:`聖誕禮盒`,
        picURL:["../pic/xmas.jpg"],
        flavor:["單盒"],
        price:["500"],
        inf:"聖誕節前一個月限購，一年一次的季節性商品，內容豐富，送禮自食兩相宜。"
        },
        {name:`新年禮盒`,
        picURL:["../pic/newyear.jpg"],
        flavor:["單盒"],
        price:["600"],
        inf:"除夕前一個半月前限購，一年一次的季節性商品，內容豐富並讓你擁有滿滿的新年氣氛。"
        },
        {name:`客製化生日蛋糕`,
        picURL:["../pic/cake.jpg"],
        flavor:["單個"],
        price:["700"],
        inf:"蛋糕表面可客製化寫字，蛋糕體有多種口味可選擇有多種口味可選擇，適合節慶、送禮。"
        },
        

    ]


    //定義按按鈕 秀燈箱的函式
    
    let ClickToShow =function(e){   //deesert[i]放入e，點擊第i個按鈕，就執行deesert[i]
        return function(){       
        buyLightbox.style.display="block";
        lightboxBcg.style.display="block";
        
        document.getElementById("lightbox-title").innerText = e.name;
        document.getElementById("lightbox-inf").innerText = e.inf;
        document.getElementById("lightbox-price").value = e.price[0];
        document.getElementById("lightbox-img").src=e.picURL[0];

  
            //讓有幾個口味就跑出幾個按鈕
            let flavorOpt =  document.getElementById("flavor-opt")

            while(flavorOpt.firstChild){
                flavorOpt.removeChild(flavorOpt.lastChild)
            }

            for (let i=0 ; i<e.flavor.length ; i++){
                
                // console.log("有幾個口味",e.flavor.length);
                // console.log("口味", flavorOpt);
                let button = document.createElement("button")   //創造按鈕
                button.textContent = e.flavor[i];    //把文字放入按鈕裡，有i個文字所以i個按鈕
                flavorOpt.appendChild(button); //加入按鈕

                //口味按鈕的點擊事件
                
                button.addEventListener("click",function(){
                    // console.log(button)
                    document.getElementById("lightbox-img").src=e.picURL[i];
                    document.getElementById("lightbox-price").value = e.price[i];

                    button.style.backgroundColor="#BD8B65"; 
                    $(button).siblings().css({                 //用jQuery取出其他button
                        "background-color": "#d2b48d",
                    });
                    
                })
             
            }
            
        }
        
    }
    
    //定義關燈箱的函式
    let lightboxHide =function(){           
        buyLightbox.style.display="none";
        lightboxBcg.style.display="none";
    }

     //定義加入購物車的函式
     let added =function(){           
        buyLightbox.style.display="none";
        lightboxBcg.style.display="none";
        alert("已加入購物車");
    }

    let cart = document.querySelectorAll(`.container .cart`); //取得購物車icon

    //註冊每個按鈕
    for(i=0 ; i<cart.length ;i++){

        cart[i].addEventListener("click",ClickToShow(dessert[i]),false)   //按按鈕時呼叫函式，將desseet的所有陣列放入此函式
        closeBtn.addEventListener("click",lightboxHide)  //按xx時呼叫關閉燈箱
        cartAdd.addEventListener("click",added)   //按加入購物車時關閉燈箱
   
    }
     //加減事件
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