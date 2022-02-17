
 

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
   errorMessage()
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
         
       const blanceTotal=parseInt(income)-totalExpenes;
       blance.innerText=blanceTotal;
    
}
// error messeage handle


function errorMessage(){
    
    const income=document.getElementById('income').value;
    const foodCost=document.getElementById('food-cost').value;
    const rentCost=document.getElementById('rent-cost').value;
    const colthCost=document.getElementById('colth-cost').value;
    const blance=document.getElementById('blance');
    const expenes=document.getElementById('total-expenes');
    const calculateError=document.getElementById('calc');

    if (income<expenes) {
      return alert('Please enter the correct amount'); 
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

 
   
    
})


