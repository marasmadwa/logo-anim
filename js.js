var logo = document.querySelectorAll("#e-timer_logo path");

for(var i = 0; i < logo.length; i++){
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}