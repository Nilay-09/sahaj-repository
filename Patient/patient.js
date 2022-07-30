let historyCont = document.querySelector('.history');
let diseaseCont = document.querySelector('.disease');
let insuranceCont = document.querySelector('.insurance');
let classList = document.querySelectorAll(".list-group-item");
// console.log(classList);

function history(e){
    historyCont.style.display = "block";
    diseaseCont.style.display = "none";
    insuranceCont.style.display = "none";
    // console.log();
    activeBtn();
    e.classList.add("active")
    // e.classList.add("active")

}
function insurance(e){
    historyCont.style.display = "none";
    diseaseCont.style.display = "none";
    insuranceCont.style.display = "block";
    activeBtn();
    e.classList.add("active")
}

function disease(e){
    historyCont.style.display = "none";
    diseaseCont.style.display = "block";
    insuranceCont.style.display = "none";
    activeBtn();
    e.classList.add("active")
}

function activeBtn(){
   
    classList.forEach(act => {
    // ✅ Remove class from each element
    if(act.classList.contains('active')){
        act.classList.remove('active');
    }
  
    // ✅ Add class to each element
    // box.classList.add('small');
  });
}