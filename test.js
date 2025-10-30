function message_errors(select,message){
    document.querySelector(select).innerHTML=message;
}

const form=document.getElementById("my-form")
form.addEventListener("submit",(e)=>{
    e.preventDefault();  
    // pour qu'il n'envoie pas les infos invalid au backend
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email=form.querySelector('#email').value;
    const name=form.get;
    // the same thing for all the inputs


    if(name.value.trim()==''){ 
        // alert("N'est pas valide!!!")
        name.style.border=" 2px solid red"
        message_errors("nom n'est pas valide")
        return;

    }
     if(!regex.test(email)){
        alert("N'est pas valide!!!")
        return;
     }

const afficher=document.querySelector('.affichage');
    afficher.innerHTML +=`
    <div> <ul>
    <li> Nom:${nom.value}</li>
    <li>Prenom:${prenom.value}</li>
    <li> Email:${email.value}</li>
    <li> Tel:${tel.value}</li>
</ul>
/div>`

})