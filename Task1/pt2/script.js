let input = $(".inputNumber");
let answer = $(".answer");

input.bind('keyup mouseup',()=>{
    answer.empty();
    console.log("Input Changed");
    let number = input.val() + "";
    if(number.length%2 == 0 && number.length >= 4){
        let next = number[number.length/2];
        let compare = number + number;
        let sum = 0;
        for(let i = 0; i < number.length; i++){
            if(compare[i] == next){
                sum += parseInt(number[i]);
            }
            next = compare[i + 1 + number.length/2];
        }
        answer.append(sum);
    }   
    else{
        answer.append("You must only enter more than 4 digit, even numbers!");
    }
})

