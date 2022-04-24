window.addEventListener("load",function(){
    let qa = document.querySelectorAll(".qa");
    let qaInf = document.querySelectorAll(".faq .inf")

    console.log(qaInf[0]);
    console.log(qa.length);

    qa[0].addEventListener("click",function(){
        if( qaInf[0].classList.contains("faq-hidden") == true){

        qaInf[0].classList.remove("faq-hidden");
        }else{
            qaInf[0].classList.add("faq-hidden")
        }
    });

    qa[1].addEventListener("click",function(){
        if( qaInf[1].classList.contains("faq-hidden") == true){

        qaInf[1].classList.remove("faq-hidden");
        }else{
            qaInf[1].classList.add("faq-hidden")
        }
    });

    qa[2].addEventListener("click",function(){
        if( qaInf[2].classList.contains("faq-hidden") == true){

        qaInf[2].classList.remove("faq-hidden");
        }else{
            qaInf[2].classList.add("faq-hidden")
        }
    });

    qa[3].addEventListener("click",function(){
        if( qaInf[3].classList.contains("faq-hidden") == true){

        qaInf[3].classList.remove("faq-hidden");
        }else{
            qaInf[3].classList.add("faq-hidden")
        }
    });

    qa[4].addEventListener("click",function(){
        if( qaInf[4].classList.contains("faq-hidden") == true){

        qaInf[4].classList.remove("faq-hidden");
        }else{
            qaInf[4].classList.add("faq-hidden")
        }
    });

    qa[5].addEventListener("click",function(){
        if( qaInf[5].classList.contains("faq-hidden") == true){

        qaInf[5].classList.remove("faq-hidden");
        }else{
            qaInf[5].classList.add("faq-hidden")
        }
    });

    qa[6].addEventListener("click",function(){
        if( qaInf[6].classList.contains("faq-hidden") == true){

        qaInf[6].classList.remove("faq-hidden");
        }else{
            qaInf[6].classList.add("faq-hidden")
        }
    });

    qa[7].addEventListener("click",function(){
        if( qaInf[7].classList.contains("faq-hidden") == true){

        qaInf[7].classList.remove("faq-hidden");
        }else{
            qaInf[7].classList.add("faq-hidden")
        }
    });

    // for(i=0 ; i<qa.length ; i++){
    //     qa[i].addEventListener("click",function(){
    //         if( qaInf[i].classList.contains("faq-hidden") == true){
    //             alert("hi")
    //         qaInf[i].classList.remove("faq-hidden");
    //         }else{
    //             qaInf[i].classList.add("faq-hidden");
    //         };
    //     });
    // }
})

// 熊熊
window.addEventListener("load",function(){
    
    
    document.addEventListener("scroll",function(){
        let shot = document.getElementById("title-shot");
        let bear = document.getElementById("hi-bear");
        let ScrollNum = document.documentElement.scrollTop;
        // console.log(ScrollNum)
        if(ScrollNum>90){
            shot.classList.add("shot-show");
            bear.classList.add("bear-move");
            
        }else{
            bear.classList.remove("bear-move")
            shot.classList.remove("shot-show");
        }
    })
    
    
})
