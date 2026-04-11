/*Переключение главной и поля выбора курсов*/
document.getElementById('cou').addEventListener('click', function(){
    const grid1 = document.getElementById('grid1');
    const grid2 = document.getElementById('grid2')
    const polos = document.getElementById('polos')

    grid1.classList.add('no_dis');
    grid2.classList.remove('no_dis');
    polos.classList.remove('no_dis');
});

document.getElementById('py_more').addEventListener('click', function(){
    const grid3 = document.getElementById('grid3');
    const grid2= document.getElementById('grid2');

    grid3.classList.remove('no_dis');
    grid2.classList.add('no_dis');

});
document.getElementById('py_buy').addEventListener('click', function(){
    const grid3 = document.getElementById('grid3');
    const grid2= document.getElementById('grid2');

    grid3.classList.remove('no_dis');
    grid2.classList.add('no_dis');

});