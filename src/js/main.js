import '../css/style.css';
import testFunc from './bigUntestableCode';

document.querySelector('#app').innerHTML = `
  <h1>Hello, Kolesa Upgrade!</h1>
  <div id="error">Error</div>
  <div id="loader">Loader</div>
  <button id="button">Button</button>
`;

testFunc();
