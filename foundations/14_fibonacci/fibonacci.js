const fibonacci = function(num) {
    let prev = 1;
    let curr = 2;
    let index = 0;

    if(typeof num === "string"){
        index = parseInt(num);
    } else {
        index = num;
    }


    if(index < 0){
        return "OOPS";
    } else if(index === 0){
        return 0;
    }

    if(index === 1){
        return 1;
    } else if(index === 2){
        return 1;
    } 

    for(let i = 0; i < index - 3; i++){
        temp = curr;
        curr += prev;
        prev = temp;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
