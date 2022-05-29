const menu = document.querySelector('.menu');
const body = document.querySelector('body');

const changeCssStyleMenuWhenScrolling = () => {
    window.addEventListener('scroll', () => {
        if (window.screen.width <= 650) {
            if (window.pageYOffset >= 50) {
                menu.style.cssText = `
                z-index:22;
                top: 0;
                position: fixed;
                `;
            } else if (window.pageYOffset < 50) {
                menu.style.cssText = `
                z-index:22;
                top: 50px;
                position: absolute;
                `;
            }
        }
    })
}
changeCssStyleMenuWhenScrolling()
