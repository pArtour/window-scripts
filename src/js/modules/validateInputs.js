const validateInputs = (trigger, modal, fn) => {
    const checkedModal = document.querySelector(modal),
        checkedInputs = checkedModal.querySelectorAll('input');
    checkedInputs.forEach(input => {
        
        document.querySelector(trigger).addEventListener('click', () => {
            if(input.value) fn();
            
        })
    });
}
export default validateInputs;