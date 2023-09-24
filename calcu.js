var temp = "";
var inputBox = document.getElementById("inputBox");

function fun1(v)
{
    temp=temp+v;
    inputBox.value = temp;
}

function calculate()
{
    let result=eval(inputBox.value);
    inputBox.value=result;
}
function clr()
{
    temp='';
    inputBox.value='';
}
function back1()
{
    let c="";
    for(let i=0;i<temp.length-1;i++)
        c=c+temp[i];
    temp=c;
    inputBox.value=c;
}


