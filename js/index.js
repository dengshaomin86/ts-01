"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('hello 1111');
var a = '222';
console.log(a);
// array
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// tuple 元组类型
var arr3 = [2, '123'];
// enum 枚举类型
var pay_status;
(function (pay_status) {
    pay_status[pay_status["success"] = 0] = "success";
    pay_status[pay_status["fail"] = 1] = "fail";
    pay_status[pay_status["cancel"] = 2] = "cancel";
})(pay_status || (pay_status = {}));
var pay_status2;
(function (pay_status2) {
    pay_status2[pay_status2["success"] = 111] = "success";
    pay_status2[pay_status2["fail"] = 114] = "fail";
    pay_status2[pay_status2["cancel"] = 115] = "cancel";
})(pay_status2 || (pay_status2 = {}));
var status1 = pay_status2.cancel;
console.log(status1);
// any 任意类型
var str = '123';
str = 111;
var dom = document.getElementById('aaa');
if (dom)
    dom.style.color = 'red';
// undefined
var num1;
num1 = 123;
// void 没有任何类型
function run1() {
    // 没有返回值
    console.log('run1');
}
function run2() {
    console.log('run2');
    return 123;
}
// never类型表示的是那些永不存在的值的类型
// let err: never;
// err = (() => {
//     throw new Error('error')
// })();
/**
 * class 类
 * 类属性修饰符，默认public
 * public - 共有，在类里面、子类、类外部都可以访问
 * protected - 保护，在类里面、子类可以访问，类外部无法访问
 * private - 私有，在类里面可以访问，子类、类外部无法访问
 * 继承extends/super
 * 多态：父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现
 */
var Person = /** @class */ (function () {
    /**
     * 构造函数，实例化类的时候触发的方法
     */
    function Person(name) {
        this.age = 20;
        this.name = name;
        this.age = 30;
    }
    Person.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8"; // 模板字符串
    };
    Person.eat = function () {
        return "Person\u5728\u5403" + this.things;
    };
    Person.things = 'rice'; // 静态属性
    return Person;
}());
var tsperson1 = new Person('Peter');
console.log(tsperson1.run());
console.log(tsperson1.age);
console.log(Person.eat());
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(name) {
        return _super.call(this, name) || this;
    }
    Animal.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8222";
    };
    Animal.prototype.work = function () {
        return this.name + "\u5728\u5DE5\u4F5C";
    };
    return Animal;
}(Person));
var tsanimal1 = new Animal('dog');
console.log(tsanimal1.run());
console.log(tsanimal1.work());
/**
 * abstract 抽象类
 * 定义抽象类、抽象方法，他是提供子类继承的基类，不能直接实例化，抽象方法只能出现在抽象类里边
 * 抽象类中的抽象方法不包含具体实现，必须在派生类中实现（类似多态）
 */
var Plant = /** @class */ (function () {
    function Plant(name) {
        this.name = name;
    }
    return Plant;
}());
var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree(name) {
        return _super.call(this, name) || this;
    }
    Tree.prototype.run = function () {
        return this.name + "\u5728\u8FD0\u52A8";
    };
    return Tree;
}(Plant));
var tree1 = new Tree('tree1');
console.log(tree1.run());
function printName(name) {
    console.log("" + (name.firstName + ' ' + name.secondName));
}
printName({ firstName: 'Peter', secondName: 'W.L' });
function http(opts) {
    var xhr = new XMLHttpRequest();
    xhr.open(opts.type, opts.url);
    xhr.send(opts.data);
    xhr.onreadystatechange = function (result) {
        // console.log(result);
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('http success');
        }
    };
}
http({
    type: 'get',
    url: 'www.baidu.com',
    data: {},
    dataType: 'json',
});
var md5 = function (k, val) {
    return k + val;
};
console.log(md5('123', '456'));
var userArr1 = ['peter', 'david'];
var user1 = { name: 'peter' };
var CoffeeCat = /** @class */ (function () {
    function CoffeeCat(name) {
        this.name = name;
    }
    CoffeeCat.prototype.do = function (str) {
        console.log(this.name + " is " + str);
    };
    return CoffeeCat;
}());
var cat1 = new CoffeeCat('cat1');
cat1.do('eat fish');
var DogClass = /** @class */ (function () {
    function DogClass(name) {
        this.name = name;
    }
    DogClass.prototype.do = function (str) {
    };
    DogClass.prototype.play = function (str) {
    };
    return DogClass;
}());
/**
 * 泛型：任意大写字母表示
 * 支持不特定类型
 * 传入的类型和返回的类型一致
 * 解决类、接口、方法的复用性，以及对不特定数据类型的支持，保留类型校验
 */
/*T表示泛型，具体什么类型是调用这个方法的时候决定的*/
function getData(value) {
    return value;
}
console.log(getData('123'));
console.log(getData(123));
/**
 * 泛型类
 */
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (value) {
        this.list.push(value);
    };
    MinClass.prototype.min = function () {
        var min = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (min > this.list[i])
                min = this.list[i];
        }
        return min;
    };
    return MinClass;
}());
var m1 = new MinClass();
m1.add(3);
m1.add(33);
m1.add(2);
m1.add(22);
console.log(m1.min());
var m2 = new MinClass();
m2.add('c');
m2.add('cd');
m2.add('b');
m2.add('gg');
console.log(m2.min());
var getInfo = function (val) {
    return val;
};
console.log(getInfo('123'));
console.log(getInfo(123));
function getName(value) {
    return value;
}
var getNameFn = getName;
console.log(getNameFn('peter'));
console.log('---------------------test----------------------');
/**
 * test
 */
var Aa = /** @class */ (function () {
    function Aa(name) {
        this.name = 'aa';
        this.name = name;
    }
    return Aa;
}());
var a1 = new Aa('a1');
var a2 = new Aa('a2');
console.log(a1);
console.log(a2);
