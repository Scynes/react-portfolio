const BODY = document.querySelector('body');

const shiftBackground = event => {

    const MOUSE_X = event.clientX / window.innerWidth;
    const MOUSE_Y = event.clientY / window.innerHeight;

    BODY.style.backgroundPosition = `${5 * MOUSE_X}% ${5 * MOUSE_Y}%`
}

if (!/Mobi|Android/i.test(navigator.userAgent)) {
    BODY.style.backgroundSize = '110% 110%'
    BODY.addEventListener('mousemove', shiftBackground);
}