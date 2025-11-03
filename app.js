// page 1 has been clicked
window.addEventListener("click", function() {
    document.getElementById('entireBody1').addEventListener('click', openPage2);
});

function openPage2() {
    window.location.href = "page2.html";
}



// page 2 has been clicked
window.addEventListener("click", function(){
    document.getElementById('entireBody2').addEventListener('click', openPage3);
});

function openPage3() {
    window.location.href = "page3.html";
}

// page 3, button 1 has been clicked
window.addEventListener("click", function() {
    document.getElementById('butt1').addEventListener('click', openPage4);
})

function openPage4() {
    window.location.href = "page4.html"
}




// page 4, submit has been clicked
window.addEventListener("click", function() {
    document.getElementById('submit').addEventListener('click', openPage5);
})

function openPage5() {
    window.location.href = "page5.html"
}

// var fs = require('fs')

// fs.writeFile('userData.txt', 'utf8')

// console.log("Hello World");






