function calculationResult(){
    document.querySelector('.js-result')
     .innerHTML = calculation;
}

let calculation = localStorage.getItem('calculation')|| '';


 function updateCalc(value)
 {
    calculation += value;
    calculationResult();
    localStorage.setItem('calculation',calculation);
 }

//delete function
//const deleteButton = document.querySelector('.js-del-btn');

//deleteButton.addEventListener('click',);
function deleteValues() {
   calculation = calculation.slice(0, -1);
   calculationResult();
   localStorage.setItem('calculation', calculation);
}

/*theme change*/
let icon = document.getElementById('.js-icon');
 function toggleTheme(){
   document.body.classList.toggle("second-theme");
} 

 

