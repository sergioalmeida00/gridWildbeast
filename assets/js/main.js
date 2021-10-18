const sidenav__item = document.querySelectorAll('.sidenav__item a');

sidenav__item.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        // TODA VEZ QUE TIVER UM EVENTO cancelIdleCallback, RODA O FOREACH E REMOVE A CLASS sidenav__item--active E APOS ISSO ADD;
        sidenav__item.forEach(btn => {
            btn.classList.remove('sidenav__item--active');
        });
        item.classList.add('sidenav__item--active');
    })
});


window.addEventListener('scroll', () => {
    if (scrollY >= 100) {
        console.log(scrollY)
        document.querySelector('.start').classList.add('start--active');
    } else {
        document.querySelector('.start').classList.remove('start--active');
    }
});