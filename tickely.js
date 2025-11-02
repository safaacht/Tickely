// Stepper
const steps = [
  document.getElementById("etape1"),
  document.getElementById("step2"),
  document.getElementById("step3"),
  document.getElementById("step4"),
  document.getElementById("step5")
];

let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.style.display = i === index ? "block" : "none";
  });
  currentStep = index;
}




// Bouton Next
const btnNext = document.querySelectorAll(".next");

btnNext.forEach(btn=> {
  btn.addEventListener("click",()=>{
    if (currentStep<steps.length-1){
      showStep(currentStep+1);
    }
  })  
})

//  Boutton Precedent

const btnPrecedent=document.querySelectorAll(".precedent");

btnPrecedent.forEach(btn=>{
  btn.addEventListener("click",()=>{
    if(currentStep>0){
      showStep(currentStep-1);
    }
  })
})

showStep(0)

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
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
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


