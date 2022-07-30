let historyCont = document.querySelector('.history');
let diseaseCont = document.querySelector('.disease');
let insuranceCont = document.querySelector('.insurance');
let classList = document.querySelectorAll(".list-group-item");
console.log(classList);

function history(e){
    historyCont.style.display = "block";
    diseaseCont.style.display = "none";
    insuranceCont.style.display = "none";
    console.log(e);
    activeBtn(e);
    e.classList.add("active")

}
function insurance(){
    historyCont.style.display = "none";
    diseaseCont.style.display = "none";
    insuranceCont.style.display = "block";
}

function disease(){
    historyCont.style.display = "none";
    diseaseCont.style.display = "block";
    insuranceCont.style.display = "none";
}

function activeBtn(){
   
    classList.forEach(box => {
    // ✅ Remove class from each element
    if(classList.classList.contains('active')){
        classList.classList.remove('active');
    }
  
    // ✅ Add class to each element
    // box.classList.add('small');
  });
}