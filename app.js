function updateNumber (isincreasing, price, product){
    const updateInput = document.getElementById(product +'-number');
    let updateProductNumber = updateInput.value;
    if(isincreasing == true){
        updateProductNumber = parseInt(updateProductNumber) + 1;
    }
    else if(updateProductNumber > 0){
        updateProductNumber = parseInt(updateProductNumber) - 1;
    }
    updateInput.value = updateProductNumber; 
    const productTotal = document.getElementById(product +'-total');
    productTotal.innerText = updateProductNumber * price;
    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product +'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const mobileTotal = getInputValue('mobile') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = mobileTotal + caseTotal;
    document.getElementById('subtotal').innerText = subtotal;
    const tax = subtotal / 10;
    document.getElementById('tax').innerText = tax;
    const total = subtotal + tax;
    document.getElementById('total').innerText = total;

}

document.getElementById('increase-case').addEventListener('click', function(){
    updateNumber(true, 59, 'case');
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
})

document.getElementById('decrease-case').addEventListener('click', function(){
    updateNumber(false, 59,  'case');
    // const mobileInput = document.getElementById('case-number');
    // const mobileNumber = mobileInput.value;
    // mobileInput.value = parseInt(mobileNumber) - 1;
})
document.getElementById('increase-mobile').addEventListener('click', function(){
    updateNumber(true, 1219,  'mobile');
})
document.getElementById('decrease-mobile').addEventListener('click', function(){
    updateNumber(false, 1219, 'mobile');
})