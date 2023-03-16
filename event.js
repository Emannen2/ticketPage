function hamburgerToggle() {
    document.getElementById('hamburgerContent').classList.toggle('active');
    document.getElementById('hamburgerLine1').classList.toggle('active');
    document.getElementById('hamburgerLine2').classList.toggle('active');
    document.getElementById('hamburgerLine3').classList.toggle('active');
    document.getElementById('body').classList.toggle('active');
}

addEventListener('resize', function () {
    if (window.innerWidth > 1370) {
        document.getElementById('hamburgerContent').classList.remove('active');
        document.getElementById('hamburgerLine1').classList.remove('active');
        document.getElementById('hamburgerLine2').classList.remove('active');
        document.getElementById('hamburgerLine3').classList.remove('active');
        document.getElementById('body').classList.remove('active');
    }
});

// Get the div element and fixed-box element
const divElement = document.querySelector('.fixedDiv');
const fixedBox = document.querySelector('.fixed-box');
const mobileBox = document.querySelector('.fixedTicket');
const rightDiv = document.querySelector('#end-div');
const eventDetails = document.querySelector('#event-description');
const resizer = document.querySelector('#resizer');
const resized = document.querySelector('#resized');
const publisher = document.querySelector('#publisher');

// Get the top position of the div element
const divTop = divElement.getBoundingClientRect().top + window.scrollY;


// resize when 1265 px w
if (window.innerWidth <= 1265) {
    resized.classList.remove('w-[1250]');
    resized.classList.add('w-[1000]');
    resizer.classList.remove('w-[1250]');
    resizer.classList.add('w-[1000]');
    rightDiv.classList.remove('flex');
    rightDiv.classList.add('hidden');
};

addEventListener('resize', function () {
    if (window.innerWidth <= 1265) {
        resized.classList.remove('w-[1250]');
        resized.classList.add('w-[1000]');
        resizer.classList.remove('w-[1250]');
        resizer.classList.add('w-[1000]');
        rightDiv.classList.remove('flex');
        rightDiv.classList.add('hidden');  
        publisher.classList.remove('w-full');
        publisher.classList.add('w-[515]');
}});

addEventListener('resize', function () {
    if (window.innerWidth >= 1265) {
        resized.classList.add('w-[1250]');
        resized.classList.remove('w-[1000]');
        resizer.classList.add('w-[1250]');
        resizer.classList.remove('w-[1000]');
        rightDiv.classList.add('flex');
        rightDiv.classList.remove('hidden');  
        publisher.classList.add('w-full');
        publisher.classList.remove('w-[515]');
}});


// resize when 1000px W
if (window.innerWidth <= 1020) {
    resized.classList.remove('w-[1000]');
    resized.classList.add('w-full');
    resizer.classList.remove('w-[1000]');
    resizer.classList.add('w-full');

};

addEventListener('resize', function () {
    if (window.innerWidth <= 1020) {
        resized.classList.remove('w-[1000]');
        resized.classList.add('w-full');
        resizer.classList.remove('w-[1000]');
        resizer.classList.add('w-full');
}});

addEventListener('resize', function () {
    if (window.innerWidth >= 1020) {
        resized.classList.add('w-[1250]');
        resized.classList.remove('w-full');
        resizer.classList.add('w-[1250]');
        resizer.classList.remove('w-full');
}});


// ticketbox
addEventListener('resize', function () {
    if (window.innerWidth <= 1265) {
        function positionFixedBox() {
            if (window.scrollY >= 515) {
                fixedBox.classList.remove('fixed');
                fixedBox.classList.remove('mt-[-514px]');
            } else {
                fixedBox.classList.remove('fixed');
                fixedBox.classList.remove('mt-[-514px]');
            }
        }

        // Call positionFixedBox() on load, scroll, and resize
        window.addEventListener('load', positionFixedBox);
        window.addEventListener('scroll', positionFixedBox);
        window.addEventListener('resize', positionFixedBox);

        divElement.classList.add('hidden');
        divElement.classList.remove('flex');
        mobileBox.classList.remove('hidden');
        eventDetails.classList.add('p-10 text-center');
        eventDetails.classList.add('text-center');
    }
});

// ticketbox
addEventListener('resize', function () {
    if (window.innerWidth >= 1265) {
        function positionFixedBox() {
            if (window.scrollY >= 515) {
                fixedBox.classList.add('fixed');
                fixedBox.classList.add('mt-[-514px]');
            } else {
                fixedBox.classList.remove('fixed');
                fixedBox.classList.remove('mt-[-514px]');
            }
        }

        function positionUnFixedBox() {
            if (window.scrollY >= 515) {
                fixedBox.classList.remove('fixed');
                fixedBox.classList.remove('mt-[-514px]');
            } else {
                fixedBox.classList.add('fixed');
                fixedBox.classList.add('mt-[-514px]');
            }
        }

        // Call positionFixedBox() on load, scroll, and resize
        window.addEventListener('load', positionFixedBox);
        window.addEventListener('scroll', positionFixedBox);
        window.addEventListener('resize', positionUnFixedBox);
        window.addEventListener('resize', positionFixedBox);

        divElement.classList.remove('hidden');
        divElement.classList.add('flex');
        mobileBox.classList.add('hidden');
        eventDetails.classList.remove('p-10 text-center');
    }
});

if (window.innerWidth >= 1265) {
    function positionFixedBox() {
        if (window.scrollY >= 515) {
            fixedBox.classList.add('fixed');
            fixedBox.classList.add('mt-[-514px]');
        } else {
            fixedBox.classList.remove('fixed');
            fixedBox.classList.remove('mt-[-514px]');
        }
    }

    function positionUnFixedBox() {
        if (window.scrollY >= 515) {
            fixedBox.classList.remove('fixed');
            fixedBox.classList.remove('mt-[-514px]');
        } else {
            fixedBox.classList.add('fixed');
            fixedBox.classList.add('mt-[-514px]');
        }
    }

    // Call positionFixedBox() on load, scroll, and resize
    window.addEventListener('load', positionFixedBox);
    window.addEventListener('scroll', positionFixedBox);
    window.addEventListener('resize', positionUnFixedBox);
    window.addEventListener('resize', positionFixedBox);
}

addEventListener('resize', function () {
    if (window.innerWidth >= 1265){
            resized.classList.add('w-[1250]');
            resized.classList.remove('w-[1000]');
            resized.classList.remove('w-full');
            resizer.classList.add('w-[1250]');
            resizer.classList.remove('w-[1000]');
            resizer.classList.remove('w-full');
            rightDiv.classList.add('flex');
            rightDiv.classList.remove('hidden');  
            publisher.classList.add('w-full');
            publisher.classList.remove('w-[515]');
    }
});
