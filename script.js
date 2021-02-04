'use strict';

const isNumber = function(n) {
    return !isNaN(parseFloat(n) && isFinite(n));
};


function getNumber() {
    let count = 10;
    let numberBot = Math.floor(Math.random() * 100);
    console.log(`Загаданное число: ${numberBot}`);

    function getNumberQuestion (number) {
        if (count > 0) {
            number = prompt('Угадай число от 1 до 100');
            if (number === null) {
                alert('Игра окончена');
                return;
            } else if (!isNumber(number) || number === '') {
                alert('Введи число!');
                getNumberQuestion();
            } else if (+number > numberBot) {
                count--;
                alert(`Загаданное число меньше, осталось попыток ${count}`);
                getNumberQuestion();
            } else if (+number < numberBot) {
                count--;
                alert(`Загаданное число больше, осталось попыток ${count}`);
                getNumberQuestion();
            } else if (+number === numberBot) {
                if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                    count = 2;
                    getNumber();
                }
            }
        } else {
            let tryAgain = confirm('Попытки закончились, хотите сыграть ещё?');
            if (tryAgain === true) {
                getNumber();
            } else {
                return;
            }
        }
    }
    getNumberQuestion();
}

getNumber();