const form = document.getElementById('auth');
const email = document.getElementById('mail');
const error = document.getElementById('error');

form.addEventListener('submit', e => {
    e.preventDefault()
    
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))   {
        error.style.display = 'flex';
    }else
        error.style.display = 'none';
    })
    
    
