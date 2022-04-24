// 我的收藏

window.addEventListener("load",function(){
    let heart = document.getElementsByClassName("heart");   //所有愛心
    let removeHeart = document.getElementById("remove-heart");  //已移除收藏燈箱
    let addHeart = document.getElementById("add-heart");    //已加入收藏燈箱
    let lightboxBcg = document.getElementById("lightbox-bcg");  //背景遮罩

    for(let i=0 ; i<heart.length ; i++){
        heart[i].addEventListener("click",function(){
            console.log(heart[i])
            if(this.title=="加入收藏"){
                addHeart.style.visibility="visible";
                this.src="./texture/heart2.png";        //換有愛心的圖片
                this.title="取消收藏";
                lightboxBcg.style.display="block";       //背景遮罩
                lightboxBcg.style.opacity=".3";           //背景遮罩
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