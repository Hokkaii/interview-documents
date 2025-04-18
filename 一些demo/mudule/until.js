// export let obj = {
//     a: 1
// }
// setTimeout(() => {
//     console.log(obj)
// }, 5000)

define(function (require, exports, module) {
    console.log(exports, module)
    //依赖可以就近书写
    var a = require('until1');
    console.log(a)
    exports.www = {
        a: 1
    }
    return {
        method1: function () {
            console.log(1)
        },
        method2: function () {
            console.log(2)
        }
    }

});