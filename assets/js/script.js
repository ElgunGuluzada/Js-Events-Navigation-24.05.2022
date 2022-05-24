let box = document.getElementById("box")
let marginX = 0;
let marginY = 0;

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37:
            marginX = marginX - 50;
            box.style.background = "red"
            box.style.marginLeft = `${marginX}px`
            break;
        case 38:
            marginY = marginY - 50;
            box.style.background = "blue"
            box.style.marginTop = `${marginY}px`
            break;
        case 39:
            marginX = marginX + 50;
            box.style.background = "green"
            box.style.marginLeft = `${marginX}px`
            break;
        case 40:
            marginY = marginY + 50;
            box.style.background = "yellow"
            box.style.marginTop = `${marginY}px`
            break;
    }
});