console.log("Test Start"); // testing to see if it starts

document.getElementById("header").innerHTML = `
<header>
<div class="topnav">
    <a href="home.html" id="sound">Home</a>
    <a href="about.html" id="sound">About</a>
    <a href="product.html" id="sound">Product</a>
    <a href="contact.html" id="sound">Contact</a>
  </div> 
</header>
`;

document.getElementById("footer").innerHTML=
`    <footer>
<p>Copyright 1990, Nintendo Co., Ltd. All Rights Reserved</p>
</footer>
`

var button = document.getElementById('sound'); // 

button.addEventListener('click', myPlay); 

function myPlay(){
  var audio = new Audio("../assets/marioLetsGo.mp3");
  audio.play();
}