function number(value){
    document.form1.result.value +=value;
}

function reset(value){
    document.form1.result.value =value;
}

function calculate(){
    document.form1.result.value = eval(document.form1.result.value);
}