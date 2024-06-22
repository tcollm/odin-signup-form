

document.addEventListener('submit', () => {
    validateForm(); 
})

// get document inputs and output errors 
function validateForm() {
    const ids = ['first_name', 'last_name', 'phone_number', 'pwd', 'confirm_pwd']
    const messages = ids
        .map(id => document.getElementById(id))
        .filter(input => input.value === '' || input.value === null)
        .map(input => `${input.id} is empty`); 

    console.log(messages[i]); 

}




