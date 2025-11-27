document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').onsubmit = function () {
        event.preventDefault();
        const hodnota = document.querySelector('#stupne').value;
        let far = (hodnota * (9 / 5)) + 35
        document.querySelector('.vysledek').innerHTML = `${hodnota} °C je ${far} °F`;
    };
});