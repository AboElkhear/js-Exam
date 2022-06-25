var nvWidth = 0,
isTrue = !0;
$(".start-toggel-menu").click(function() {
    isTrue ? ($(".nav-tab-menu").addClass("open-menu").removeClass("close-menu"), nvWidth = $(".nav-tab-menu").width() - 10, $(".start-header-nav").css("left", nvWidth), $(".fa-align-justify").toggleClass("fa-times"), $(".nav-tab-menu .item1").animate({
        opacity: "1",
        paddingTop: "25px"
    },
    1100), $(".nav-tab-menu .item2").animate({
        opacity: "1",
        paddingTop: "25px"
    },
    1200), $(".nav-tab-menu .item3").animate({
        opacity: "1",
        paddingTop: "25px"
    },
    1300), $(".nav-tab-menu .item4").animate({
        opacity: "1",
        paddingTop: "25px"
    },
    1400), $(".nav-tab-menu .item5").animate({
        opacity: "1",
        paddingTop: "25px"
    },
    1500), $(".nav-tab-menu .item6").animate({
        opacity: "1",
        paddingTop: "25px"
    },
    1600), isTrue = !isTrue) : ($(".nav-tab-menu").addClass("close-menu").removeClass("open-menu"), $(".fa-align-justify").toggleClass("fa-times"), $(".start-header-nav").css("left", 0), $(".nav-tab-menu li").animate({
        opacity: "0",
        paddingTop: "500px"
    },
    500), isTrue = !isTrue)
});

var row = document.getElementById("rowData"),
categorylinks = document.getElementsByClassName("nav-category"),
result = document.getElementById("res"),
allMoviesByWord = document.getElementById("allMovies"),
trendingURL = "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
latestURL = "https://api.themoviedb.org/3/movie/latest?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
topratedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
URL = "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44",
category = "",
search_bar = document.getElementById("word");
getMovies();

function getMovies() {
    var e = new XMLHttpRequest;
    e.open("get", URL),
    e.send(),
    e.onreadystatechange = function() {
        4 == e.readyState && 200 == e.status ? (allMovies = (allMovies = JSON.parse(e.response)).results, displayMovies()) : console.log("error")
    }
}

var imgPath = "https://image.tmdb.org/t/p/w500";
    function displayMovies() {
    for (var e = "", a = 0; a < allMovies.length; a++) e += '<div class="col-md-6 col-lg-4 my-3 myM  shadow">\n            <div class="movie shadow rounded position-relative">\n                    <div class="post">\n                    <img src=' + imgPath + allMovies[a].poster_path + ' class="img-fluid rounded"/>\n                    <div class="layer d-flex align-items-center ">\n                    <div class="info p-0">\n                   \n                        <h2>' + allMovies[a].original_title + "</h2>\n                        <p>" + allMovies[a].overview + "</p>\n                        <p >rate: " + allMovies[a].vote_average + "</p>\n                        <p>" + allMovies[a].release_date + "</p>\n                        \n                    </div>\n                    </div>\n                    </div>\n                    </div>\n                </div>";
    row.innerHTML = e
}

function displayData(){
    let temp = '';
    newMovies.forEach(element => {
        
        temp+=`<div class="col-md-4">
        <div class="item py-4" >
            <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" class="w-100" alt="">
            <div class="layer text-center py-5">
                <h2>${element.title}</h2>
                <p>${element.overview}</p>
                <p>${element.vote_average}</p>
                <p>${element.release_date}</p>
            </div>
        </div>
    </div>`
    });
    document.getElementById("movied").innerHTML = temp
}

$("#ContactUs").click(function(){
    $("html,body").animate({scrollTop:"5500px"},2000)

})




let myName = document.getElementById('name')
let myEmail = document.getElementById('email')
let myPhone = document.getElementById('phone')
let myAge = document.getElementById('age')
let mypassword = document.getElementById('password')
let myRePassword = document.getElementById('rePassword')

function getValue(){
    let value = {
        name        :   myName.value,
        Email       :   myEmail.value,
        Phone       :   myPhone.value,
        Password    :   mypassword.value,
        rePassword  :   myName.value,
    }
    validName()
}
function validName(){
    let regex = /^[A-Z][a-z]{3,8}[0-9]?$/;
    if(regex.test(myName.value)){
        console.log("tmam")
        document.getElementById("namealert").style.display="none"
    }
    else{
        console.log("invalid")
        document.getElementById("namealert").style.display="block"
    }
}

function validPhone(){
    let regex = /^[0-9]{11}$/;
    if(regex.test(myPhone.value)){
        console.log("tmam")
        document.getElementById("phonealert").style.display="none"
    }
    else{
        console.log("invalid")
        document.getElementById("phonealert").style.display="block"
    }
}

function validEmail(){
    let regex = /^[@.]$/;
    if(regex.test(myEmail.value)){
        console.log("tmam")
        document.getElementById("emailalert").style.display="none"
    }
    else{
        console.log("invalid")
        document.getElementById("emailalert").style.display="block"
    }
}

function validAge(){
    let regex = /^[0-9]{2}$/;
    if(regex.test(myAge.value)){
        console.log("tmam")
        document.getElementById("agealert").style.display="none"
    }
    else{
        console.log("invalid")
        document.getElementById("agealert").style.display="block"
    }
}


function validPassword(){
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(regex.test(myAge.value)){
        console.log("tmam")
        document.getElementById("passwordalert").style.display="none"
    }
    else{
        console.log("invalid")
        document.getElementById("passwordalert").style.display="block"
    }
}