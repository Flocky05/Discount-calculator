document.getElementById('btn-submit').addEventListener('click',function(){
   const getPrice=document.getElementById('price');
   const priceTotal=parseFloat(getPrice.value);
   
   const youPrice=document.getElementById('your-price');
   const previousYourPrice=parseFloat(youPrice.innerText);
   
   const newTotalprice=priceTotal+previousYourPrice;
   youPrice.innerText=newTotalprice;

   // priceTotal=" ";

   const totalDiscount=(priceTotal*30)/100;

   const verificationCode=document.getElementById('verification-code');
   const code=verificationCode.value;

   const totalDiscountPrice= document.getElementById('discount');
   const priceDiscount=parseFloat(totalDiscountPrice.innerText);

  if(code=='DOM'){
   const newTotalPriceWithDiscount=totalDiscount;
   totalDiscountPrice.innerText=newTotalPriceWithDiscount;
  }

})