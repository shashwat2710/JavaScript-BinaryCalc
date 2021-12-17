const res = document.getElementById("res");
let operand1 = operator = operand2 = "";

function add(value){
    if(operator){
        operand2 +=value;
    }
    else{
        operand1 +=value;
    }
    renderresult();
}
function clear(){
    operand1 = operator = operand2 = "";
    renderresult();
}
function eval(){
    operand2=parseInt(operand2,2);
    operand1=parseInt(operand1,2);
    switch(operator){
        case '+':
            operand1 +=operand2;
            break;
        case '-':
            operand1 -=operand2;
            break;
        case '*':
            operand1 *=operand2;
            break;
        case '/':
            operand1 /=operand2;
            break;
    }
    operand1 = parseInt(operand1).toString(2);
    operand2 = operator = "";
    renderresult();

}
function assignoperator(val){
    operator = val;
    renderresult();
}

function renderresult(){
    res.innerHTML=operand1 + operator + operand2
}