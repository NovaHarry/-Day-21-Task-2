var maindiv = document.createElement('div');
maindiv.classList.add("container-fluid");
maindiv.style.backgroundColor="black";
document.body.append(maindiv);

var logodiv = document.createElement('div');
logodiv.classList.add("logodiv");
maindiv.append(logodiv);

var logo = document.createElement('img');
logo.classList.add("logo");
logo.setAttribute('src','./Images/Logo 1.png');
logodiv.append(logo);

setTimeout(()=>{
maindiv.innerHTML ="";
maindiv.style.backgroundImage="url('./Images/Movies.jpg')";


var Headerdiv = document.createElement('div');
Headerdiv.classList.add("Headerdiv");
maindiv.append(Headerdiv);


var logoHeaderdiv = document.createElement('div');
logoHeaderdiv.classList.add("logoHeaderdiv");

var logoHeaderimg = document.createElement('img');
logoHeaderimg.classList.add("logoHeaderimg");
logoHeaderimg.setAttribute('src','./Images/Logo 1.png');
logoHeaderdiv.append(logoHeaderimg);

var searchdiv = document.createElement('div');
searchdiv.classList.add("searchdiv");
Headerdiv.append(searchdiv);

var form = document.createElement('form');
form.classList.add("form");
searchdiv.append(form);

var search = document.createElement('input');
search.classList.add("rounded","searchbar");
search.setAttribute('placeholder','Search for Movies & Series');
form.append(search);

var searchButton = document.createElement('button');
searchButton.classList.add("searchbutton");
form.append(searchButton);

var icon = document.createElement('i');
icon.classList.add("fa-sharp", "fa-solid", "fa-magnifying-glass");
searchButton.append(icon);

var subdiv = document.createElement('div');
subdiv.classList.add("subdiv");
maindiv.append(subdiv);
let API_key = "a2bb7f22";


let searchvalue = document.querySelector('.searchbar');

let page = 1;

async function allMovies(searchtext,page){

    let url = `https://www.omdbapi.com/?s=${searchtext}&page=${page}&apikey=${API_key}&`;
    var v = fetch(url);
    var out1 = await v;
    var prom = out1.json();
    var output = await prom;

    console.log(output.Search);

    for(let i of output.Search){
        var cardheader = document.createElement('div');
        cardheader.classList.add("card-header" , "head");
        subdiv.append(cardheader);
        cardheader.innerText=`${i.Title}`;
        
        var imgdiv = document.createElement('div');
        imgdiv.classList.add("card-body","imgdiv");
        subdiv.append(imgdiv);

        var images = document.createElement('img');
        images.classList.add('img-fluid');
        images.setAttribute('src',`${i.Poster}`);
        images.setAttribute('alt','Image-link broken');
        imgdiv.append(images);
    } 
}

var LoadMorediv = document.createElement('div');
LoadMorediv.classList.add("LoadMorediv");
LoadMorediv.style.visibility="hidden";
maindiv.append(LoadMorediv);
var LoadMore = document.createElement('button');
LoadMore.classList.add("LoadMore");
LoadMore.innerText = "Load More";
LoadMorediv.append(LoadMore);

searchButton.addEventListener('click',(e)=>{
    e.preventDefault();
    subdiv.innerHTML="";
    allMovies(searchvalue.value,page)
    LoadMorediv.style.visibility="visible";
    Headerdiv.style.height= "20vh";
    maindiv.style.height="fit-content";
    maindiv.style.backgroundImage="";
    maindiv.style.backgroundColor="black";
    Headerdiv.prepend(logoHeaderdiv); 
})

LoadMore.addEventListener('click',()=>{
    page++;
    allMovies(searchvalue.value,page);
})

},8000)