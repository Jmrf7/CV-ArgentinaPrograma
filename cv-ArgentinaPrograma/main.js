
alert('Sitio web responsivo')


const root = document.querySelector(':root');
let isDark = false;

function changeTheme() {
    if (isDark) {
        root.style.setProperty('--primary', '#520120');
        root.style.setProperty('--primary-color', 'black');
        root.style.setProperty('--secondary', '#520120');
        root.style.setProperty('--secondary-color', 'white');
        isDark = !isDark;
    } else {
        root.style.setProperty('--primary', 'white');
        root.style.setProperty('--primary-color', 'yellow');
        root.style.setProperty('--secondary', 'black');
        root.style.setProperty('--secondary-color', 'black');
        isDark = !isDark;
    }
}

const theme = document.getElementById('theme').addEventListener('click', changeTheme)

const btnModal = document.getElementById('btnModal').addEventListener('click', function () {
    modal.style.display = 'flex'
})

var btnCloseModal = document.getElementById('btnCloseModal').addEventListener('click', function () {
    modal.style.display = 'none'
})

const lista = () => {
    var menu = document.getElementById('menu');
    if (menu.style.display = 'none') {
        menu.style.display = 'flex'
    }
}

// const btnModal = document.getElementById('btnModal').addEventListener('click', alert("asd"))

// var modal = document.getElementById('modal')
// const modalcierra = ()=>{

//     modal.style.display = 'none'
// }



