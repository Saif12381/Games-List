console.log("js console");

var data;
var grid=document.querySelector(".grid-container");

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    console.log("start request");
    if(this.readyState == 4 && this.status == 200) {

        data = JSON.parse(xhttp.responseText);
        console.log(data);
        localStorage.setItem("dataList", JSON.stringify(data));

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
};

xhttp.open("GET", "movies.json", true);
xhttp.send();

form.addEventListener("submit", function(e){
    e.preventDefault();
    let title = titleInput.value;
    let publisher = devInput.value;
    let releaseData = releaseDataInput.value;
    let gifSrc = gifInput.value;
    let imgSrc = imgInput.value;
    let newObj = {
        "id":getNextId(),
        "title":title,
        "publisher":publisher,
        "releaseData":releaseData,
        "imgSrc":imgSrc,
        "gifSrc":gifSrc };
        submitData(newObj);
        form.reset();
});