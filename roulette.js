const lancer = document.querySelector('.lancer');
const circles = document.querySelectorAll('.circles');
const counter = document.querySelector('.counter');
const somme = document.querySelector('.somme');
const titre = document.querySelector('h1');
const nouveau = document.querySelector('.nouveau')
let choix = 0;
let tir =0;
let total= 0;


// **********  gérer les choix de boutons rouges   *****************************
circles.forEach((circle)=>{
    circle.addEventListener('click',()=>{
        choix++;
        if(choix <4) {
       circle.style.fill = 'red';
        
       
        }
        else{

            alert('maxi 3');

        }
    })
});
// **********  gérer les choix de bouton Nouveau jeu   *****************************
nouveau.addEventListener('click',()=>{
    circles.forEach((circle)=>{circle.style.fill = 'gray'});
    choix =0;
    tir = 0;
    counter.innerHTML = 0;
    titre.textContent = "Roulette Russe";
    titre.classList.remove('vainqueur');

    
});

// **********  gérer les choix de bouton lancer   *****************************

lancer.addEventListener('click', ()=>{
    // console.log('ok');
    const valeur = Math.floor((Math.random() * 6)+1);
        
    if (tir < 2){
        tir++; 
        counter.innerHTML = tir; 
        if(document.getElementById(`C${valeur}`).style.fill !== 'red' ){ 
            titre.textContent = "bravo vous avez gagné !!!";
            titre.classList.add('vainqueur')           
            document.getElementById(`C${valeur}`).style.fill = 'blue';
            
            if (choix ==1) {  total += 10000;      }           
            if (choix ==2) {  total += 100000;    }           
            if (choix ==3) {  total += 1000000;    } 
            // somme.textContent = total ;
            somme.textContent = total        
        }else{
            document.getElementById(`C${valeur}`).style.fill = 'blue';
            somme.textContent = 0 ;
        }
      
    }
    
});




