/*Переключение главной и поля выбора курсов*/
document.getElementById('cou').addEventListener('click', function(){
    const cours_body = document.getElementById('cours_body');
    const mein = document.getElementById('mein');
    const buttonIds = ['log', 'cou', 'ser', 'car', 'rev', 'con', 'sup'];
    const naim = document.getElementById('naim');
    const fot = document.getElementById('fot');
    const span = document.getElementById('span');


    buttonIds.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.classList.add('no_dis');

        }
    });

    mein.classList.remove('mein');
    mein.classList.add('mein1');

    cours_body.classList.remove('no_dis');
    naim.classList.remove('zug');
    naim.classList.add('zug1');
    fot.classList.remove('fot');
    fot.classList.add('fot1');

    /*текст меню становится кнопкой
    */
    span.classList.remove('mein_span');
    span.classList.add('mein_span1');
    span.setAttribute('type', 'button');

});

/*Переключение поля выбора курсов и главной */
document.getElementById('span').addEventListener('click', function(){
    const cours_body = document.getElementById('cours_body');
    const mein = document.getElementById('mein');
    const buttonIds = ['log', 'cou', 'ser', 'car', 'rev', 'con', 'sup'];
    const py_body = document.getElementById('python_body');
    const naim = document.getElementById('naim');
    const fot = document.getElementById('fot');
    const span = document.getElementById('span');
    buttonIds.forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.classList.remove('no_dis');

            }
    });

    mein.classList.add('mein');
    mein.classList.remove('mein1');
    py_body.classList.add('no_dis')
    cours_body.classList.add('no_dis');
    naim.classList.add('zug');
    naim.classList.remove('zug1');
    fot.classList.add('fot');
    fot.classList.remove('fot1');

    /*кнопка меню становится текстом
    */
    span.classList.add('mein_span');
    span.classList.remove('mein_span1');
    span.setAttribute('type', 'text');
});

/*Переключение Поля информации питон и курсов*/

document.getElementById('py_more').addEventListener('click', function(){
    const cours_body = document.getElementById('cours_body');
    const py_body = document.getElementById('python_body');
    const prow = window.getComputedStyle(py_body).display !== 'none';

    cours_body.classList.add('no_dis');
    py_body.classList.remove('no_dis');

    /*if prow {}*/
});