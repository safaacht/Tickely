

function handleClick() {
    console.log("function activated");
    const carte = document.getElementById("event-container");
    console.log(carte);
    carte.style.border = "2px solid blue";
}


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
    const prenom=form.getElementById('#prenom');
    const phone=form.getElementById('#phone');
    // the same thing for all the inputs


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

