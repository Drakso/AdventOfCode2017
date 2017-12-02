let input = $(".inputNumber");
let answer = $(".answer");

$(".btn").click(()=>{
    let strings = detectAndSaveRows(input.val());
    let jagged = [];
    strings.forEach(element => {
        jagged.unshift(rowInArray(element));
    });
    finalSum = 0;
    jagged.forEach(element => {
        finalSum += Max(element) - Min(element);
    });
    answer.empty();
    answer.append(finalSum);
})
function Max(arr){
    return arr.reduce(function(a, b) {
        return Math.max(a, b);
    });
}

function Min(arr){
    return arr.reduce(function(a, b) {
        return Math.min(a, b);
    });
}

function rowInArray(string){
    let item = "";
    let array = [];
    for(let i = 0; i < string.length; i++){
        if(string[i] != "\t"){
            item += string[i]
        } else {
            array.unshift(parseInt(item));
            item = "";
        }
    }
    array.unshift(parseInt(item));
    return array;
}

function detectAndSaveRows(string){
    let row = "";
    let array = [];
    for(let i = 0; i < string.length; i++){
        if(string[i] != "\n"){
            row += string[i]
        } else {
            array.unshift(row);
            row = "";
        }
    }
    array.unshift(row);
    return array;
}