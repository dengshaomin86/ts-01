console.log('hello 1111')
let a: string = '222';
console.log(a);

// array
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// tuple 元组类型
let arr3: [number, string] = [2, '123'];

// enum 枚举类型
enum pay_status {success, fail, cancel}

enum pay_status2 {success = 111, fail = 114, cancel}

let status1: pay_status2 = pay_status2.cancel;
console.log(status1);

// any 任意类型
let str: any = '123';
str = 111;
let dom: any = document.getElementById('aaa');
if (dom) dom.style.color = 'red';

// undefined
let num1: number | undefined | null;
num1 = 123;

// void 没有任何类型
function run1(): void {
  // 没有返回值
  console.log('run1');
}

function run2(): number {
  console.log('run2');
  return 123
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
class Person {
  name: string; // 属性，前面省略public关键字
  public age: number = 20;

  /**
   * 构造函数，实例化类的时候触发的方法
   */
  constructor(name: string) {
    this.name = name;
    this.age = 30;
  }

  run(): string {  /*实例方法*/
    return `${this.name}在运动` // 模板字符串
  }

  static things: string = 'rice'; // 静态属性

  static eat(): string { /*静态方法*/
    return `Person在吃${this.things}`
  }
}

let tsperson1 = new Person('Peter');
console.log(tsperson1.run());
console.log(tsperson1.age);
console.log(Person.eat());

class Animal extends Person {
  sex: string;

  constructor(name: string) {
    super(name); // 初始化父类的构造函数
  }

  run(): string {
    return `${this.name}在运动222`
  }

  work(): string {
    return `${this.name}在工作`
  }

}

let tsanimal1 = new Animal('dog');
console.log(tsanimal1.run());
console.log(tsanimal1.work());

/**
 * abstract 抽象类
 * 定义抽象类、抽象方法，他是提供子类继承的基类，不能直接实例化，抽象方法只能出现在抽象类里边
 * 抽象类中的抽象方法不包含具体实现，必须在派生类中实现（类似多态）
 */

abstract class Plant {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract run(): string;
}

class Tree extends Plant {
  constructor(name: string) {
    super(name);
  }

  run(): string {
    return `${this.name}在运动`
  }
}

let tree1 = new Tree('tree1');
console.log(tree1.run());

/**
 * interface 接口
 * 行为和动作的规范，对批量方法进行约束
 */

interface fullName {
  firstName: string;
  secondName?: string; // ? 表示可选属性
}

function printName(name: fullName): void {
  console.log(`${name.firstName + ' ' + name.secondName}`);
}

printName({firstName: 'Peter', secondName: 'W.L'});


interface httpOpts {
  type: string;
  url: string;
  data?: object;
  dataType: string;
}

function http(opts: httpOpts) {
  let xhr = new XMLHttpRequest();
  xhr.open(opts.type, opts.url);
  xhr.send(opts.data);
  xhr.onreadystatechange = function (result) {
    // console.log(result);
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('http success');
    }
  }
}

http({
  type: 'get',
  url: 'www.baidu.com',
  data: {},
  dataType: 'json',
});

/*函数类型接口*/
interface encrypt {
  (key: string, value: string): string
}

let md5: encrypt = function (k: string, val: string): string {
  return k + val
};

console.log(md5('123', '456'));

/**
 * 可索引接口
 * 数组、对象的约束
 */

interface UserArr {
  [index: number]: string
}

let userArr1: UserArr = ['peter', 'david'];

interface UserObj {
  [index: string]: string
}

let user1: UserObj = {name: 'peter'};

/**
 * 类类型接口
 * 对类的约束、和抽象类有点相似
 */

interface Cat {
  name: string;

  do(str: string): void;
}

class CoffeeCat implements Cat {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  do(str: string): void {
    console.log(`${this.name} is ${str}`);
  }
}

let cat1 = new CoffeeCat('cat1');
cat1.do('eat fish');


/**
 * 接口拓展
 * 接口可以继承接口
 */

interface Dog extends Cat {
  play(str: string): void;
}

class DogClass implements Dog {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  do(str: string): void {

  }

  play(str: string): void {

  }
}


/**
 * 泛型：任意大写字母表示
 * 支持不特定类型
 * 传入的类型和返回的类型一致
 * 解决类、接口、方法的复用性，以及对不特定数据类型的支持，保留类型校验
 */

/*T表示泛型，具体什么类型是调用这个方法的时候决定的*/
function getData<T>(value: T): T {
  return value
}

console.log(getData<string>('123'));
console.log(getData<number>(123));


/**
 * 泛型类
 */

class MinClass<T> {
  list: T[] = [];

  add(value: T): void {
    this.list.push(value);
  }

  min(): T {
    let min = this.list[0];
    for (let i = 0; i < this.list.length; i++) {
      if (min > this.list[i]) min = this.list[i];
    }
    return min
  }
}

let m1 = new MinClass<number>();
m1.add(3);
m1.add(33);
m1.add(2);
m1.add(22);
console.log(m1.min());

let m2 = new MinClass<string>();
m2.add('c');
m2.add('cd');
m2.add('b');
m2.add('gg');
console.log(m2.min());


/**
 * 泛型接口
 */

interface Opts {
  <T>(value: T): T;
}

let getInfo: Opts = function <T>(val: T): T {
  return val
};

console.log(getInfo<string>('123'));
console.log(getInfo<number>(123));

interface NameOpts<T> {
  (value: T): T;
}

function getName<T>(value: T): T {
  return value
}

let getNameFn: NameOpts<string> = getName;
console.log(getNameFn('peter'));

console.log('---------------------test----------------------');

/**
 * test
 */
class Aa {
  name: string = 'aa';

  constructor(name: string) {
    this.name = name;
  }
}


let a1 = new Aa('a1');
let a2 = new Aa('a2');
console.log(a1);
console.log(a2);