window.addEventListener("load", afterLoad);
window.addEventListener("mousemove", onMouseMove);

function afterLoad(){
	var container1 = document.getElementById("bean-container1");
	var container2 = document.getElementById("bean-container2");
	var container3 = document.getElementById("bean-container3");
	var container4 = document.getElementById("bean-container4");
	for(var i = 0; i<23;i++){
		var newBean1 = document.createElement("div");
		newBean1.className = "bean1";
		var newBean2 = document.createElement("div");
		newBean2.className = "bean2";
		var newBean3 = document.createElement("div");
		newBean3.className = "bean3";
		var newBean4 = document.createElement("div");
		newBean4.className = "bean4";
		container1.appendChild(newBean1);
		container2.appendChild(newBean2);
		container3.appendChild(newBean3);
		container4.appendChild(newBean4);
	}
}

function onMouseMove(e){
	var height = window.innerHeight;
	var width = window.innerWidth;
	var positionX = e.clientX;
	var positionY = e.clientY;
	var posX = positionX*255/width;
	var posY = positionY*255/height;
	var beans1 = document.getElementsByClassName("bean1");
	var beans2 = document.getElementsByClassName("bean2");
	var beans3 = document.getElementsByClassName("bean3");
	var beans4 = document.getElementsByClassName("bean4");
	var number = parseInt((positionX-120)/40);
	for(var i = 0; i<23; i++){
		// beans1[i].style.background = "rgb("+parseInt(posX)+","+parseInt(posY)+","+parseInt(255-posX/2-posY/2)+")";
		beans2[i].style.background = "rgb("+parseInt(posX)+","+parseInt(255-posX/2-posY/2)+","+parseInt(posY)+")";
		beans3[i].style.background = "rgb("+parseInt(255-posX/2-posY/2)+","+parseInt(posY)+","+parseInt(posX)+")";
		beans4[i].style.background = "rgb("+parseInt(255-posX/2-posY/2)+","+parseInt(posY)+","+parseInt(255-posX/2-posY/2)+")";

		beans2[i].style.transform = "rotate("+(positionX-i*10)+"deg)";
		beans4[i].style.transform = "rotate("+(positionX+i*10)+"deg)";
		if(i<=number){
			beans1[i].style.opacity = "0";
			beans2[i].style.opacity = "0";
			beans3[i].style.opacity = "0";
			beans4[i].style.opacity = "0";
		}else{
			beans1[i].style.opacity = "1";
			beans2[i].style.opacity = "1";
			beans3[i].style.opacity = "1";
			beans4[i].style.opacity = "1";
		}
	}
	var pacman1 = document.getElementById("pacman1");
	var pacman2 = document.getElementById("pacman2");
	var pacman3 = document.getElementById("pacman3");
	var pacman4 = document.getElementById("pacman4");
	pacman1.style.left = positionX+"px";
	pacman2.style.left = positionX+"px";
	pacman3.style.left = positionX+"px";
	pacman4.style.left = positionX+"px";
}

 window.setInterval(timeIntervalFunc,1500);
var flag = false;

function timeIntervalFunc(){
	var beans1 = document.getElementsByClassName("bean1");
	var beans2 = document.getElementsByClassName("bean2");
	var beans3 = document.getElementsByClassName("bean3");
	var beans4 = document.getElementsByClassName("bean4");
	for(var i = 0; i<23; i++){
		console.log(beans1[i].style);
		beans1[i].style.background = "rgb("+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+","+parseInt(Math.random()*255)+")";
	}
	// if(flag==false){
	// beans1[0].style.opacity = "0";
	// flag = true;
	// }else{
	// beans1[0].style.opacity = "1";
	// flag = false;
	// }
}





