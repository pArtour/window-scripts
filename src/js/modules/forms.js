import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');

    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };
    const clearInputs = () => {
        inputs.forEach(input => input.value = '');
    }
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let result = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await result.text();
    };

    form.forEach(item => {
        item.addEventListener('submit', event => {
            event.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            
            const formData = new FormData(item);

            if (item.getAttribute('data-calc') === 'end') {
                for (const key in state) {
                    if (state.hasOwnProperty(key)) {
                        const element = state[key];
                        formData.append(key, element)
                    }
                }
            }
            
            postData('assets/server.php', formData)
                .then(res => {
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                });
        });
    });
};
export default forms;