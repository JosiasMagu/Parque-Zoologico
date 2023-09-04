function menu() {
    let menu = document.querySelector('.nav-list')
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
    } else {
        menu.classList.add('active')
    }
}