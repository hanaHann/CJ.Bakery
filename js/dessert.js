




var ul = document.getElementById("ululul");
var btnPre = document.getElementById("btn-pre")
var btnNext = document.getElementById("btn-next")

console.log(ul);

// var li = this.document.getElementById("abc");

var li = ul.childNodes;
console.log(li[3]); //為何不是陣列
console.log(li.length); //哪來的十一個

//////////////////////////////////////////////////////////

var lis=ul.getElementsByTagName("li");
console.log(lis); 

console.log(lis[1]); 

lis[2].style.display="none"


for(let i=0 ; i < li.length ; i++){

    if(i >= 3){
        lis[i].style.display="none";

    }

    btnNext.addEventListener("click",function(){
        console.log("後一個哈哈");
        lis[0].style.display="none";
        lis[3].style.display="block";
    })

    btnPre.addEventListener("click",function(){
        console.log("前一個");
    
        
    })

    
};




