const cards = document.querySelectorAll('.card');
const continuar = document.querySelector('.continuar');

continuar.style.display = 'none';

for (const card of cards ) {
    card.addEventListener('click', () => {
        card.style.backgroundImage = 'none';
        card.style.backgroundColor = 'black';
        continuar.style.display= 'block';
    });
}

