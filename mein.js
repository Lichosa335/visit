document.getElementById('log').addEventListener('click', function() {
    const log_button = document.getElementById('log');
    const naim = document.getElementById('naim');
    const log_body = document.getElementById('log_body');
    const state = this.dataset.state;
    const sig_body = document.getElementById('sig_body')

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
document.getElementById('log_ent').addEventListener('click', function() {
    const log_body = document.getElementById('log_body');
    const sig_body = document.getElementById('sig_body');
    const state = this.dataset.state;

        sig_body.classList.remove('vid');
        sig_body.classList.add('no_vid');
        log_body.classList.add('vid');
        log_body.classList.remove('no_vid');



});
document.getElementById('sig_ent').addEventListener('click', function() {
    const sig_body = document.getElementById('sig_body');
    const log_body = document.getElementById('log_body');

        log_body.classList.remove('vid');
        log_body.classList.add('no_vid');
        sig_body.classList.remove('no_vid');
        sig_body.classList.add('vid');
});

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
            btn.classList.remove('vid');
        }
    });
    mein.classList.remove('mein');
    mein.classList.add('mein1');
    cours_body.classList.remove('no_dis');
    naim.classList.remove('zug');
    naim.classList.add('zug1');
    fot.classList.remove('fot');
    fot.classList.add('fot1');
    span.classList.remove('mein_span');
    span.classList.add('mein_span1');
});