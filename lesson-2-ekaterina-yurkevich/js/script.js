// 1)
let a = 4,
    b = 0;

let c = ++a; // c = 5, a = 5
let d = b++; // d = 0, b = 1
console.log('a равно: ', a);
console.log('b равно: ', b);
console.log('c равно: ', c);
console.log('d равно: ', d);

// 2)

let e = 3;
let f = 2;

let x = 1 + (e += 2); // x = 6, e = 5
let y = 1 + (f *= 2); // y = 5, f = 4
console.log('e равно: ', e);
console.log('f равно: ', f);
console.log('x равно: ', x);
console.log('y равно: ', y);

// 3)

let year = prompt('Введите год, чтобы узнать чемпиона Англии по футболу');

if (year < 2011) {
    alert('Статистика еще не велась');
} else if (year === '2011' || year === '2013') {
    alert('Манчестер Юнайтед');
} else if (year === '2012' || year === '2014' || year === '2018' || year === '2019' || year === '2021') {
    alert('Манчестер Сити');
} else if (year === '2015' || year === '2017') {
    alert('Челси');
} else if (year === '2016') {
    alert('Лестер Сити');
} else if (year === '2020') {
    alert('Ливерпуль');
} else if (year === '2022') {
    alert('Сезон еще идет');
} else {
    alert('Все лучшее впереди!');
}

let message = (year < 2015) ? 'Статистика еще не велась' :
    (year === '2011' || year === '2013') ? 'Манчестер Юнайтед' :
    (year === '2012' || year === '2014' || year === '2018' || year === '2019' || year === '2021') ? 'Манчестер Сити' :
    (year === '2015' || year === '2017') ? 'Челси' :
    (year === '2016') ? 'Лестер Сити' :
    (year === '2020') ? 'Ливерпуль' :
    (year === '2022') ? 'Сезон еще идет' : 'Все лучшее впереди!';

alert(message);

// 4)

let login = prompt('Введите логин', '');

if (login === 'Админ') {
    let password = prompt('Введите пароль', '');
    if (password === 'Я главный') {
        alert('Здравствуйте!')
    } else if (password === '' || password === null) {
        alert('Отменено')
    } else alert('Неверный пароль')
} else if (login === '' || login === null) {
    alert('Отменено')
} else alert('Я вас не знаю');

// 5)

for (let i = 7; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    } else if (i === 12) {
        console.log('12. Цикл прерван');
        break;
    }
}

// 6)

let j = 0;

while (j < 5) {
    console.log(`number ${j}!`);
    j++;
}