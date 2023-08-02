const menuToggler = document.getElementById('menu-toggler')
const menu = document.getElementById('menu')

menuToggler.addEventListener('click', () => toggleMenu())
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1000) {
        if (menu.classList.contains('menu-show')) {
            menu.classList.remove('menu-show')
        }
    }
})


function toggleMenu() {
    if (menu.classList.contains('menu-show')) {
        menu.classList.remove('menu-show')
    } else {
        menu.classList.add('menu-show')
    }
}