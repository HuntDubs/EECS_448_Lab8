let currentPic = 1;

function slide(direction){
    let path = document.getElementById("imageID");
    let headshots = [];

    for (let x =1; x<=5; x++){
        headshots[x] = "headshot"+x;
    }
    currentPic = changePic(currentPic, direction);
    path.src="images/"+headshots[currentPic]+".jpg";
}

function changePic(picNumber, direction){
    if (direction == 0){
        if (picNumber == 1){
            return 5;
        } else {
            return picNumber -1;
        }
    } else if (direction == 1){
        if (picNumber == 5){
            return 1;
        } else {
            return picNumber + 1;
        }
    }
    
}