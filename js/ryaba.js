const dataURL = "https://api.myjson.com/bins/jcmhn";
const fields = [
	"var1",
	"var2",
	"var3",
	"var4",
	"var5",
	"var6",
	"speach"
]

function getDict() {
	let obj = {}; // пустой объект, куда будут добавляться имена переменных в качетсве ключей и введённые значения в качестве значений(?)
	fields.forEach(function(field) {
		obj[field] = $("input[name=" + field + "]")[0].value  //obj[field] - ключ, но! почему не в кавычках? зачем плюсы и пробелы в имени инпута?
	});

	return obj;
} //cоздала объект, который состоит из var... в виде ключей и инпутов в качестве значений


function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData, а также спрятала поля и кнопку
 	$.getJSON(dataURL, handleData);  
  	$("form").hide();
	$("#button-fetch").hide();
}



function handleData(data) { //меняет ключи на значения
	let message = "";

	let values = getDict(); //значит ли это, что объект value просто повторяет obj в новом месте?

	data["text"].forEach(function(line) { //data здесь просто строка dataURL? и line о же самое?
		for (key in values) {
			line = line.replace("{" + key + "}", values[key]); //здесь я заменяю ключ
		} //всё же не понимаю эту запись. ЧТо здесь в кавычках? Каждая фигурная скобка или внешние кавычки и внутренние для + ки +,
	

		message = message + line + "<BR>"; //вот это совсем буземие: накой тут кавычки?
	});


	$("#result").html(message); //почему эта штука выводит сообщение для пользователя? 
}

function init() {
	$("#button-fetch").click(handleButton); //вот почему с этой функции всё начинается, а пишется она в конце?
}

$(document).ready(init);
