/*Переключение главной и поля выбора курсов*/
document.getElementById('cou').addEventListener('click', function(){
    const grid1 = document.getElementById('grid1');
    const grid2 = document.getElementById('grid2')
    const polos = document.getElementById('polos')

    grid1.classList.add('no_dis');
    grid2.classList.remove('no_dis');
    polos.classList.remove('no_dis');
});

// Python карточка (ведущая на grid4 - страница Python)
document.getElementById('py_more').addEventListener('click', function(){
    const grid4 = document.getElementById('grid4');
    const grid2 = document.getElementById('grid2');
    grid4.classList.remove('no_dis');
    grid2.classList.add('no_dis');
});

document.getElementById('py_buy').addEventListener('click', function(){
    const grid4 = document.getElementById('grid4');
    const grid2 = document.getElementById('grid2');
    grid4.classList.remove('no_dis');
    grid2.classList.add('no_dis');
});

// HTML карточка (ведущая на grid3 - страница HTML)
document.getElementById('html_more').addEventListener('click', function(){
    const grid3 = document.getElementById('grid3');
    const grid2 = document.getElementById('grid2');
    grid3.classList.remove('no_dis');
    grid2.classList.add('no_dis');
});

document.getElementById('html_buy').addEventListener('click', function(){
    const grid3 = document.getElementById('grid3');
    const grid2 = document.getElementById('grid2');
    grid3.classList.remove('no_dis');
    grid2.classList.add('no_dis');
});

// CSS карточка (ведущая на grid5)
document.getElementById('css_more').addEventListener('click', function(){
    const grid5 = document.getElementById('grid5');
    const grid2 = document.getElementById('grid2');
    grid5.classList.remove('no_dis');
    grid2.classList.add('no_dis');
});

document.getElementById('css_buy').addEventListener('click', function(){
    const grid5 = document.getElementById('grid5');
    const grid2 = document.getElementById('grid2');
    grid5.classList.remove('no_dis');
    grid2.classList.add('no_dis');
});

// JS карточка (ведущая на grid6)
document.getElementById('js_more').addEventListener('click', function(){
    const grid6 = document.getElementById('grid6');
    const grid2 = document.getElementById('grid2');
    grid6.classList.remove('no_dis');
    grid2.classList.add('no_dis');
});

document.getElementById('js_buy').addEventListener('click', function(){
    const grid6 = document.getElementById('grid6');
    const grid2 = document.getElementById('grid2');
    grid6.classList.remove('no_dis');
    grid2.classList.add('no_dis');
});