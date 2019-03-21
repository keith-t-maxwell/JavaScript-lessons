
namber = Math.floor(Math.random() * 10); 
alert(String(namber)); 

x = prompt('Угадайте число от 1 до 10'); 
x = Number(x); 

if (x == namber) { 
	alert('Вы выиграли'); 
} 

else{ 
	alert('Вы проиграли. Попробуйте ещё раз'); 
} 
 
a = prompt('Введите 1-е число'); 
b = prompt('Введите 2-е число'); 

a = Number(a); 
b = Number(b); 

function SUM(a,b) {
	var a,b,sum;
	sum = a + b; 
	alert(String(sum)); 
} 

function SUB(a,b) {
	var a,b,sub;
	sub = a - b; 
	alert(String(sub)); 
} 

function MULT(a,b) {
	var a,b,mult;
	mult = a * b; 
	alert(String(mult)); 
} 

function DIV(a,b) {
	var a,b,div;
	div = a / b; 
	alert(String(div)); 
} 