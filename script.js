var alpha_num = "123456789abcdef".split('');
height = 0;deleting = false;
function newColor(){
  color = "";
  x = 0;
  while(x < 6){
    i = alpha_num[Math.floor(Math.random() * (14 - 0)) + 0];
    color+=i;
    x++;
  }
  // update styling to new color
  document.querySelector('html').style.backgroundColor = "#" + color;
  document.body.querySelector('h1').innerHTML = "#" + color;
}

function toggleFavorite(){
  
  var fav_btns = document.getElementById('favorite_options');
  if(height <= 0){
    fav_btns.style.opacity = "1";
    favorites.style.opacity = "1";
    favorites.style.marginTop = "30px";
    while(height <= 200){
      favorites.style.height = height.toString() + "px";
      height+=20;
    }
    
  }
  else{
    fav_btns.style.opacity = "0";
    favorites.style.opacity = "0";
    favorites.style.marginTop = "0px";
    while(height >= 0){
      favorites.style.height = height.toString() + "px";
      height-=20;
    }
  }
  
  //Save color
  favorites.innerHTML = '';
  for(x in localStorage){
    var fav_color = document.createElement('p');
    fav_color.innerHTML = '#' + localStorage[x] + "<br>";
    fav_color.style.backgroundColor = '#' + localStorage[x];
    favorites.appendChild(fav_color);
  }
  
}

function favoriteColor(){
  if(localStorage.getItem(color) !== undefined){
    localStorage.setItem(color, color);
  }
  else{
    //alert here
  }
  favorites.innerHTML = '';
  for(x in localStorage){
    var fav_color = document.createElement('p');
    fav_color.innerHTML = '#' + localStorage[x] + "<br>";
    fav_color.style.backgroundColor = '#' + localStorage[x];
    favorites.appendChild(fav_color);
  }
}

function toggleDelete(){
  
  if(deleting == false){
    document.getElementById('toggleDeleteButton').style.backgroundColor = "red";
    deleting = true;
    document.querySelector('body').addEventListener('click', deleteColor = function(event) {
      if(event.target.tagName.toLowerCase() === 'p'){
        localStorage.removeItem(event.target.innerHTML.slice(1,7));
        event.target.style.display = "none";
      }
    });
  }
  else{
    deleting = false;
    document.getElementById('toggleDeleteButton').style.backgroundColor = "transparent";
    //remove anonymous event handle on body
    document.querySelector('body').removeEventListener('click', deleteColor);
  }
}

function deleteColor(){
  
}
//wait for window to load...
window.onload = function(){
  newColor();
  document.getElementById('refreshButton').addEventListener('click',newColor);
  document.getElementById('favoriteOpenButton').addEventListener('click',toggleFavorite);
  document.getElementById('favoriteButton').addEventListener('click',favoriteColor);
  document.getElementById('toggleDeleteButton').addEventListener('click',toggleDelete);
  var favorites = document.getElementById('favorites');
};

