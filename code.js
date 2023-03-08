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