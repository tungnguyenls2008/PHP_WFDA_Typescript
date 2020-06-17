use strict;
exports.__esModule = true;
require("./scss/styles.scss");
tslint:enable
/**
 * Variable and Data type
 */
// tslint:disable
/**
 * var vs let/const
 */
function main1() {
    console.log("START");
    var lang = "vi";
    var target = "en-us";
    console.log("inside block");
    console.log(target);
    console.log(lang);
    console.log(target);
}
function main2() {
    var x = 5;
    console.log(x);
    x = 10;
    console.log(x);
    var y1 = 55;
    console.log(y1);
    var y2 = 100;
    console.log(y2);
}
function main3() {
    var x = 5;
    console.log(x);
    var y = 10;
    console.log(y);
}
/**
 * Data types
 */
function main4() {
    var message;
    var total = 100;
    var isProduction = true;
    var prices = [120, 88, 60];
    var languages = ['vi', 'en-us'];
    var now = new Date();
    var unknown;
    var Direction;
    (function (Direction) {
        Direction[Direction["UP"] = 0] = "UP";
        Direction[Direction["DOWN"] = 1] = "DOWN";
        Direction[Direction["LEFT"] = 2] = "LEFT";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
    })(Direction || (Direction = {}));
    function log(msg) {
        console.log(msg);
    }
    isProduction = false;
    unknown = Direction.UP;
    unknown = 'changed';
    var post = {
        id: "", title: ""
    };
    function getPost(postId) {
        // do something to retrieve post
        return {
            id: postId,
            title: 'Post Title',
            body: 'Post Body',
            extra: 'data'
        };
    }
}
function main() { }

main();
main1();
main2();
main3();
main4();
