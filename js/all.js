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
        console.log("小魚")

        window.addEventListener("scroll",function(){
            var scroolTop = document.documentElement.scrollTop || document.body.scrollTop;
            
            var scrollFunc = function (e) {  
                e = e || window.event;  
            }
            window.onmousewheel = document.onmousewheel = scrollFunc;
            
            console.log("scrollValue",scroolTop)
            console.log("scrollY",window.scrollY)
            console.log("window.innerHeight",window.innerHeight)
            console.log("e.wheelDelta",e.wheelDelta)

            if(document.documentElement.scroll >= scroolTop){
                let footer = document.getElementById("footer")
                footer.classList.add("footer-hidden");
                }else{
                    footer.classList.remove("footer-hidden");
                }
        })
    
    }


})


