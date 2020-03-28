import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');
          
    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElements(event, element, property) {
        element.forEach((item, index) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[property] = index;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            index === 0 ? state[property] = 'cold' : state[property] = 'warm';

                            element.forEach((box, i) => {
                                box.checked = false;
                                if (index === i) box.checked = true;
                            });

                        } else {
                            state[property] = item.value // item === input
                        }
                        break;
                    case 'SELECT':
                            state[property] = item.value // item === input
                        break;
                };
                console.log(state);
                
            });
        });
    };




    bindActionToElements('click', windowForm, 'form');
    bindActionToElements('input', windowHeight, 'height');
    bindActionToElements('input', windowWidth, 'width');
    bindActionToElements('change', windowType, 'type');
    bindActionToElements('change', windowProfile, 'profile');

    

}
export default changeModalState;