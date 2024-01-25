var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var imagenes = ["","images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
document.getElementsByClassName("img1")[0].setAttribute("src",imagenes[randomNumber1]);
document.getElementsByClassName("img2")[0].setAttribute("src",imagenes[randomNumber2]);
if(randomNumber1>randomNumber2){
		document.querySelector("h1").innerHTML="🎲Player1 Wins!";
		document.getElementsByTagName("p")[0].style.backgroundColor="yellow";

	//	document.getElementsByClassName("dice")[0].styles.backgroundColor="yellow";
}else if(randomNumber2>randomNumber1){
		document.querySelector("h1").innerHTML="Player2 Wins!🎲";
		document.getElementsByTagName("p")[1].style.backgroundColor="yellow";

}else {
		document.querySelector("h1").innerHTML="🎲Empate!🎲";
		document.getElementsByTagName("p")[0].style.backgroundColor="yellow";
		document.getElementsByTagName("p")[1].style.backgroundColor="yellow";

}
