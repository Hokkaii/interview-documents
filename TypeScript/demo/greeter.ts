// 布尔类型:
const flag: boolean = true;
// 数值类型：
const flag_1: number = 1;
// 字符串类型：
const flag_2: string = "hello";
// enum类型：
enum Sort {
  FIRST,
  SECOND,
  THIRD,
  FORTH,
}
// 数组类型：
const flag_3: Array<number> = [1, 2, 3];
// 元组类型(tuple):
const flag_4: [string, number] = ["hello", 1];
// symbol类型：
const sym = Symbol("hello");
// any类型：
// const dom: any = (document as Document).body;
// null与undefined：
const u: undefined = undefined;
const n: null = null;
// Unknown 类型，所有类型都可以被归为unknown但unknown类型只能被赋值给any类型和unknown类型本身,any啥都能分配和被分配
let value: unknown = "str";
value = 1;
value = true;
let a: boolean;
let b: any;
// a = value; //报错
b = value;
// void 类型：函数无返回值
function hello(name: string): void {}
// never类型：
function neverReach(): never {
  throw new Error("an error");
}
function neverReach_1(): never {
  while (true) {
    console.log("abc");
  }
}
// 联合类型
type Direction = "up" | "down";
// 类型断言
let someValue: any = "123456";
let strLength: number = (someValue as string).length;
// 非空断言
let o: null | undefined | string;
// o.toString(); // ok
// o.toString(); // error
// console.log(o!.toString())
// 交叉类型
type Flag1 = { x: number };
type Flag2 = Flag1 & { x: string }; //此时x被收集为never类型
// 类型保护
function isObject(value: unknown): value is object {
  return typeof value === "object" && value !== null;
}

function fn(x: string | object) {
  if (isObject(x)) {
    // ....
  } else {
    // .....
  }
}
// 函数参数
// function print(name: string = "100", age?: number): void {
//   console.log(name, age);
// }
// print("hahaha");

// 类
class Person {
  private name: string; //定义实例的属性，默认省略public修饰符
  age: number;
  constructor(name: string, age: number) {
    //构造函数
    this.name = name;
    this.age = age;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
}
class Student extends Person {
  no: number;
  constructor(name: string, age: number, no: number) {
    super(name, age);
    this.no = no;
    console.log(this.age);
  }
  getNo(): number {
    return this.no;
  }
}
let s1 = new Student("hello", 10, 1);
