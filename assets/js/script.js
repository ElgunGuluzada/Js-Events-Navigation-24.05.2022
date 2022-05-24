let mouse = document.getElementById("mouse")
let marginX = 0;
let marginY = 0;
let width = 100;

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37:
            marginX = marginX - 50;
            mouse.style.marginLeft = `${marginX}px`;

            mouse.style.transform = "rotate(-20deg)";

            break;
        case 38:
            marginY = marginY - 50;
            mouse.style.marginTop = `${marginY}px`
            width = width - 10;
            mouse.style.width = `${width}px`
            mouse.style.transform = "rotate(0deg)";
            break;
        case 39:
            marginX = marginX + 50;
            mouse.style.marginLeft = `${marginX}px`
            mouse.style.transform = "rotate(20deg)";
            break;
        case 40:
            marginY = marginY + 50;
            mouse.style.marginTop = `${marginY}px`
            width = width + 10;
            mouse.style.width = `${width}px`
            mouse.style.transform = "rotate(0deg)";

            break;
    }
});