var randomNo1=Math.floor(Math.random()*6)+1;
var randomImage1="dice"+randomNo1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);

var randomNo2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNo2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

if(randomNo1>randomNo2)
{
    document.querySelector("h3").innerHTML="Player 1 wins!";
}

else if(randomNo2>randomNo1)
{
    document.querySelector("h3").innerHTML="Player 2 wins!";
}
else
{
    document.querySelector("h3").innerHTML="It's a draw!";
}


