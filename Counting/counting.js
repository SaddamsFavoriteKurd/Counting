var num=0;
function press(n){
    num=num+n;
    document.getElementById("MyInputs").value=num;
}
function reset(){
    num=0;
    document.getElementById("MyInputs").value=num;
}