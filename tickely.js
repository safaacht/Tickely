  // Bouton Next
const btnNext = document.getElementById('next');

btnNext.addEventListener('click', function() {
  const next = document.getElementById('step2');
  const current = document.getElementById('etape1');
  console.log(next);

  current.style.display = "none";  
  next.style.display = "block";    
});

//  Boutton Precedent

const btnPrecedent=document.getElementById('precedent');
btnPrecedent.addEventListener('click', function(){
    const precedent = document.getElementById('etape1');
  const current = document.getElementById('step2');
  console.log(precedent);

  current.style.display = "none";  
  precedent.style.display = "block";  
})




//=========== étape1===========

function handleClick() {
    console.log("function activated");
    const carte = document.getElementById("event-container");
    console.log(carte);
    carte.style.border = "2px solid blue";
}

// ==========etape2===============

const countSpan = document.getElementById('count');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');

let count = 1;

// modification du compteur
function increment() {
  count++;
  countSpan.textContent = count; 
}

function decrement() {
  count--;
  countSpan.textContent = count; 
}


incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);


// ============etape3=================
function message_errors(select,message){
    document.querySelector(select).innerHTML=message;
}

const form=document.getElementById("my-form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();  
    // pour qu'il n'envoie pas les infos invalid au backend
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regtel=/^0[ \-]?(6|7)[ \-]?\d{2}[ \-]?\d{2}[ \-]?\d{2}[ \-]?\d{2}$/;
    const email=form.querySelector('#email').value;
    const name=form.getElementById('#name');
    const prenom=form.getElementById('#prenom').value;
    const phone=form.getElementById('#phone').value;


    if(name.value.trim()==''){ 
        // alert("N'est pas valide!!!")
        name.style.border=" 2px solid red"
        message_errors("Nom n'est pas valide")
        return;

    }


    if(prenom.value.trim()==''){ 
        // alert("N'est pas valide!!!")
        prenom.style.border=" 2px solid red"
        message_errors("Prenom n'est pas valide")
        return;

    }

     if(!regex.test(email)){
        email.style.border=" 2px solid red"
        message_errors("Email n'est pas valide")
        return;
     }

        if(!regtel.test(phone)){
        phone.style.border=" 2px solid red"
        message_errors("Tél n'est pas valide")
        return;
     }

      if (!name || !email || !prenom|| !phone) {
    message.textContent = "Veuillez remplir tous les champs.";
    message.style.color = "red";
  }


const afficher=document.querySelector('.affichage');
    afficher.innerHTML +=`
    <div> <ul>
    <li> Nom:${nom.value}</li>
    <li>Prenom:${prenom.value}</li>
    <li> Email:${email.value}</li>
    <li> Tel:${phone.value}</li>
</ul>
/div>`

})

