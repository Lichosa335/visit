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

/*Кнопка esc*/
document.getElementById('esc').addEventListener('click', function() {
    const grid1 = document.getElementById('grid1');
    const grid2 = document.getElementById('grid2');
    const grid3 = document.getElementById('grid3'); // HTML страница
    const grid4 = document.getElementById('grid4'); // Python страница
    const grid5 = document.getElementById('grid5'); // CSS страница
    const grid6 = document.getElementById('grid6'); // JS страница
    const grid7 = document.getElementById('grid7'); // траница
    const polos = document.getElementById('polos');

    // Проверяем, какая страница сейчас открыта
    const isGrid2Visible = !grid2.classList.contains('no_dis');
    const isGrid3Visible = !grid3.classList.contains('no_dis');
    const isGrid4Visible = !grid4.classList.contains('no_dis');
    const isGrid5Visible = !grid5.classList.contains('no_dis');
    const isGrid6Visible = !grid6.classList.contains('no_dis');
    const isGrid7Visible = !grid7.classList.contains('no_dis');

    if (isGrid4Visible) {
        // Страница Python -> возврат на курсы
        grid2.classList.remove('no_dis');
        grid4.classList.add('no_dis');
        polos.classList.remove('no_dis');
    } else if (isGrid3Visible) {
        // Страница HTML -> возврат на курсы
        grid2.classList.remove('no_dis');
        grid3.classList.add('no_dis');
        polos.classList.remove('no_dis');
    } else if (isGrid5Visible) {
        // Страница CSS -> возврат на курсы
        grid2.classList.remove('no_dis');
        grid5.classList.add('no_dis');
        polos.classList.remove('no_dis');
    } else if (isGrid6Visible) {
        // Страница JS -> возврат на курсы
        grid2.classList.remove('no_dis');
        grid6.classList.add('no_dis');
        polos.classList.remove('no_dis');
    } else if (isGrid2Visible) {
        // Страница курсов -> возврат на главную
        grid1.classList.remove('no_dis');
        grid2.classList.add('no_dis');
        polos.classList.add('no_dis');
    }else if (isGrid7Visible) {
        // Страница курсов -> возврат на главную
        grid1.classList.remove('no_dis');
        grid7.classList.add('no_dis');
        polos.classList.add('no_dis');
     }else {
        // На главной -> скролл наверх
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});
document.getElementById('sup').addEventListener('click', function() {
    const log_button = document.getElementById('sup');
    const naim = document.getElementById('naim');
    const log_body = document.getElementById('support');
    const state = this.dataset.state;

    /*переключение кнопкт назад и войти*/

    if (state === 'off'){
        this.dataset.state = 'on'
        naim.classList.add('no_dis');
        log_body.classList.remove('no_dis');
        log_button.textContent = 'Remove';
        this.style.background = '#ff4444';

    }else {
        this.style.background = '#11E200';
        this.dataset.state = 'off';
        this.textContent = 'support';
        naim.classList.remove('no_dis');
        log_body.classList.add('no_dis');
    }
});
// Массив с ответами на вопросы
const supportAnswers = {
    login: "To log in to your account, use the 'login' button in the main menu. Enter your email and password. If you have forgotten your password, click on 'Forgot password?'",
    load: "If the page doesn't load, check your internet connection. The site may be temporarily unavailable. Try refreshing the page after 5 minutes.",
    courses: "The courses are located in the 'services' section. After clicking, you will see the available Python and HTML courses. Click on 'More' for more information."
};

// Функция для отображения текста в support_t
function showSupportText(text) {
    const supContainer = document.getElementById('sup_t');
    if (supContainer) {
        supContainer.innerHTML = `
            <div style="
                padding: 20px;

                color: #ffffff;
                font-size: 22px;
                border-left: 5px solid #00FF37;
                margin: 10px;
                grid-row: 1/3;
                grid-column: 1/3;
            ">
                ${text}
            </div>
        `;
    }
}

// Очистка текста
function clearSupportText() {
    const supContainer = document.getElementById('sup_t');
    if (supContainer) {
        supContainer.innerHTML = '';
    }
}

// Добавляем обработчики для кнопок в support
document.addEventListener('DOMContentLoaded', function() {
    const supButtons = document.querySelectorAll('.sup button');

    supButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.toLowerCase();

            if (buttonText.includes('log in') || buttonText.includes('аккаунт')) {
                showSupportText(supportAnswers.login);
            } else if (buttonText.includes('load') || buttonText.includes('загружается')) {
                showSupportText(supportAnswers.load);
            } else if (buttonText.includes('courses') || buttonText.includes('курсы')) {
                showSupportText(supportAnswers.courses);
            } else {
                showSupportText("Пожалуйста, опишите вашу проблему подробнее, и мы обязательно поможем!");
            }
        });
    });
});