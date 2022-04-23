let divWidth  = $(`.container`).width(); //抓div寬度
let liCount = $(`.container li`).length; //抓li個數

console.log(divWidth)
console.log(liCount)

window.addEventListener("load",function(){
    console.log(window.innerWidth)
})


$(`#contentButton :nth-child(1)`).addClass(`clickMe`)
$(`.container .list`).width(divWidth * liCount) //ul的寬度=所有li的寬度
    while("load" || "redize"){
    if(window.innerWidth < 768){
        console.log("小於768")
        for (let i=0 ; i<liCount / 3 ; i++){
            $(`#contentButton`).append(`<li> </li>`)
        }
        $(`.container .list li`).width(divWidth / 1); //li的寬度
        
    }else if(window.innerWidth >= 768 && window.innerWidth < 1200 ){
        console.log("大於768")
        for (let i=0 ; i<liCount / 2 ; i++){
            $(`#contentButton`).append(`<li> </li>`)
        }
        $(`.container .list li`).width(divWidth / 2); //li的寬度
    
    }else{
        console.log("大於1200")
        for (let i=0 ; i<liCount ; i++){
            $(`#contentButton`).append(`<li> </li>`)
        }
        $(`.container .list li`).width(divWidth / 3.2); //li的寬度 
        
    }

}



// 設置點擊
$(`#contentButton li`).click(function(){
    console.log("點點")
    // alert( $(this).index() );
    index = $(this).index();
    //圖片往左推
    $(`.container .list`).animate({
        left: divWidth * index * -1,
    });
    //被案的按鈕加上顏色！！
    $(this).addClass(`clickMe`);
    $('#contentButton li').not(this).removeClass('clickMe');
})