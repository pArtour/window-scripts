import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms'
import timer from './modules/timer';
import images from './modules/images';
import changeModalState from './modules/changeModalState'

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let modalState = {};
    let deadline = '2020-04-01';

    changeModalState(modalState);
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', deadline);
    images();
});

// const proxyurl = "https://cors-anywhere.herokuapp.com/";

// const a = async word  => {
//     const res = await fetch(`${proxyurl}http://www.eki.ee/dict/evs/index.cgi?Q=%${word}&F=V&C06=ru`);
//     const data = await res.text();
//     return data;
// }


// a('молоко')
//     .then(data => console.log(data))