let regularPrice = document.getElementById('regularprice');
let totalPrice = document.getElementById('totalprice');

regularPrice.addEventListener('keyup',calcDiscount)

function calcDiscount(){
calcDiscount = parseInt(regularPrice.value) * 0.5
if(regularPrice.value == ''){
    totalPrice.innerHTML = '<em>Please Enter a Regular Price</em>'
    totalPrice.style.color = "red"
    totalPrice.style.fontSize = "14px"
} else if(isNaN(regularPrice.value)){
    totalPrice.innerHTML = '<em>Please Enter a Valid Price</em>'
    totalPrice.style.color = "red"
}
    else {totalPrice.innerHTML = `$${calcDiscount}`
    totalPrice.style.color = "white"
}
}

 