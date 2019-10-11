var es5color1 = ['red', 'blue', 'yellow', 'green'];
var es5color2 = ['black', 'orange', 'purple'];
var es5rainbow = es5color1.concat(es5color2);

es5rainbow;
//(7) ["red", "blue", "yellow", "green", "black", "orange", "purple"]

//////////////////

let es6color2 = ['black', 'orange', 'purple'];
let es6rainbow = ['red', 'blue', 'yellow', 'green', ...es6color2];

es6rainbow;
//(7) ["red", "blue", "yellow", "green", "black", "orange", "purple"]

//////////////////

let array = ['Sunday', 'hot'];

function today(word1, word2) {
    return `Today is ${word1} and it is so ${word2}!`;
}

today(...array);
//Today is Sunday and it is so hot!