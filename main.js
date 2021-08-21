(function(){
//доброго здравия всем на этой страничке храни вас господь
//объявляем:
let fries = document.querySelector('.fries');//огромную кнопку с картошкой
let sum = document.querySelector('.sum');//счётчик валюты

let increasebyone = document.querySelector('.increasebyone');//кнопку для увеличения количества валюты за клик
let increasebyoneNum = document.querySelector('.increasebyone-num');//количество валюты за клик
let increasebyonePrice = document.querySelector('.increasebyone-price');//цену увеличения количества валюты за клик

let passivegain = document.querySelector('.passivegain');//кнопку для пассивного прироста
let passivegainNum = document.querySelector('.passivegain-num');//счётчик валюты
let passivegainPrice = document.querySelector('.passivegain-price');//счётчик валюты

let sleepingmode = document.querySelector('.sleepingmode');//кнопку для режима сна
let mode2 = 1; //множитель кликам для режима
let sleeping = 1; //множитель пассивному приросту для режима
let mode = false; //переключатель режима

/*
получаем и меняем текстовое содержимое счётчика на его переведённое из строки в число текстовое содержимое + количество валюты за клик[нач=1]
(т. обр клик без улучшений добавляет единицу, клик с первым улучшением - две единицы и т.д.
*/
fries.onclick = function() {
sum.innerText = parseInt(sum.innerText, 10) + mode2 * parseInt(increasebyoneNum.innerText, 10);
}

increasebyone.onclick = function() {
if (parseInt(sum.innerText, 10) >= parseInt(increasebyonePrice.innerText, 10)){ //если текущая сумма >= текущей цене
sum.innerText = parseInt(sum.innerText, 10) - parseInt(increasebyonePrice.innerText, 10); //отнимаем от суммы цeну
increasebyoneNum.innerText = parseInt(increasebyoneNum.innerText, 10) + 1; //добавляем единицу к текущему количеству валюты за клик
increasebyonePrice.innerText = parseInt(increasebyonePrice.innerText, 10) + 100; //добавляем 100 к цене
	}
}

passivegain.onclick = function (){
	
	if (parseInt(sum.innerText, 10) >= parseInt(passivegainPrice.innerText, 10)){ //если текущая сумма >= текущей цене
		sum.innerText = parseInt(sum.innerText, 10) - parseInt(passivegainPrice.innerText, 10); //отнимаем от суммы цeну
		passivegainNum.innerText = parseInt(passivegainNum.innerText, 10) + 1; //добавляем единицу к текущему пассивному приросту
		passivegainPrice.innerText = parseInt(passivegainPrice.innerText, 10) * 2; //умножаем цену на 100
		if (parseInt(passivegainNum.innerText, 10) > 1) clearInterval(interval);
		let interval = setInterval(
		function (){
			sum.innerText = parseInt(sum.innerText, 10) + sleeping * parseInt(passivegainNum.innerText, 10); //добавляем к сумме текущий прирост раз в 5 секунд
			}, 5000);
		
	}
}

sleepingmode.onclick = function (){ //позвольте мне умереть
if (mode) {
	mode = false;
	}
	else {
	mode = true;
	};
if (mode) {
	sleeping = 2;
	mode2 = 0;
	}
	else {
	sleeping = 1;
	mode2 = 1;
	}
}
})()