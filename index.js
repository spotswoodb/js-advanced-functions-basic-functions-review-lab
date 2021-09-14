// Your code here
// implement a function called saturdayFun
// it should return a string like "this Saturday, I want to...!"
// fill in the ... with the activity that's passed in as the first paramater

// function saturdayFun(activity="roller-skate") {
//     return `This Saturday, I want to ${activity}!`;
// }

// let mondayWork= function(work="go to the office") {
//     return `This Monday, I will ${work}.`;
// }

// function wrapAdjective(flair="*") {
//     return function(adj="special") {
//         return `You are ${flair }${adj}${flair}!`;
//     }
// }

// const Calculator = {
//     add: function(a, b) {
//         return a+b;
//     },
//     subtract: function(a, b) {
//         return a-b;
//     },
//     multiply: function(a, b) {
//         return a*b;
//     },
//     divide: function(a, b) {
//         return a/b;
//     }
// }

// function actionApplyer(start, fns) {
//     for(let i = 0; i < fns.length; i++) {
//         start = fns[i](start);
//     }
//     return start;
// }

function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}
const wrapAdjective = function(hey="*") {
    return function(param="special"){
        return `You are ${hey}${param}${hey}!`
    }
}

const Calculator = {

    add: function (a, b){
        return a+b
    },

    subtract: function (a, b){
        return a-b
    },
    
    multiply: function (a, b){
        return a*b
    },

    divide: function (a, b){
        return a/b
    },
}

function actionApplyer(sinteger, functions){
    for (let i = 0; i < functions.length; i++){
        sinteger = functions[i](sinteger)
    }
    return sinteger
}