var player = 1

var numInArray1 = 0
var numInArray2 = 0
var numInArray3 = 0
var numInArray4 = 0
var numInArray5 = 0
var numInArray6 = 0
var numInArray7 = 0

var coloumnA = []
var coloumnB = []
var coloumnC = []
var coloumnD = []
var coloumnE = []
var coloumnF = []
var coloumnG = []

var coloumn1 = ['g1','f1','e1','d1','c1','b1','a1']
var coloumn2 = ['g2','f2','e2','d2','c2','b2','a2']
var coloumn3 = ['g3','f3','e3','d3','c3','b3','a3']
var coloumn4 = ['g4','f4','e4','d4','c4','b4','a4']
var coloumn5 = ['g5','f5','e5','d5','c5','b5','a5']
var coloumn6 = ['g6','f6','e6','d6','c6','b6','a6']
var coloumn7 = ['g7','f7','e7','d7','c7','b7','a7']


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
		numInArray1 += 1
		
		if (numInArray1 === coloumn1.length){
			document.getElementById("butA").remove();
		}
	}
	if (player === 2){
		document.getElementById(coloumn1[numInArray1]).src="black.png"
		numInArray1 += 1
		
		if (numInArray1 === coloumn1.length){
			document.getElementById("butA").remove();
		}
	}
}	
function Drop2() {
	if (player === 1){
		document.getElementById(coloumn2[numInArray2]).src="red.png"
		numInArray2 += 1
		
		if (numInArray2 === coloumn2.length){
			document.getElementById("butB").remove();
		}
	}
	if (player === 2){
		document.getElementById(coloumn2[numInArray2]).src="black.png"
		numInArray2 += 1
		
		if (numInArray2 === coloumn2.length){
			document.getElementById("butB").remove();
		}
	}
}
function Drop3() {
	if (player === 1){
		document.getElementById(coloumn3[numInArray3]).src="red.png"
		numInArray3 += 1
		
		if (numInArray3 === coloumn3.length){
			document.getElementById("butC").remove();
		}
	}
	if (player === 2){
		document.getElementById(coloumn3[numInArray3]).src="black.png"
		numInArray3 += 1
		
		if (numInArray3 === coloumn3.length){
			document.getElementById("butC").remove();
		}
	}
}
function Drop4() {
	if (player === 1){
		document.getElementById(coloumn4[numInArray4]).src="red.png"
		numInArray4 += 1
		
		if (numInArray4 === coloumn4.length){
			document.getElementById("butD").remove();
		}
	}
	if (player === 2){
		document.getElementById(coloumn4[numInArray4]).src="black.png"
		numInArray4 += 1
		
		if (numInArray4 === coloumn4.length){
			document.getElementById("butD").remove();
		}
	}
}
function Drop5() {
	if (player === 1){
		document.getElementById(coloumn5[numInArray5]).src="red.png"
		numInArray5 += 1
		
		if (numInArray5 === coloumn5.length){
			document.getElementById("butE").remove();
		}
	}
	if (player === 2){
		document.getElementById(coloumn5[numInArray5]).src="black.png"
		numInArray5 += 1
		
		if (numInArray5 === coloumn5.length){
			document.getElementById("butE").remove();
		}
	}
}
function Drop6() {
	if (player === 1){
		document.getElementById(coloumn6[numInArray6]).src="red.png"
		numInArray6 += 1
		
		if (numInArray6 === coloumn6.length){
			document.getElementById("butF").remove();
		}
	}
	if (player === 2){
		document.getElementById(coloumn6[numInArray6]).src="black.png"
		numInArray6 += 1
		
		if (numInArray6 === coloumn6.length){
			document.getElementById("butF").remove();
		}
	}
}
function Drop7() {
	if (player === 1){
		document.getElementById(coloumn7[numInArray7]).src="red.png"
		numInArray7 += 1
		
		if (numInArray7 === coloumn7.length){
			document.getElementById("butG").remove();
		}
	}
	if (player === 2){
		document.getElementById(coloumn7[numInArray7]).src="black.png"
		numInArray7 += 1
		
		if (numInArray7 === coloumn7.length){
			document.getElementById("butG").remove();
		}
	}
}
