// SLIDER MENU
const slider_dots = document.querySelectorAll('.slider-dot');
const slider_items = document.querySelectorAll('.slider-menu-item-container');

slider_dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        if (!dot.classList.contains('active')) {
            // REMOVE CLASS ACTIVE FROM OLD DOT
            slider_dots.forEach(ele => {
                ele.classList.remove('active');
            })

            //ADD CLASS ACTIVE TO SELECTED DOT
            slider_dots[index].classList.add('active');

            // REMOVE CLASS ACTIVE FROM OLD MENU SLIDE ITEM
            slider_items.forEach(item => {
                item.classList.remove('active');
            })

            //ADD CLASS ACTIVE TO NEW MENU SLIDE ITEM
            slider_items[index].classList.add('active');
        }
    })
});

// COUNTDOWN TIMER
const endDayContainer = document.querySelector('.timing-countdown');
const countDate = new Date(endDayContainer.dataset.timer).getTime();

let countTime = setInterval(function count() {
    const now = new Date().getTime();
    let distance = countDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //GET ELEMENTS TO DISPLAY RESULT
    const day = document.querySelector('span.day');
    const hour = document.querySelector('span.hour');
    const min = document.querySelector('span.min');
    const second = document.querySelector('span.sec');

    day.textContent = `${days}`;
    hour.textContent = `${("0" + hours).slice(-2)}`;;
    min.textContent = `${("0" + minutes).slice(-2)}`;;
    second.textContent = `${("0" + seconds).slice(-2)}`;;

    if (distance < 0) {
        day.textContent = 0;
        hour.textContent = 0;
        min.textContent = 0;
        second.textContent = 0;
        clearInterval(countTime);
    }
}, 1000);

// FIXED NAVIGATION
const navigationBar = document.querySelector('.header-mid');

document.addEventListener('scroll', () => {
    if (window.scrollY > 95) {
        navigationBar.classList.add('fix-header-mid');
    }
    else {
        navigationBar.classList.remove('fix-header-mid');
    }
})

// SCROLL TO TOP BUTTON
const scrollBtn = document.querySelector('#backtotop');

document.addEventListener('scroll', () => {
    if (window.scrollY > 595) {
        scrollBtn.style.display = 'block';
        scrollBtn.classList.add('visible-btn');
    }
    else {
        scrollBtn.style.display = 'none';
        scrollBtn.classList.remove('visible-btn');
    }
})

