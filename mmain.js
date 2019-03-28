function RuEnWeekArr() {
	lan = prompt('Введите язык');
	
	var arr = {
		'ru':['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
		'en':['Mn','Ts','Wd','Th','Fr','St','Sn']
	}; 
	alert(arr[lan]);
} 


function confirr() {
	result = confirm('Вы студент?');
	
	if (result == true) {
		alert('Поздравляем, у нас есть для вас хорошее предложение!');
	}else{
		alert('Извините, ничем помочь не можем');
	}
} 


function PrintInt() {
	col = prompt('Сколько чисел вывести?');
	col = Number(col);
	var i = 1;
	while (i <= col){
		document.write(i + '<br>');
		i++;
	}
} 


function ForFun() {
	
	
}