// Завдання 1.

// Реалізуйте клас Worker(Працівник), який буде мати такі властивості: firstName(ім'я), secondName (прізвище), rate(ставка за день роботи), days(кількість відпрацьованих днів). Також клас повинен мати метод getSalary(), який буде виводити зарплату працівника. Зарплата - це множення ставки rate на кількість відпрацьованих днів days.

// Ось так повинен працювати наш клас:

// const worker = new Worker('Ivan', 'Ivanov', 10, 31);
// console.log(worker.name); // виведе 'Ivan'
// console.log(worker.surname); //виведе 'Ivanov'
// console.log(worker.rate); //виведе 10
// console.log(worker.days); //виведе 31
// console.log(worker.getSalary()); //виведе 310 - тобто 10*31

// За допомогою нашого класу створіть двох робочих і знайдіть суму їх зарплат. Використовує cучасний class.

// class Worker {
//   constructor(firstName, secondName, rate, days) {
//     this.name = firstName;
//     this.surname = secondName;
//     this.rate = rate;
//     this.days = days;
//   }
//   get salary() {
//     return console.log(
//       `salary of ${this.name} ${this.surname} = ${this.getSalary() + " $"} `
//     );
//   }
//   getSalary() {
//     return this.rate * this.days;
//   }
// }

// class NewWorker extends Worker{
//     constructor(){
//         super();
//     }
// }

// const worker = new Worker("Ivan", "Ivanov", 10, 31);
// worker.salary;

// const nextWorker = new Worker("Petro", "Petrov", 15, 25);
// nextWorker.salary;



// Завдання 2.

// Реалізуйте клас MyString, який матиме наступні методи: метод reverse(), який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(), який параметром приймає рядок, а повертає цю ж рядок, зробивши її першу букву заголовної та метод ucWords(), який приймає рядок і робить капіталізації першої літери кожного слова цього рядка. Використовує cучасний class.

// Наш клас повинен працювати так:

// const str = new MyString();

// console.log(str.reverse('IVAN')); //виведе 'NAVI'
// console.log(str.ucFirst('arsenal')); //виведе 'Arsenal'
// console.log(str.ucWords('arsenal arsenal arsenal')); //виведе 'Arsenal Arsenal Arsenal';

class MyString{
    reverse(str){
        return str.split('').reverse().join('');
    }
    ucFirst(str){
        str = str.toLowerCase();
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str){
        const arr = str.split(' ');
        const newArr = arr.map(el=> el[0].toUpperCase()+ el.slice(1).toLowerCase())
        return newArr.join(' ')
    }
}

const str = new MyString();
console.log(str.reverse('IVAN'));
console.log(str.ucFirst('arsenal'));
console.log(str.ucFirst('arSenAl'));
console.log(str.ucWords('arsenal arsenal arsenal'))
console.log(str.ucWords('arSenAl arsenal arSenAl'))


// Завдання 3.

// Напишіть функцію CoffeeMake, яка буде мати в 2 методи: on(),off(). Далі напишіть ще методи для 3х типів кавоварок: капельна, ріжкова, каво-машина, які будуть наслідувати базовий функціонал CoffeeMake, а також мати власний. Використовує cучасний class.

class CoffeeMake{
    on(){
        console.log('coffee machine on')
    }
    off(){
        console.log('coffee machine off')
    }
}
const coffe = new CoffeeMake();
coffe.on();
coffe.off();

class Drip extends CoffeeMake{
    on(){
        super.on();
    }
    off(){
        super.off();
    }
    some(){
        console.log('some prototype');
    }
}
const coffe1 = new Drip();
coffe1.on();
coffe1.off();
coffe1.some();

class Rizhkova extends CoffeeMake {
    on(){
        super.on();
    }
    off(){
        super.off();
    }
    someNew(){
        console.log('someNew prototype');
    }
}
const coffe2 = new Rizhkova();
coffe2.on();
coffe2.off();
coffe2.someNew();

class CoffeeMachine extends CoffeeMake {
    on(){
        super.on();
    }
    off(){
        super.off();
    }
    newproto(){
        console.log('new prototype');
    }
}
const coffe3 = new CoffeeMachine();
coffe3.on();
coffe3.off();
coffe3.newproto();