var player = 1;

var draw = 0;

var numInArray1 = 0;
var numInArray2 = 0;
var numInArray3 = 0;
var numInArray4 = 0;
var numInArray5 = 0;
var numInArray6 = 0;
var numInArray7 = 0;

var coloumnA = [];
var coloumnB = [];
var coloumnC = [];
var coloumnD = [];
var coloumnE = [];
var coloumnF = [];
var coloumnG = [];

var coloumn1 = ['0,6','0,5','0,4','0,3','0,2','0,1','0,0'];
var coloumn2 = ['1,6','1,5','1,4','1,3','1,2','1,1','1,0'];
var coloumn3 = ['2,6','2,5','2,4','2,3','2,2','2,1','2,0'];
var coloumn4 = ['3,6','3,5','3,4','3,3','3,2','3,1','3,0'];
var coloumn5 = ['4,6','4,5','4,4','4,3','4,2','4,1','4,0'];
var coloumn6 = ['5,6','5,5','5,4','5,3','5,2','5,1','5,0'];
var coloumn7 = ['6,6','6,5','6,4','6,3','6,2','6,1','6,0'];


// win



//draw
if (draw === 7){
	document.getElementById("win").innerHTML("It's a DRAW!");
}
//Functions that switches players and calls another function
function DropA() {
	Drop1()
	if (player === 1){
		player = 2
	}
	else {
		player = 1
	}
	
}
function DropB() {
	Drop2()
	if (player === 1){
		player = 2
	}
	else {
		player = 1
	}
}
function DropC() {
	Drop3()
	if (player === 1){
		player = 2
	}
	else {
		player = 1
	}
}
function DropD() {
	Drop4()
	if (player === 1){
		player = 2
	}
	else {
		player = 1
	}
}
function DropE() {
	Drop5()
	if (player === 1){
		player = 2
	}
	else {
		player = 1
	}
}
function DropF() {
	Drop6()
	if (player === 1){
		player = 2
	}
	else {
		player = 1
	}
}
function DropG() {
	Drop7()
	if (player === 1){
		player = 2
	}
	else {
		player = 1
	}
}
//Functions 
//Functions that replace the img to a diffrent img
function Drop1() {
	if (player === 1){
		document.getElementById(coloumn1[numInArray1]).src="red.png"
		numInArray1 += 1;
		
		if (numInArray1 === coloumn1.length){
			document.getElementById("butA").remove();
			draw++;
		}
	}
	if (player === 2){
		document.getElementById(coloumn1[numInArray1]).src="black.png"
		numInArray1 += 1
		
		if (numInArray1 === coloumn1.length){
			document.getElementById("butA").remove();
			draw++;
		}
	}
}	
function Drop2() {
	if (player === 1){
		document.getElementById(coloumn2[numInArray2]).src="red.png"
		numInArray2 += 1
		
		if (numInArray2 === coloumn2.length){
			document.getElementById("butB").remove();
			draw++;
		}
	}
	if (player === 2){
		document.getElementById(coloumn2[numInArray2]).src="black.png"
		numInArray2 += 1
		
		if (numInArray2 === coloumn2.length){
			document.getElementById("butB").remove();
			draw++;
		}
	}
}
function Drop3() {
	if (player === 1){
		document.getElementById(coloumn3[numInArray3]).src="red.png"
		numInArray3 += 1
		
		if (numInArray3 === coloumn3.length){
			document.getElementById("butC").remove();
			draw++;
		}
	}
	if (player === 2){
		document.getElementById(coloumn3[numInArray3]).src="black.png"
		numInArray3 += 1
		
		if (numInArray3 === coloumn3.length){
			document.getElementById("butC").remove();
			draw++;
		}
	}
}
function Drop4() {
	if (player === 1){
		document.getElementById(coloumn4[numInArray4]).src="red.png"
		numInArray4 += 1
		
		if (numInArray4 === coloumn4.length){
			document.getElementById("butD").remove();
			draw++;
		}
	}
	if (player === 2){
		document.getElementById(coloumn4[numInArray4]).src="black.png"
		numInArray4 += 1
		
		if (numInArray4 === coloumn4.length){
			document.getElementById("butD").remove();
			draw++;
		}
	}
}
function Drop5() {
	if (player === 1){
		document.getElementById(coloumn5[numInArray5]).src="red.png"
		numInArray5 += 1
		
		if (numInArray5 === coloumn5.length){
			document.getElementById("butE").remove();
			draw++;
		}
	}
	if (player === 2){
		document.getElementById(coloumn5[numInArray5]).src="black.png"
		numInArray5 += 1
		
		if (numInArray5 === coloumn5.length){
			document.getElementById("butE").remove();
			draw++;
		}
	}
}
function Drop6() {
	if (player === 1){
		document.getElementById(coloumn6[numInArray6]).src="red.png"
		numInArray6 += 1
		
		if (numInArray6 === coloumn6.length){
			document.getElementById("butF").remove();
			draw++;
		}
	}
	if (player === 2){
		document.getElementById(coloumn6[numInArray6]).src="black.png"
		numInArray6 += 1
		
		if (numInArray6 === coloumn6.length){
			document.getElementById("butF").remove();
			draw++;
		}
	}
}
function Drop7() {
	if (player === 1){
		document.getElementById(coloumn7[numInArray7]).src="red.png"
		numInArray7 += 1
		
		if (numInArray7 === coloumn7.length){
			document.getElementById("butG").remove();
			draw++;
		}
	}
	if (player === 2){
		document.getElementById(coloumn7[numInArray7]).src="black.png"
		numInArray7 += 1
		
		if (numInArray7 === coloumn7.length){
			document.getElementById("butG").remove();
			draw++;
		}
	}
}
