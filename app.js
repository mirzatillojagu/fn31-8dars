const button = document.querySelector('#button');
const title = document.querySelector('#title');

button.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice', {
        method: "GET"
    })
    .then(response => response.json()) 
    .then(data => {
        title.textContent = data.slip.advice;
    })
    .catch(error => {
        console.log(error);
        title.textContent = "Xatolik yuz berdi, qayta urinib ko'ring.";
    });
});
