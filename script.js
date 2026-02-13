
console.log("js console");

var data;
var grid=document.querySelector(".grid-container");

if (localStorage.getItem("dataList")) {
  data = JSON.parse(localStorage.getItem("dataList"));
  console.log("Loaded from localStorage");
  if (grid) {
    makeCards();
  }
} else {
  var xhttp = new XMLHttpRequest();


xhttp.onreadystatechange = function(){
    console.log("start request");
    if(this.readyState == 4 && this.status == 200) {

        data = JSON.parse(xhttp.responseText);
        console.log(data);
        localStorage.setItem("dataList", JSON.stringify(data));
        makeCards();
}
};
xhttp.open("GET", "movies.json", true);
xhttp.send();
}


function makeCards() {
            data.forEach(function(movie){
        let card = document.createElement("div");
        card.classList.add("card");
    
        let textData = 
        "<div class='movie-title'>" + movie.title + "</div>" + 
        "<span>" + "Cast: " + movie.cast + "<br>" + 
        " Release Date: " + movie.year + "<br>" + 
        "Needs Research: " + 
        "</span>";
        
        card.innerHTML = textData;
    
        if(movie.imgSrc){
            card.style.backgroundImage = "url('" + movie.imgSrc + "')";
        }

        grid.appendChild(card); 
        });
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    let title = document.getElementById("fname").value;
    let year = document.getElementById("year").value;
    let cast = document.getElementById("cast").value;
    let genre = document.getElementById("genre").value;
    let imgSrc = document.getElementById("imagemovie").value;
    let newObj = {
        title:title,
        cast:cast,
        year:year,
        genre:genre,    
        imgSrc:imgSrc
    };
    data.push(newObj);
  localStorage.setItem("dataList", JSON.stringify(data));
  console.log("Saved new item to localStorage");

  // Only render if grid exists on this page
  if (document.querySelector(".grid-container")) {
    grid.innerHTML = ""; // Clear existing cards
    console.log("Cleared existing cards");
    makeCards();
  }
    console.log("Added new movie card");
        submitData(newObj);
        form.reset();

});