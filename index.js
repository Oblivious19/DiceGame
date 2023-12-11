var random1=Math.floor(Math.random()*6)+1;

var randimg="./images/"+"dice"+ random1+".png";


var dice1=document.querySelectorAll("img")[0];

dice1.setAttribute("src",randimg);

var random2=Math.floor(Math.random()*6)+1;

var randimg2="./images/"+"dice"+ random2+".png";


var dice2=document.querySelectorAll("img")[1];

dice2.setAttribute("src",randimg2);

