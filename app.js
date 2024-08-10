
const delay = require('./delay');
const fetchWithPromise = require('./fetchWithPromise');
const readFilePromise = require('./readFilePromise');

delay(1000).then(() => console.log('Executed after 1 second'));

fetchWithPromise('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));

readFilePromise('example.txt', 'utf8')
    .then(data => console.log(data))
    .catch(error => console.error('Read error:', error));
