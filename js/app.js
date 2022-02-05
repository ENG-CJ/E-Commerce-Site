// js file

// variables
let cart=document.querySelector('.cart');
let buyNow=document.querySelector('.buy-now');
let watch=document.querySelector('.watch')



//evennts
cart.addEventListener('click',info);
buyNow.addEventListener('click',buy)














// functions
function info(){
    alert('This Is Not Currently Working\nWe Will Fix')
}

function buy(){
    ans=prompt('Value');
    if (ans==20){
        alert('Buyed')
    }else{
        alert('Invalid Value')
    }
}


