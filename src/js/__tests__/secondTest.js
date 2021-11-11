import { hideLoader, showLoader } from '../loader';

describe('Тест на добавление контента на страницу в блок #app.', () => {
    beforeAll(() => {
        document.body.innerHTML = '<div id="app"></div>';
    });
    afterAll(() => {
        document.body.innerHTML = '';
    });
    test('Тест на добавление основных блоков в #app.', () => {
        const appBlock = document.querySelector('#app');
        const errorBlock = document.createElement('div');
        const loader = document.createElement('div');
        const button = document.createElement('button');

        loader.setAttribute('id', 'loader');
        errorBlock.setAttribute('id', 'error');
        button.setAttribute('id', 'button');
        document.querySelector('#app').appendChild(errorBlock);
        document.querySelector('#app').appendChild(loader);
        document.querySelector('#app').appendChild(button);
        expect(appBlock).toMatchSnapshot();
    });
});

describe('Тест на отображение и скрытие лоадера.', () => {
    beforeAll(() => {
        document.body.innerHTML = '<div id="app">'
        + '<div id="loader">Loader Status</div>'
        + '</div>';
    });
    afterAll(() => {
        document.body.innerHTML = '';
    });
    test('Тест на отображение лоадера.', () => {
        const loader = document.querySelector('#loader');

        showLoader();
        expect(loader.style.display).toBe('block');
    });
    test('Тест на скрытие лоадера.', () => {
        const loader = document.querySelector('#loader');

        hideLoader();
        expect(loader.style.display).toBe('none');
    });
});
