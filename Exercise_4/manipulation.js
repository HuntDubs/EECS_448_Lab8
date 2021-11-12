function borderChange(){
    let rValue = document.getElementById("borderRvalue").value;
    let gValue = document.getElementById("borderGvalue").value;
    let bValue = document.getElementById("borderBvalue").value;
    let wValue = document.getElementById("borderWvalue").value;

    if (checkValue(rValue) && checkValue(gValue) && checkValue(bValue)){
        let border = document.getElementById("para");
        border.style.borderColor = "rgb("+rValue+","+gValue+","+bValue+")";
        border.style.borderWidth = wValue;
    } else {
        alert("One of the inputs was not valid.");
    }
    
}

function backgroundChange(){
    let rValue = document.getElementById("backgroundRvalue").value;
    let gValue = document.getElementById("backgroundGvalue").value;
    let bValue = document.getElementById("backgroundBvalue").value;

    if (checkValue(rValue) && checkValue(gValue) && checkValue(bValue)){
        let border = document.getElementById("para");
        border.style.backgroundColor = "rgb("+rValue+","+gValue+","+bValue+")";
    } else {
        alert("One of the inputs was not valid.");
    }
}

function checkValue(value){
    if(value > 255 || value < 0 || value === ""){
        return false;
    } else {
        return true;
    }
}