


window.addEventListener("load",function(){

    var dessert = document.getElementById("selection");
    var brownie = document.getElementById("brownie");
    var basque = document.getElementById("basque");
    var tira = document.getElementById("tira");
    var boxsweet = document.getElementById("boxsweet");
    var onebite = document.getElementById("onebite");


    dessert.addEventListener("change",function(){
      console.log("換了");

    if(dessert.value == "brownie"){
        brownie.style.display="block";
        basque.style.display="none";
        tira.style.display="none";
        boxsweet.style.display="none";
        onebite.style.display="none";           
    }

    else if(dessert.value == "basque"){
        brownie.style.display="none";
        basque.style.display="block";
        tira.style.display="none";
        boxsweet.style.display="none";   
        onebite.style.display="none";          
      
    }

    else if(dessert.value == "tira"){
        brownie.style.display="none";
        basque.style.display="none";
        tira.style.display="block";
        boxsweet.style.display="none"; 
        onebite.style.display="none";            
        
    }

    else if(dessert.value == "boxsweet"){
        brownie.style.display="none";
        basque.style.display="none";
        tira.style.display="none";
        boxsweet.style.display="block";  
        onebite.style.display="none";           
        
    }

    else if(dessert.value == "onebite"){
        brownie.style.display="none";
        basque.style.display="none";
        tira.style.display="none";
        boxsweet.style.display="none";  
        onebite.style.display="block";           
        
    }


    })


  })