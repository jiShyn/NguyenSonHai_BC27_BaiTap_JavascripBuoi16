//=======BÀI 1=========
var n = 0;
var sum = 0
while (sum <= 10000) {
	n++
	sum += n
}
// console.log(n,sum);
document.getElementById("res1").innerHTML = `n = ${n}`;
//=====//BÀI 1=========

// n = 1 : sum = 1
// n = 2 : sum = 3
// n = 3 : sum = 6
// n = 4 : sum = 10
// n = 5 : sum = 15

//=======BÀI 2=========
function calcSum() {
	var x = +document.getElementById("numX").value
	var n = +document.getElementById("numN").value
	var sum = 0;
	for (var i = 1; i <= n; i++) {
		sum += x**i
	}
	// console.log(sum);
document.getElementById("res2").innerHTML = `S(n) = ${sum}`;
	
}
//=====//BÀI 2=========

//=======BÀI 3=========
function calcFactorial() {
	var n = +document.getElementById("numN-bai3").value
	var factorial = 1;
	for (var i = 1; i <= n; i++) {
		factorial *= i
	}
	// console.log(factorial);
document.getElementById("res3").innerHTML = `${n}! = ${factorial}`;

}
//=====//BÀI 3=========


//=======BÀI 4=========
function createDivTag() {
	var content = ""
	for (var i = 1; i <= 10; i++) {
		if (i % 2 === 0) {
			content = `<div id="divChan${i}">Div chẵn ${i} </div>`
			// console.log(content);
			document.getElementById("res4").innerHTML += content
			document.getElementById(`divChan${i}`).style.backgroundColor = "red"
		} else {
			content = `<div id="divLe${i}">Div lẻ ${i} </div>`
			// console.log(content);
			document.getElementById("res4").innerHTML += content
			document.getElementById(`divLe${i}`).style.backgroundColor = "blue"
		}
	}
}
//=====//BÀI 4=========

