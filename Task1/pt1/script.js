let input = $(".inputNumber");
let answer = $(".answer");

input.bind('keyup mouseup',()=>{
    answer.empty();
    console.log("Input Changed")
    let number = input.val() + "";
    let last = number[number.length-1];
    let sum = 0;
    for(let i = 0; i < number.length; i++){
        if(number[i] == last){
            sum += parseInt(number[i]);
        }
        last = number[i];
    }
    answer.append(sum);
})
