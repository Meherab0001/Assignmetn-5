const totalCost=document.getElementById('calculate');





totalCost.addEventListener('click',function(){
    const foodCost=document.getElementById('food').value;
const rentCost=document.getElementById('rent').value;
const colthCost=document.getElementById('colth').value;

const income=document.getElementById('income').value;
    const totalExpenes=parseFloat(foodCost) +parseFloat(rentCost)+parseFloat(colthCost);
    const expenes=document.getElementById('total-expenes');
  expenes.innerHTML=totalExpenes;
    const blance=document.getElementById('blance');
     
   const blanceTotal=parseFloat(income)-totalExpenes;
   blance.innerHTML=blanceTotal;
});



