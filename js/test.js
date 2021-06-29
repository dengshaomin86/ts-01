// 构造函数、原型链
function Person(str) {
    this.name = '张三';
    this.age = 20;
    this.str = str;
    this.run = function () { // 实例方法，必须实例化才能调用
        return this.name + '在运动'
    }
}

Person.test = function () { // 静态方法，直接调用
    return 'person test'
};

console.log(Person.test());

Person.prototype.sex = 'male';
Person.prototype.work = function () {
    return this.name + '在工作'
};

let person1 = new Person('person1-str');
console.log(person1.str);
console.log(person1.name);
console.log(person1.run());
console.log(person1.sex);
console.log(person1.work());
console.log('---------------person1分割线-------------------');

/**
 * 对象冒充继承
 * 对象冒充可以继承构造函数里的属性和方法，但是不能继承原型链上的属性和方法
 */
function Animal(str) {
    Person.call(this, str);
}

let animal1 = new Animal('animal1-str');
console.log(animal1.str);
console.log(animal1.run());
console.log(animal1.sex); // undefined
console.log('---------------animal1分割线-------------------');

/**
 * 原型链继承
 * 可以继承构造函数里的属性和方法，也可以继承原型链上的属性和方法
 * 但是实例化子类的时候没法给父类传参
 */
function Plant(str) {

}

Plant.prototype = new Person(); // 原型链继承

let plant1 = new Plant('plant1-str');
console.log(plant1.str); // undefined
console.log(plant1.run());
console.log(plant1.work());
console.log('---------------plant1分割线-------------------');

/**
 * 原型链+构造函数的组合继承
 */

function Fish(str) {
    Person.call(this, str)
}

Fish.prototype = new Person(); // 或 Fish.prototype=Person.prototype
let fish1 = new Fish('fish1-str');
console.log(fish1.str);
console.log(fish1.run());
console.log(fish1.work());
console.log('---------------fish1分割线-------------------');


/**
 * test
 */

function AAA(name, str) {
    this.name = name || 'Peter';
    this.str = str;
    this.fn = function () {
        console.log('fn');
    }
}

AAA.prototype.age = 11;

let a1 = new AAA();

function BBB(name, str) {
    AAA.call(this, name, str);
}

let b1 = new BBB('b1', 'bbb');
console.log(b1);
console.log(b1.name);
console.log(b1.age);

function CCC() {
    AAA.apply(this, ['ccc', 'str-ccc'])
}

CCC.prototype = new AAA();

let c1 = new CCC();
console.log(c1);
console.log(c1.name);
console.log(c1.age);
console.log(c1.fn());
