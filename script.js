let outputScreen = document.getElementById("outputScreen");

function display(num){
    outputScreen.value += num;
}
function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(error){
        alert("Invalid")

    }

}
function Clear(){
    outputScreen.value = "";
}

function Delete(){
    outputScreen.value = outputScreen.value.slice(0, -1)
}