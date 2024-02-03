const menu = document.querySelector('[data-menu]');
const contentMenu = document.querySelector('[data-content]');

menu.addEventListener('click', () => { 
    openMenu() 
})

const openMenu = () => {
    contentMenu.classList.toggle('closed')
    contentMenu.classList.toggle('active')
}