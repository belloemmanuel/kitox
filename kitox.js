let regularPrice = document.getElementById('regularprice');
let totalPrice = document.getElementById('totalprice');

regularPrice.addEventListener('keyup',calcDiscount)

function calcDiscount(){
calcDiscount = parseInt(regularPrice.value) * 0.5
if(regularPrice.value == '' || isNaN(regularPrice.value)){
    totalPrice.innerHTML = '<em>Please Enter a Regular Price</em>'
} else {totalPrice.innerHTML = `$${calcDiscount}`}
}

 