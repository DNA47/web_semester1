//задача 1.
let SpeedInKH = 36;
let SpeedInMS = 20;
console.log(`${SpeedInKH} км/ч соответствует ${SpeedInKH / 3.6} м/с`);
console.log(`${SpeedInMS} м/с соответствует ${SpeedInMS * 3.6} м/с`);

//задача 2.
let a = 3, b = 5, c = 4;
if ((a < b + c) & (b < a + c) & (c < a + b) & (a>0) & (b>0) & (c>0)) {
  console.log('Треугольник существует.');
  let p = a + b + c;
  let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  console.log(`Периметр = ${p}`);
  console.log(`Площадь = ${s}`);
  console.log(`Соотношение = ${p / s}`);
} else {
  console.log('Треугольника не существует.');
}

//задача 3.
let value = prompt('Введите значение верхней границы:');
try {
  for (let i = 0; i <= value; i++) {
    if ((i % 5 === 0) & (i !== 0)) {
      console.log(`${i} Fizz Buzz`);
    } else if (i % 2 !== 0) {
      console.log(`${i} Fizz`);
    } else {
      console.log(`${i} Buzz`);
    }
  }
} catch (e) {
  console.log('error');
}

//задача 4.
let ChristmasTree = '',
  borderValue = 13;
for (let i = 0; i <= borderValue; i++) {
  if (i == borderValue) {
    ChristmasTree += '||';
  } else if (i % 2 !== 0) {
    ChristmasTree += '*'.repeat(i) + '\n';
  } else {
    ChristmasTree += '#'.repeat(i) + '\n';
  }
}
console.log(ChristmasTree);

//задача 5.
let mistery = Math.floor(Math.random() * 100);
console.log(mistery);
while (true) {
  guess = prompt('Введите число:');
  if (guess < mistery) {
    console.log('ваше число больше');
  } else if (guess > mistery) {
    console.log('ваше число меньше');
  } else {
    console.log('угадано');
    break;
  }
}

//задача 6.
let n = 12,
  x = 7,
  y = 5;
console.log(`n = ${n}, x=${x},y=${y} => ${Boolean((n % x === 0) & (n % y === 0))}`);

//задача 7.
let month = 3;
console.log(`месяц ${month} => ${Math.floor((month + 2) / 3)} квартал`);
