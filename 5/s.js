$(document).ready(function(){

   $("#accordion1").accordion();
   $("#accordion2").accordion();

});
$(document).ready(function() {
   $("#auto1").autocomplete({source:['Австралия','Австрия','Азербайджан','Аргентина','Афганистан','Бангладеш','Беларусь','Великобритания ','Вьетнам','Греция','Грузия','Дания','Египет','Израиль','Ирак','Иран','Испания ','Италия','Канада','Киргизия','КНР','Куба','Латвия','Литва','Мексика','Молдавия','Монголия','Нигерия','Нидерланды ','Пакистан','Польша','Португалия','Россия','Румыния','Сербия','Словакия','Словения','США','Таджикистан ','Таиланд','Тунис ','Турция','Узбекистан','Украина','Филиппины','Финляндия','Франция','Хорватия','Черногория','Чехия','Швейцария ','Швеция','Эстония','ЮАР','Япония'], minLength:3});
});
$(document).ready(function() {
   $("#el1,#el2,#el3").button();
   $("#group1,#group2").buttonset();
});