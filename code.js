function darkModeToggle() {
    document.getElementById('bgb').classList.toggle('bg-black').toggle('bg-white');
}

function hamburgerToggle() {
    document.getElementById('hamburgerContent').classList.toggle('active');
    document.getElementById('hamburgerLine1').classList.toggle('active');
    document.getElementById('hamburgerLine2').classList.toggle('active');
    document.getElementById('hamburgerLine3').classList.toggle('active');
    document.getElementById('body').classList.toggle('active');
}

addEventListener('resize', function() {
    if (window.innerWidth > 1370) {
        document.getElementById('hamburgerContent').classList.remove('active');
        document.getElementById('hamburgerLine1').classList.remove('active');
        document.getElementById('hamburgerLine2').classList.remove('active');
        document.getElementById('hamburgerLine3').classList.remove('active');
        document.getElementById('body').classList.remove('active');
    }
});


addEventListener('resize', function(){
    if (this.window.innerWidth < 1451){
        document.getElementById('noSpace').classList.remove('space-x-20');
    }
});

addEventListener('resize', function(){
    if (this.window.innerWidth > 1451){
        document.getElementById('noSpace').classList.add('space-x-20');
    }
});

addEventListener('resize', function(){
    if (this.window.innerWidth < 1451){
        document.getElementById('noSpaces').classList.remove('space-x-20');
    }
});

addEventListener('resize', function(){
    if (this.window.innerWidth > 1451){
        document.getElementById('noSpaces').classList.add('space-x-20');
    }
});

    if (this.window.innerWidth < 1451){
        document.getElementById('noSpace').classList.remove('space-x-20');
    }

    if (this.window.innerWidth > 1451){
        document.getElementById('noSpace').classList.add('space-x-20');
    }

    if (this.window.innerWidth < 1451){
        document.getElementById('noSpaces').classList.remove('space-x-20');
    }

    if (this.window.innerWidth > 1451){
        document.getElementById('noSpaces').classList.add('space-x-20');
    }

// document.getElementById('textInput').addEventListener('keypress', function(e) {
    //be be worked on
// });

// const searchBar = document.getElementsByClassName('searchReveal')[0];
// searchBar.style.visibility = "hidden";

// function revealSearch(){
//     const revealButton = document.querySelector(".buttonReveal");
//     revealButton.addEventListener("click", function() {
//         searchBar.style.visibility = "visible";
//             revealButton.style.visibility = "hidden";

//     });
// }

// revealSearch();

