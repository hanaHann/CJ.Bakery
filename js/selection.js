


window.addEventListener("load",function(){

    var dessert = document.getElementById("selection");
    var snow = document.getElementById("snow");
    var moder = document.getElementById("moder");
    var bear = document.getElementById("bear");
    var soft = document.getElementById("soft");


    dessert.addEventListener("change",function(){
      console.log("換了");

    if(dessert.value == "snow"){
      snow.style.display="block";
      moder.style.display="none";
      bear.style.display="none";
      soft.style.display="none";
    }

    else if(dessert.value == "moder"){
      moder.style.display="block";
      snow.style.display="none";
      bear.style.display="none";
      soft.style.display="none";
      
    }

    else if(dessert.value == "brownie"){
        moder.style.display="none";
        snow.style.display="none";
        bear.style.display="none";
        soft.style.display="none";
        
    }

    else if(dessert.value == "bear"){
        moder.style.display="none";
        snow.style.display="none";
        bear.style.display="block";
        soft.style.display="none";
        soft.style.display="none";
        
    }

    else if(dessert.value == "soft"){
        moder.style.display="none";
        snow.style.display="none";
        bear.style.display="none";
        soft.style.display="block";
        
    }

  

    })


  })