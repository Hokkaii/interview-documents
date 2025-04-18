define(function (require, exports, module) {
    console.log(exports, module)
    //依赖可以就近书写
    var a = require('until1');
    console.log(a)
    exports.qqq = {
        b: 2
    }
    return 1123456
    // return {
    //     method3: function () {
    //         console.log(3)
    //     },
    //     method4: function () {
    //         console.log(4)
    //     }
    // }

});