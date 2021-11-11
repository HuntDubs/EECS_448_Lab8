function slide(direction){
    let path = document.getElementById("imageID");
    let headshots = [];
    for (let x =1; x<=5; x++){
        headshots[x] = "headshot"+x;
    }
    let currentPic = 1;
    path.src = "images/"+headshots[currentPic];
    if (direction == 0){
        currentPic = changePic(currentPic, direction);
        path.src="images/"+headshots[currentPic]
    } else if (direction == 1){
        
    }
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