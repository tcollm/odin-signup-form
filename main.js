document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup'); 
    form.addEventListener('submit', (e) => {
        validateForm(e); 
    })
})

// get document inputs and output errors 
function validateForm(event) {
    // const form = document.getElementById('signup');
    const ids = ['first_name', 'last_name', 'email', 'phone_number', 'pwd', 'confirm_pwd']
    const messages = ids
        .map(id => document.getElementById(id))
        .filter(input => input.value === '' || input.value === null)
        .map(input => `${input.id} is empty`); 

    displayErrors(messages); 

    if (messages.length > 0) {
        event.preventDefault(); 
    }
}

function displayErrors(messages) {
    messages.forEach((message) => {
        let messageArray = message.split(' ');
        let id = messageArray.shift(); 
        let text = messageArray.join(' ');  

        console.log(message); 

        const errorContainer = document.getElementById(`${id}-error`); 

        if (errorContainer) {
            // TODO: append div to input to state the error
            let error = document.createElement('div');
            error.textContent = text; 
            // error.classList.add('error-message'); // Style as a CSS error message
            errorContainer.appendChild(error);

            const input = document.getElementById(id); 
            if (input) {
                input.style.border = '2px solid red'; 
            } else {
                console.error(`Parent element with ID '${id}' not found.`)
            }
        } else {
            console.error(`Error container with ID '${id}-error' not found.`)
        }
    });
}
