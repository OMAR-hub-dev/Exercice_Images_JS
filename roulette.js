const lancer = document.querySelector('button');
const cirles = document.querySelectorAll('.circles');

lancer.addEventListener('click', ()=>{
    const valeur = Math.floor((Math.random() * 6)+1);
    cirles.forEach(x=>x.style.fill ='gray');
    switch (valeur) {
        case 1:
            document.getElementById('C3').style.fill = 'red';
            break;
        case 2:
            document.getElementById('C4').style.fill = 'red';
            break;
        case 3:
            document.getElementById('C5').style.fill = 'red';
            break;
        case 4:
            document.getElementById('C6').style.fill = 'red';
            break;
        case 5:
            document.getElementById('C7').style.fill = 'red';
            break;
        case 6:
            document.getElementById('C8').style.fill = 'red';
            break;
    }
})