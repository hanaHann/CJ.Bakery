window.addEventListener("load",function(){

    $(".ds-pic").mouseover(function(){
        $(".ds-pic2").fadeIn(700);
        $(this).fadeOut(700);
    })
    $(".ds-pic2").mouseout(function(){
        $(".ds-pic").fadeIn(0);
        $(".ds-pic2").fadeOut(0); 
    })
})