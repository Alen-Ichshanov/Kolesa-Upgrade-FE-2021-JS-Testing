import getItemsRequest from './requests';
import { hideLoader, showLoader } from './loader';
import { hideError, showError } from './error';
import {
    errorAppear, errorMsg, showAppData, buttonAddAction,
} from './pageContent';

export default function () {
    hideError();
    showLoader();

    getItemsRequest()
        .then(({ data }) => {
            if (data.result !== 'ok' || typeof data.html === 'undefined') {
                errorAppear();
                showError();
            } else {
                const appElement = document.querySelector('#app');

                showAppData(appElement, data);

                Array.from(appElement.querySelector('button')).forEach((button) => {
                    buttonAddAction(button);
                });
            }
        })
        .catch((e) => {
            const errorElement = document.querySelector('#error');

            errorMsg(errorElement, e);
            showError();
        })
        .finally(
            hideLoader(),
        );
}
