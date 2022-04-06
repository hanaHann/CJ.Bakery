


window.addEventListener("load",function(){

    var dessert = document.getElementById("selection");
    var custom = document.getElementById("custom");
    var giftbox = document.getElementById("giftbox");



    dessert.addEventListener("change",function(){
      console.log("換了");

    if(dessert.value == "custom"){
        custom.style.display="block";
        giftbox.style.display="none";     
    }

    else if(dessert.value == "giftbox"){
        custom.style.display="none";
        giftbox.style.display="block"; 
      
    }

    })


  })