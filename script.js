// All the selected elelments in which operation performed.
const outercontainer =document.querySelector('.container');
const grossIncome = document.querySelector('#grossincome');
const grossIncomeerror = document.querySelector('.grossincome-error');
const extraIncome = document.querySelector('#extraincome');
const extraincomeerror = document.querySelector('.extraincomeerror');
const deduction = document.querySelector('#deduction');
const deductionerror = document.querySelector('.deductionerror');
const taxage = document.querySelector('#agegroup');
const agegrouperror = document.querySelector('.agegrouperror');
 const btn = document.querySelector('.btn-btn');
 const details = document.querySelectorAll('.details');

 // variables used in the further steps
 let totalinc
 let inhand
 let selectedvalue=null;
 const numberPattern = /^(?!-)[0-9]+$/;
 let check = true;

// This is for preventing the default behaviour of the submit button
      btn.addEventListener('click',(e)=>{
        e.preventDefault();
       
      })
      
    
    // for getting the value of the selected elelment that is age
      taxage.addEventListener('change',()=>{
    let selected = taxage.options[taxage.selectIndex];
    selectedvalue = taxage.value;
    console.log(selectedvalue)
 })
// function for removing the hidden class
 function add(i){
    details[i].classList.remove('hidden')
 }
// fuction for adding the hidden class
 function remove(i){
    details[i].classList.add('hidden');
 }
// function for form validation
const validation = (check)=>{
grossIncomeerror.innerHTML = '';
extraincomeerror.innerHTML = '';
deductionerror.innerHTML='';
agegrouperror.innerHTML = '';

   if(!numberPattern.test(grossIncome.value)){
   grossIncomeerror.innerHTML = `<abbr title="Please enter number"><img src="exclamation.png" width="20px" class="notation">
           </abbr>`
   }
if(!numberPattern.test(extraIncome.value)){
    extraincomeerror.innerHTML = `<abbr title="Please enter number"><img src="exclamation.png" width="20px" class="notation">
           </abbr>`
}
if(!numberPattern.test(deduction.value)){
    deductionerror.innerHTML = `<abbr title="Please enter number"><img src="exclamation.png" width="20px" class="notation">
           </abbr>`
}
if(selectedvalue === null){
    agegrouperror.innerHTML = `<abbr title="Please enter number"><img src="exclamation.png" width="20px" class="notation">
           </abbr>`
}
}


 // function for calculating the final tax calculation
      function incometax(){
        validation(true)
        if((numberPattern.test(grossIncome.value))&& numberPattern.test(extraIncome.value) && numberPattern.test(deduction.value) && selectedvalue!=null){
      validation(false)
            totalinc = parseFloat(grossIncome.value) + parseFloat(extraIncome.value);
           if(totalinc <=parseFloat(deduction.value)){
            alert('deduction value should not be more than total income, Please try again!');
           }
           else{
            totalinc = parseFloat(grossIncome.value) + parseFloat(extraIncome.value)-parseFloat(deduction.value);
      finalresult(totalinc)
      if(totalinc > 800000){
             if(selectedvalue === "lessthanforty"){
                inhand = 0.3*(totalinc-800000);
                totalinc = totalinc-inhand;
                finalresult(totalinc)
                console.log(totalinc)
             }
             if(selectedvalue === "greaterthanforty"){
                inhand = 0.4*(totalinc-800000);
                totalinc = totalinc-inhand;
                finalresult(totalinc)
                console.log(totalinc)
             }
             if(selectedvalue === "greaterthansixty"){
                inhand = 0.1*(totalinc-800000);
                totalinc = totalinc-inhand;
                finalresult(totalinc)
                console.log(totalinc)
             }
      }
    }
    }
      }

      // function for displaying the output after calculation
      function finalresult(result){
        const finale = result.toLocaleString();
        outercontainer.innerHTML='';
        outercontainer.classList.remove('outer-container')
        outercontainer.innerHTML=`<div class="result-container">
<div class="result-inner-container">
    <h1>Your overall income will be</h1>
    <h2>${finale}</h2>
    <h3>after tax deduction</h3>
    <div class="close-btn">
        <a href="/"><button type="submit" class="btn-btn-close">Close</button></a>
    </div>
</div>
</div>`
        
      }
