const lancer = document.querySelector('button');
const circles = document.querySelectorAll('.circles');
const counter = document.querySelector('.counter');
const somme = document.querySelector('.somme');
let choix = 0;
let tir =0;



circles.forEach((circle)=>{
    circle.addEventListener('click',()=>{
        if(choix <3) {
       circle.style.fill = 'red';
        choix++;
        }
    })
});

lancer.addEventListener('click', ()=>{
    // console.log('ok');
    const valeur = Math.floor((Math.random() * 6)+1);
    circles.forEach((circle)=>{
        if(circle.style.fill !== 'red'){
            circle.style.fill = 'gray';
        }
    });
    if (tir < 3){
        tir++; 
        counter.innerHTML = tir;      
        switch (valeur) {
            case 1:
                document.getElementById('C3').style.fill = 'blue';            
                break;
            case 2:
                document.getElementById('C4').style.fill = 'blue';
                break;
            case 3:
                document.getElementById('C5').style.fill = 'blue';
                break;
            case 4:
                document.getElementById('C6').style.fill = 'blue';
                break;
            case 5:
                document.getElementById('C7').style.fill = 'blue';
                break;
            case 6:
                document.getElementById('C8').style.fill = 'blue';
                break;
        }
    }
    // if(document.getElementById('C8').style.fill == 'blue')
    // {somme.textContent = "10.000 €"}
    // if((document.getElementById('C8').style.fill = 'red') && (document.getElementById('C5').style.fill = 'red'))
    // {somme.textContent = "100.000 €"}
    // if((document.getElementById('C8').style.fill = 'red') && (document.getElementById('C5').style.fill = 'red') && (document.getElementById('C4').style.fill = 'red'))
    // {somme.textContent = "1.000.000 €"}
});




