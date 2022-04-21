// 以下是輪播
window.addEventListener("load",function(){
    let imgAll = document.querySelectorAll(`#slidepic .img`);
    let introduce = document.querySelectorAll(".introduce .inf");
  
    let num = 0; //宣告當前次數是0
 
    let start=setInterval(function(){
        num++;
        for(let i=0 ; i<imgAll.length ;i++){
        imgAll[i].classList.add("hide");
        introduce[i].classList.add("hide");
        btn[i].style.backgroundColor="#AF6E4D";
        }; //所有圖片文字都消失

        if( num == imgAll.length ){
            num = 0;
        }
        imgAll[num].classList.remove("hide"); //時間到的圖片出現
        introduce[num].classList.remove("hide");//時間到的文字出現
        btn[num].style.backgroundColor="white";
    },1600)


    let btn = document.querySelectorAll(".btn-control span");
    // 按鈕事件
    for(let a=0 ; a<btn.length ; a++){
        for(let j=0 ; j<btn.length ; j++){
            //點擊一下時清除輪播
            btn[j].addEventListener("click",function(){clearInterval(start)});
            btn[j].addEventListener("click",function(){
                imgAll[j].classList.remove("hide");  //點到對應按鈕的圖片顯示
                introduce[j].classList.remove("hide"); //點到對應按鈕的文字顯示
                if( a != j){
                    imgAll[a].classList.add("hide");  //其他圖片關起來
                    introduce[a].classList.add("hide"); //其他文字關起來
                }
                //點擊時換按鈕顏色
                this.style.backgroundColor="white";
                console.log("點擊按鈕")
                if( a != j){
                    btn[a].style.backgroundColor="#AF6E4D"; //按鈕以外變回原本顏色
                }
            });
        }

    }

})