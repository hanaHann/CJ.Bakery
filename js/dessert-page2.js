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


