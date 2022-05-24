let mouse = document.getElementById("mouse")
let cont = document.getElementById("cont")
let marginX = 0;
let marginY = 0;
// let width = 100;

document.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 37:
            let bodyLeftRect = document.body.getBoundingClientRect(),
                mouseLeftRect = mouse.getBoundingClientRect(),
                offsetLeft = mouseLeftRect.left - bodyLeftRect.left;
            if (offsetLeft > 0) {
                marginX = marginX - 50;
                mouse.style.marginLeft = `${marginX}px`;
                mouse.style.transform = "rotate(-20deg)";
            }
            else {
                marginX = marginX + 1400;
                mouse.style.marginLeft = `${marginX}px`
                mouse.style.transform = "rotate(-20deg)";
            }

            break;
        case 38:
            // Body-den cixmamasi ucun
            let bodyUpRect = document.body.getBoundingClientRect(),
                mouseUpRect = mouse.getBoundingClientRect(),
                offsetUp = mouseUpRect.top - bodyUpRect.top;

            if (offsetUp > 0) {
                marginY = marginY - 50;
                mouse.style.marginTop = `${marginY}px`
                // width = width - 10;
                // mouse.style.width = `${width}px`
                mouse.style.transform = "rotate(0deg)";
            }
            else {
                marginY = marginY + 600;
                mouse.style.marginTop = `${marginY}px`
                width = 220;
                // width = width + 10;
                // mouse.style.width = `${width}px`
                mouse.style.transform = "rotate(0deg)";
            }
            break;
        case 39:
            let bodyRightRect = document.body.getBoundingClientRect(),
                mouseRightRect = mouse.getBoundingClientRect(),
                offsetRight = mouseRightRect.left - bodyRightRect.left;
            if (offsetRight <= 1350) {
                marginX = marginX + 50;
                mouse.style.marginLeft = `${marginX}px`
                mouse.style.transform = "rotate(20deg)";
            } else {
                marginX = marginX - 1400;
                mouse.style.marginLeft = `${marginX}px`;
                mouse.style.transform = "rotate(20deg)";
            }
            break;
        case 40:
            let bodyDownRect = document.body.getBoundingClientRect(),
                mouseDownRect = mouse.getBoundingClientRect(),
                offsetDown = mouseDownRect.top - bodyDownRect.top;
            if (offsetDown <= 550) {
                marginY = marginY + 50;
                mouse.style.marginTop = `${marginY}px`
                // width = width + 10;
                // mouse.style.width = `${width}px`
                mouse.style.transform = "rotate(0deg)";
            }
            else {
                marginY = marginY - 600;
                mouse.style.marginTop = `${marginY}px`
                width = 100;
                // width = width - 10;
                // mouse.style.width = `${width}px`
                mouse.style.transform = "rotate(0deg)";
            }
            break;
    }
});








