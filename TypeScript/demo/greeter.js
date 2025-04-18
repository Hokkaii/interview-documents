var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 布尔类型:
var flag = true;
// 数值类型：
var flag_1 = 1;
// 字符串类型：
var flag_2 = "hello";
// enum类型：
var Sort;
(function (Sort) {
    Sort[Sort["FIRST"] = 0] = "FIRST";
    Sort[Sort["SECOND"] = 1] = "SECOND";
    Sort[Sort["THIRD"] = 2] = "THIRD";
    Sort[Sort["FORTH"] = 3] = "FORTH";
})(Sort || (Sort = {}));
// 数组类型：
var flag_3 = [1, 2, 3];
// 元组类型(tuple):
var flag_4 = ["hello", 1];
// symbol类型：
var sym = Symbol("hello");
// any类型：
// const dom: any = (document as Document).body;
// null与undefined：
var u = undefined;
var n = null;
// Unknown 类型，所有类型都可以被归为unknown但unknown类型只能被赋值给any类型和unknown类型本身,any啥都能分配和被分配
var value = "str";
value = 1;
value = true;
var a;
var b;
// a = value; //报错
b = value;
// void 类型：函数无返回值
function hello(name) { }
// never类型：
function neverReach() {
    throw new Error("an error");
}
function neverReach_1() {
    while (true) {
        console.log("abc");
    }
}
// 类型断言
var someValue = "123456";
var strLength = someValue.length;
// 非空断言
var o;
// 类型保护
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bird;
}(Animal));
console.log(Bird);
