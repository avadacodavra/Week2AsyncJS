// fetchWithPromise.js
function fetchWithPromise(url, options) {
    return fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

module.exports = fetchWithPromise;
