const circles=document.querySelectorAll(".circle"),
progress=document.querySelector(".indicator"),
nextBtn=document.querySelector("#next");

let currentStep=1;


nextBtn.addEventListener("click", () =>{
    currentStep++;
    if (currentStep > circles.length) {
    currentStep = circles.length;
  }

  updateSteps();
})


currentStep=e.target.id==="next"
console.log(currentStep);

// click event listner to button
buttons.addEventListener("click",updateSteps)