// select input using query selector

let firstClassInput = document.querySelector('#firstClass-input');
// let firstClassPlusBtn = document.querySelector('#firstClass-plus');
// let firstClassMinusBtn = document.querySelector('#firstClass-minus');
let economyInput = document.querySelector('#economy-input');
// let economyPlusBtn = document.querySelector('#economy-plus');
// let economyMinusBtn = document.querySelector('#economy-minus');
let vatInput = document.querySelector('#vat');
let subtotal = document.querySelector('#subtotal');
let total = document.querySelector('#total');
let bookNowBtn = document.querySelector('#book-button');
let increaseDecreaseBtn = document.querySelectorAll('.button-cursor');


// add event
for(let i = 0;i<increaseDecreaseBtn.length;i++){
    increaseDecreaseBtn[i].addEventListener('click',(e)=>{
        if(e.target.innerText == '+'){
            let Id = e.target.id;
            changeFun(Id,true);
          
        }
        else{
           Id = e.target.id;
           changeFun(Id,false);
        }
    })
}

const changeFun = (takeId,isIncreasing)=>{
   let firstClassInputNew = firstClassInput.value;
   let economyClassInputNew = economyInput.value;
 
  
   if(isIncreasing == true){
    
      if(takeId == 'firstClass-plus'){
        let firstClassInputNumber = parseInt(firstClassInputNew);
         let firstClassInputNumberNew = firstClassInputNumber + 1;
        document.querySelector('#firstClass-input').value = firstClassInputNumberNew;
        let priceByTicketFirstClass = PriceByNumberOfTicket('firstClass-input',firstClassInputNumberNew);
        let priceByTicketEconomy = PriceByNumberOfTicket('economy-input',economyInput.value);
      
        let subtotal1 = subtotalFun(priceByTicketFirstClass,priceByTicketEconomy);
        
        document.querySelector('#subtotal').innerText ='$'+subtotal1;
        vatFun(subtotal1);
      }
      else{
         let economyClassInputNumber = parseInt(economyClassInputNew);
        let economyClassInputNumberNew = economyClassInputNumber + 1;
        document.querySelector('#economy-input').value = economyClassInputNumberNew;
        let priceByTicketFirstClass = PriceByNumberOfTicket('firstClass-input',firstClassInput.value);
        let priceByTicketEconomy = PriceByNumberOfTicket('economy-input',economyClassInputNumberNew);
        let subtotal2 = subtotalFun(priceByTicketFirstClass,priceByTicketEconomy);
        document.querySelector('#subtotal').innerText ='$'+ subtotal2;
        vatFun(subtotal2);
      }
      
   }
   if(isIncreasing == false){
    if(takeId == 'firstClass-minus'){
        let firstClassInputNumber = parseInt(firstClassInputNew);
        let firstClassInputNumberNew = 1;
        if(firstClassInputNumber > 1){
             firstClassInputNumberNew = firstClassInputNumber - 1;
        }
        document.querySelector('#firstClass-input').value = firstClassInputNumberNew;
        let priceByTicketFirstClass= PriceByNumberOfTicket('firstClass-input',firstClassInputNumberNew);
        let priceByTicketEconomy = PriceByNumberOfTicket('economy-input',economyInput.value);
        let subtotal3 = subtotalFun(priceByTicketFirstClass,priceByTicketEconomy);
        document.querySelector('#subtotal').innerText ='$'+ subtotal3;
        vatFun(subtotal3);
      }

      else{
        let economyClassInputNumber = parseInt(economyClassInputNew);
       let economyClassInputNumberNew = 1;
        if(economyClassInputNumber > 1){
             economyClassInputNumberNew = economyClassInputNumber - 1;
        }
        document.querySelector('#economy-input').value = economyClassInputNumberNew;
        let priceByTicketFirstClass= PriceByNumberOfTicket('firstClass-input',firstClassInput.value);
        let priceByTicketEconomy = PriceByNumberOfTicket('economy-input',economyClassInputNumberNew);
        
        let subtotal4 = subtotalFun(priceByTicketFirstClass,priceByTicketEconomy);
        document.querySelector('#subtotal').innerText ='$'+subtotal4;
        vatFun(subtotal4);
      }
   }
  
}

// calculate total first class and economy class tiket price

const PriceByNumberOfTicket = (inputName,numberOfTicket)=>{
    let result;
      if(inputName == 'firstClass-input'){
           result = 150 * numberOfTicket;
          return result;
      }
      else{
          result = 100 * numberOfTicket;
          return result;
      }
     
}


const subtotalFun = (price1,price2)=>{
     let subtotal = price1 + price2;
     return subtotal;
}

const vatFun = (subtotal)=>{
    let vat = subtotal * 0.1;
    vatInput.innerText ='$'+ vat;
    totalFun(subtotal,vat);
}

const totalFun = (subtotal,totalVat)=>{
     let total = subtotal + totalVat;
     document.querySelector('#total').innerText ='$'+ total;
}

bookNowBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let hideMenu = document.querySelector('#main-section');
    hideMenu.style.display = 'none';
    let showMenu = document.querySelector('#product-clip');
    showMenu.style.display = 'block';
    let bookFirstInput = document.querySelector('#firstClass-input').value;
    document.querySelector('#number-first').innerText = bookFirstInput;
    let bookFirstPrice = bookFirstInput * 150;
    document.querySelector('#first-price').innerText =bookFirstPrice;
    


    
    let bookEconomyInput = document.querySelector('#economy-input').value;
    document.querySelector('#number-economy').innerText = bookEconomyInput;
    let bookEconomyPrice = bookEconomyInput * 100;
    document.querySelector('#economy-price').innerText =bookEconomyPrice;
    document.querySelector('#proceed-subtotal').innerText = subtotal.innerText;
    document.querySelector('#proceed-tax').innerText = vatInput.innerText;
    document.querySelector('#proceed-total').innerText = total.innerText;




})


document.querySelector('#proceed-btn').addEventListener('click',(e)=>{
    e.preventDefault();
    let hideMenu = document.querySelector('#product-clip');
    hideMenu.style.display = 'none';

    let showMenu = document.querySelector('#main-section');
    showMenu.style.display = 'block';

    document.querySelector('#firstClass-input').value = '1';
    document.querySelector('#economy-input').value = '1';
    document.querySelector('#vat').innerText = '$25';
    document.querySelector('#subtotal').innerText = '$250';
    document.querySelector('#total').innerText = '$275';
})