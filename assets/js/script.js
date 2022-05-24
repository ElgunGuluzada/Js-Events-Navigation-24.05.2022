let mouse = document.getElementById("mouse")
let mouseStart = document.po
let cont = document.getElementById("cont")
let marginX = 0;
let marginY = 0;
let width = 100;


// Body-den cixmamasi ucun

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37:
            marginX = marginX - 50;
            mouse.style.marginLeft = `${marginX}px`;
            mouse.style.transform = "rotate(-20deg)";
            break;
        case 38:
            let bodyUpRect = document.body.getBoundingClientRect(),
                mouseUpRect = mouse.getBoundingClientRect(),
                offsetUp = mouseUpRect.top - bodyUpRect.top;
            if (offsetUp > 0) {
                marginY = marginY - 50;
                mouse.style.marginTop = `${marginY}px`
                width = width - 10;
                mouse.style.width = `${width}px`
                mouse.style.transform = "rotate(0deg)";
            }
            else {
                marginY = marginY + 600;
                mouse.style.marginTop = `${marginY}px`
                width = 220;
                width = width + 10;
                mouse.style.width = `${width}px`
                mouse.style.transform = "rotate(0deg)";
            }
            break;
        case 39:
            marginX = marginX + 50;
            mouse.style.marginLeft = `${marginX}px`
            mouse.style.transform = "rotate(20deg)";
            break;
        case 40:
            let bodyDownRect = document.body.getBoundingClientRect(),
                mouseDownRect = mouse.getBoundingClientRect(),
                offsetDown = mouseDownRect.top - bodyDownRect.top;
            if (offsetDown <= 550) {
                marginY = marginY + 50;
                mouse.style.marginTop = `${marginY}px`
                width = width + 10;
                mouse.style.width = `${width}px`
                mouse.style.transform = "rotate(0deg)";
            }
            else {
                marginY = marginY - 600;
                mouse.style.marginTop = `${marginY}px`
                width = 100;
                width = width - 10;
                mouse.style.width = `${width}px`
                mouse.style.transform = "rotate(0deg)";
            }
            break;
    }
});







