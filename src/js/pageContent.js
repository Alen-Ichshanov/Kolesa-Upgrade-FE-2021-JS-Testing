import toggleFavoriteRequest from './requests';

export function errorAppear() {
    document.querySelector('#error').innerHTML = 'Произошла ошибка, попробуйте ещё раз.';
}

export function showAppData(appElement, data) {
    appElement.innerHTML = data.html;
    appElement.style.display = 'block';
}

export function errorMsg(errorElement, e) {
    errorElement.innerHTML = e.message;
}

export function addContentSun(e) {
    e.currentTarget.textContent = '🌝';
}

export function addContentMoon(e) {
    e.currentTarget.textContent = '🌚';
}

export function buttonClickAction(e) {
    e.preventDefault();

    e.currentTarget.textContent = 'Загрузка...';

    toggleFavoriteRequest(e.currentTarget.dataset.id)
        .then(({ data: buttonData }) => {
            if (buttonData.result === 'set') {
                addContentSun(e);
            } else {
                addContentMoon(e);
            }
        });
}

export function buttonAddAction(button) {
    button.addEventListener('click', (e) => {
        buttonClickAction(e);
    });
}
