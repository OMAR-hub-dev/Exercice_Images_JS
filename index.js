const images = document.querySelectorAll('img');
const checkInput = document.querySelectorAll('input');
function affichage(){
	// alert("Tout es OK !");
    if(!document.getElementById('control').checked){
        document.getElementById('image1').style.display="none";        
        }else{document.getElementById('image1').style.display="block";}
    
    if(!document.getElementById('control2').checked){
        document.getElementById('image2').style.display="none";              
        }else{document.getElementById('image2').style.display="block";}

    if(!document.getElementById('control3').checked){
        document.getElementById('image3').style.display="none";        
        }else{document.getElementById('image3').style.display="block";}

    }   
function cacher(){
	images.forEach(x=>{x.style.display='none';})
}
function presenter(){
	images.forEach(x=>{x.style.display='block';})
}

function controler(){
	if(document.getElementById('Control').checked){
			 alert("Bouton option coché") ;
		}
	else{alert("Bouton option NON coché");}		
}
