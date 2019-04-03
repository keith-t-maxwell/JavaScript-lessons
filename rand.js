 namber = Math.floor(Math.random() * 200); 
 
 a = prompt('Первый игрок, введите любое число до 200:'); 
 b = prompt('Второй игрок, введите любое число до 200:');
 
 function NEAR(na,nb) {
	 var a,b,max,min,namber,na,nb; 
	 maxa = Math.max(namber,a);
	 maxb = Math.max(namber,b);
	 mina = Math.min(namber,a);
	 mina = Math.min(namber,b);
	 na = maxa - mina; //разница между макс-мин пары а-число 
	 nb = maxb - minb; //разница между макс-мин пары б-число
	 minn = Math.min(na,nb); //минимальный результат пред. раунда
	 maxn = Math.max(na,nb); //максимальный результат пред. раунда
	 if(na < nb) {
		 alert('Первый игрок выиграл, загаданное число - ' + namber + '');
	 } 
	 if(nb < na) {
		 alert('Второй игрок выиграл, загаданное число - ' + namber + '');
	 } 
	 
 } 
 
 
	 //a = Number(a); 
	 //b = Number(b);