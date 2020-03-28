import validateInputs from './validateInputs';
const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector),
                windows = document.querySelectorAll('[data-modal]'),
                scroll = calcScroll();

        trigger.forEach(element => {
            element.addEventListener('click', event => {
                if (event.target) {
                    event.preventDefault();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add('modal-open');
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;

            // document.body.classList.remove('modal-open');
        });
        
        modal.addEventListener('click', event => {
            if (event.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;

                // document.body.classList.remove('modal-open');
            }
        })
    }
    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    function calcScroll() {
        let div  = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.phone_link', '.popup', '.popup .popup_close',);
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');

    validateInputs('.popup_calc_button', '.popup_calc', () => {
        bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    });
    validateInputs('.popup_calc_profile_button', '.popup_calc_profile', () => {
        bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    });
    
    // showModalByTime('.popup', 60000)
}

export default modals;