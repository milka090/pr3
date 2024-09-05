'use strict'

//1
let a = prompt('Стоимость одного товара');
let b = prompt('Количество денег клиента');
if (a > 0 && b > 0) {
    if (a == b) {
        alert('Покупка совершена');
    } else if (a > b) {
        alert(`для покупки не хватает ${a - b}p.`);
    } else if (a < b) {
        alert(`покупка совершена. ваша сдача ${b - a}p.`);
    }
}else {
    alert('неверный формат данных');
}

//2
let s = prompt('введите число');
if (s > 0) {
    alert(`1`);
}else if (s < 0) {
    alert(`-1`);
}else if (s == 0) {
    alert(`0`);
}else {
    alert(`неверный формат данных`);
}

//3
let d = prompt('введите число');
let e = prompt('введите число');
let result = (d + e < 4) ? 'мало' : 'много';
alert(`${result}`);

//4
let login = prompt('введите login');
let message = login == 'сщтрудник' ? 'привет' :
login == 'директор' ? 'здравствуйте' : login == '' ? 'нет логина' : '';
alert(message);

//5
let loginn = prompt('введите логин');
if (loginn == 'админ') {
    let pass = prompt('введите пароль');
    if (pass == 'я главный') {
        alert('здравствуйте')
    }else if (pass === null || pass === '') {
        alert('отменено')
    }else {
        alert('неверный пароль');
    }
}else if (loginn === null || loginn === ''){
    alert('отменено')
}else {
    alert('я вас незнаю');
}