window.addEventListener("load",function(){
    console.log(window.innerWidth)
})

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