// let circle = document.getElementById("circle");
// console.log(circle);
// let viewPortHt = window.innerHeight;
// console.log(viewPortHt);
// let viewPortWt = window.innerWidth;
// console.log(viewPortWt);
// let circleAttr = circle.getBoundingClientRect();
// console.log(circleAttr);

// let guyLeft = 0;
// let guyTop = 0;

// function moveWithKeys(e){
// if (e.keyCode == 115){
// guyTop += 2;
// circle.style.top = guyTop + 'px';
// }
// }
// document.onkeydown = moveWithKeys;



// window.addEventListener("keypress", function(event){
//  console.log(event);
//     })


// w = 87
    // a = 65
    // s = 83
    // d = 68
    // left arrow	37
    // up arrow	    38
    // right arrow	39
    // down arrow	40

let circle = document.getElementById('circle');
console.log(circle);
let circleLeft = 0;
let circleTop = 0;

function moveWithKeys(e){
    if(e.keyCode == 68 || e.keyCode == 39){
        circleLeft += 50;
        circle.style.left = circleLeft + 'px'; 
    }
    if(e.keyCode == 65 || e.keyCode == 37){ 
        circleLeft -= 50;
        circle.style.left = circleLeft + 'px'; 
    }
    if(e.keyCode == 87 || e.keyCode == 38){
        circleTop -= 50;
        circle.style.top = circleTop + 'px'; 
    }
    if(e.keyCode == 83 || e.keyCode == 40){
        circleTop += 50;
        circle.style.top = circleTop + 'px'; 
    }
} 
document.onkeydown = moveWithKeys;


