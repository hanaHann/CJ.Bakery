


window.addEventListener("load",switchFavorite){


  function switchFavorite(){
  var heart = document.getElementById("heart");

    if(heart.title=="加入收藏"){
      heart.src="./texture/heart2.png";
      heart.title="取消收藏";
      console.log("成功");
    }
    else if (heart.title="取消收藏"){
      heart.src="./texture/heart1.png";
      heart.title="加入收藏";
      console.log("成功了");
      
    }


  }
  heart.addEventListener("click",switchFavorite);
}
// function hoverFavorite(){
//   heart.src="./texture/heart2.png";
//   console.log("hover");

// }

// heart.addEventListener("mouseover",hoverFavorite);



