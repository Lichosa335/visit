document.getElementById('log').addEventListener('click', function() {
    const log_button = document.getElementById('log');
    const naim = document.getElementById('naim');
    const log_body = document.getElementById('log_body');
    const state = this.dataset.state;
    if (state === 'off'){
        this.dataset.state = 'on'
        naim.classList.add('no_vid');
        log_body.classList.add('vid');
        log_body.classList.remove('no_vid');
        log_button.textContent = 'Remove';
    }else {

        this.dataset.state = 'off';
        this.textContent = 'login';
        naim.classList.add('vid');
        naim.classList.remove('no_vid');
        log_body.classList.add('no_vid');
        log_body.classList.remove('vid');

    }

});