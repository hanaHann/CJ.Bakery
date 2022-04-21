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
