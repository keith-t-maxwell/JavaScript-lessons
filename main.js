lang = prompt('Дни недели (выберите язык)');
switch (lang) {
	
	case 'ru':
		alert('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
	break; 
	case 'en':
		alert('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'); 
	break;
} 

lang = prompt('Дни недели (выберите язык)'); 
lang = String(lang); 

if(lang='ru') { 
	alert('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} 

if(lang='en') { 
	alert('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
} 

