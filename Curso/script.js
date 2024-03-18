const cards = document.querySelectorAll('.card');
var selected=null;

for (const card of cards) {
    card.addEventListener('click', () => {
        if(selected==null) {
            selected=card.style.backgroundImage;
            card.style.backgroundImage='none';
            card.style.backgroundColor='black';
        }else {
            card.style.backgroundImage=selected;
            selected=null;
        }
    })
}