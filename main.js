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
            // TODO: error message does not erase when field is not empty
            while (errorContainer.firstChild) {
                errorContainer.removeChild(errorContainer.firstChild); 
            }

            let error = document.createElement('div');
            // get the label text content and append it instead of id
            let label = document.querySelector(`label[for='${id}']`).textContent.toLowerCase(); 
            label = label.charAt(0).toUpperCase() + label.slice(1); 

            error.textContent = `${label} ${text}.`
            error.style.color = 'red'; 
            errorContainer.appendChild(error);

            const input = document.getElementById(id); 
            if (input) {
                input.style.border = '1px solid red'; 
                input.style.borderRadius = '2px'
            } else {
                console.error(`Parent element with ID '${id}' not found.`)
            }
        } else {
            console.error(`Error container with ID '${id}-error' not found.`)
        }
    });
}
