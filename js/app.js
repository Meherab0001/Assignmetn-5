
 

const totalCost=document.getElementById('calculate');

totalCost.addEventListener('click',function(){
  /*   const foodCost=document.getElementById('food-cost').value;
const rentCost=document.getElementById('rent-cost').value;
const colthCost=document.getElementById('colth-cost').value;

const income=document.getElementById('income').value;
    const totalExpenes=parseInt(foodCost) +parseInt(rentCost)+parseInt(colthCost);
    const expenes=document.getElementById('total-expenes');
  expenes.innerText=totalExpenes;
    const blance=document.getElementById('blance');
     
   const blanceTotal=parseInt(income)-totalExpenes;
   blance.innerText=blanceTotal; */
   calculateTotal();
   errorMessage('income-error')
   errorMessage('food-error')
   errorMessage('rent-error')
   errorMessage('colth-error')
   
});


// total calculation
function calculateTotal(){
   const foodCost=document.getElementById('food-cost').value;
    const rentCost=document.getElementById('rent-cost').value;
    const colthCost=document.getElementById('colth-cost').value;
 
    const income=document.getElementById('income').value;

    const totalExpenes=parseInt(foodCost) +parseInt(rentCost)+parseInt(colthCost);
        const expenes=document.getElementById('total-expenes');
        const expenesTotal=parseInt(totalExpenes);
      expenes.innerText=expenesTotal;
      const blance=document.getElementById('blance');
      if (income<expenesTotal) {
          return alert('please input the valid number');
         
      }
     
      else{
        
         
        const blanceTotal=parseInt(income)-totalExpenes;
        blance.innerText=blanceTotal;
      }
      
    
}
// error messeage handle


function errorMessage(messeageError){
    
    const income=document.getElementById('income').value;
    const foodCost=document.getElementById('food-cost').value;
    const rentCost=document.getElementById('rent-cost').value;
    const colthCost=document.getElementById('colth-cost').value;
    const blance=document.getElementById('blance');
    const expenes=document.getElementById('total-expenes');
    const incomeError=document.getElementById(messeageError);
    const savingTotal=document.getElementById('saving-amount');
    if (isNaN(income) || income<0 ||isNaN(foodCost) ||foodCost<0 || isNaN(colthCost) || colthCost<0 || isNaN(rentCost) || rentCost<0)  {
        incomeError.style.display="block";
        blance.innerText='';
        expenes.innerText='';
        
    }
    if(blance.innerText<savingTotal.innerText){
        return alert('you have not enough money for saving');
        savingTotal.innerText="";
    }


  

}

const savaingBtn=document.getElementById ('saving-btn').addEventListener('click',function(){

   
    const income=document.getElementById('income').value;

    const savingPercent=document.getElementById('saving').value;
   

    const savingTotal=document.getElementById('saving-amount');
    const savingAmount=parseInt(income) * parseInt(savingPercent) /100;
    
    savingTotal.innerText=savingAmount;
   
    const blance=document.getElementById('blance');
   
  
        
    const remaingBlance=document.getElementById('remaing');
    
        
  
   
        const totalRemaingBlance=parseInt(blance.innerText) -savingAmount;
        remaingBlance.innerText=totalRemaingBlance;
  
   
   
        errorMessage()
 
   
    
})


