/*Переключение слайдов регистрации*/

document.getElementById('log').addEventListener('click', function() {
    const log_button = document.getElementById('log');
    const naim = document.getElementById('naim');
    const log_body = document.getElementById('log_body');
    const state = this.dataset.state;
    const sig_body = document.getElementById('sig_body')

    /*переключение кнопкт назад и войти*/

    if (state === 'off'){
        this.dataset.state = 'on'
        naim.classList.add('no_vid');
        log_body.classList.add('vid');
        log_body.classList.remove('no_vid');
        log_button.textContent = 'Remove';
        this.style.background = '#ff4444';

    }else {
        this.style.background = '#11E200';
        this.dataset.state = 'off';
        this.textContent = 'login';
        naim.classList.add('vid');
        naim.classList.remove('no_vid');
        log_body.classList.add('no_vid');
        log_body.classList.remove('vid');
        sig_body.classList.add('no_vid');
        sig_body.classList.remove('vid');

    }
});

/*кнопка регистрации в поле входа*/

document.getElementById('log_ent').addEventListener('click', function() {
    const log_body = document.getElementById('log_body');
    const sig_body = document.getElementById('sig_body');
    const state = this.dataset.state;

        sig_body.classList.remove('vid');
        sig_body.classList.add('no_vid');
        log_body.classList.add('vid');
        log_body.classList.remove('no_vid');



});
/*кнопка входа в поле регистрации*/
document.getElementById('sig_ent').addEventListener('click', function() {
    const sig_body = document.getElementById('sig_body');
    const log_body = document.getElementById('log_body');

        log_body.classList.remove('vid');
        log_body.classList.add('no_vid');
        sig_body.classList.remove('no_vid');

});

/*Кнопка esc*/

document.getElementById('esc').addEventListener('click', function() {
    const grid1 = document.getElementById('grid1');
    const grid2 = document.getElementById('grid2');
    const grid3 = document.getElementById('grid3');
    const polos = document.getElementById('polos');

    // Проверяем, какая страница сейчас открыта
    const isGrid2Visible = !grid2.classList.contains('no_dis');
    const isGrid3Visible = !grid3.classList.contains('no_dis');

    if (isGrid3Visible) {
        // Если открыта страница Python - возвращаемся на курсы
        grid2.classList.remove('no_dis');
        grid3.classList.add('no_dis');
        polos.classList.remove('no_dis');

    } else if (isGrid2Visible) {
        // Если открыта страница курсов - возвращаемся на главную
        grid1.classList.remove('no_dis');
        grid2.classList.add('no_dis');
        polos.classList.add('no_dis');

    } else {
        // Если на главной - ничего не делаем или скроллим наверх
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
