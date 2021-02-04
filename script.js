'use strict';

const isNumber = function(n) {
    return !isNaN(parseFloat(n) && isFinite(n));
};

const numberUser = 50;

function getNumberQuestion(number) {
    number = prompt('Угадай число от 1 до 100');

    if (number === null) {
        alert('Игра окончена');
        return;
    } else if (!isNumber(number) || number === '') {
        alert('Введи число!');
        getNumberQuestion();
    } else if (+number > numberUser) {
        alert('Загаданное число меньше');
        getNumberQuestion();
    } else if (+number < numberUser) {
        alert('Загаданное число больше');
        getNumberQuestion();
    } else if (+number === numberUser) {
        alert('Поздравляю, Вы угадали!!!');
        return;
    }
};

getNumberQuestion(numberUser);
